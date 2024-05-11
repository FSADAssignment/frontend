import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { TestDetail } from '../beans/test-detail';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  standalone: true,
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css',
  imports: [MatListModule],
})
export class TestsComponent {
  @Input() selectedLanguage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.reloadComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.reloadComponent();
  }

  private reloadComponent() {
    this.http
      .get<any>('http://localhost:8181/assessment/available', {
        params: { language: this.selectedLanguage, userId: 'abc' },
      })
      .subscribe({
        next: (data) => {
          this.testList = data;
        },
        error: (error) => {
          console.error('Error occurred:', error);
        },
      });
  }

  testList: TestDetail[] = [];

  startTest(test: TestDetail) {
    this.testService.setLanguage(test.language);
    this.testService.setSubcategory(test.title);
    this.testService.setLevel(test.difficultyLevel);

    this.router.navigate(['/attempt']);
  }

  getHeading() {
    if (this.selectedLanguage) {
      return 'Available Tests in your selected Language are : ';
    }
    return 'Please select a language in courses section first !';
  }
}
