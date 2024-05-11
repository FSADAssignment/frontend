import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { TestResultResponse } from '../beans/test';
import { ReviewResultComponent } from '../review-result/review-result.component';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-test-result',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReviewResultComponent,
    MatExpansionModule,
  ],
  templateUrl: './test-result.component.html',
  styleUrl: './test-result.component.css',
})
export class TestResultComponent {
  testResultResponse: TestResultResponse = new TestResultResponse();
  percentageCorrect: number = 0;
  attemptedCount: number = 0;
  unattemptedCount: number = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.http
      .post<any>(
        'http://localhost:8181/assessment',
        this.testService.getTestData()
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.testResultResponse = data;
          this.populateResult();
        },
        error: (error) => {
          console.error('Error occurred:', error);
        },
      });
  }
  populateResult() {
    let totalQuestions = this.testResultResponse?.questions?.length;

    if (!totalQuestions) {
      this.percentageCorrect = 0;
      this.attemptedCount = 0;
    } else {
      this.percentageCorrect = Math.round(
        (this.testResultResponse?.score / totalQuestions) * 100
      );
    }

    this.unattemptedCount = 0;
    this, (this.attemptedCount = 0);
    this.testResultResponse.questions.forEach((q) => {
      if (q.userSelectedOptionIndex === -1) {
        this.unattemptedCount++;
      }
    });

    if (totalQuestions) {
      this.attemptedCount = totalQuestions - this.unattemptedCount;
    }
  }

  home() {
    this.router.navigate(['/home']);
  }
}
