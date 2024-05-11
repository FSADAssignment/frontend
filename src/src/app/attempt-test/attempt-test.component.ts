import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Answer, SubmitTestRequest, TestAttemptResponse } from '../beans/test';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-attempt-test',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './attempt-test.component.html',
  styleUrl: './attempt-test.component.css',
})
export class AttemptTestComponent {
  testAttemptResponse: TestAttemptResponse = new TestAttemptResponse();
  submitTestRequest: SubmitTestRequest = new SubmitTestRequest();
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  options = ['', '', '', ''];
  questionText: string = '';
  totalQuestions: number = 0;
  progress: number = 0;
  answers: Map<string, number> = new Map();
  attemptedQuestionsIndex: Set<number> = new Set();

  constructor(
    private http: HttpClient,
    private router: Router,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:8181/assessment', {
        params: {
          username: 'abc',
          language: this.testService.getLanguage(),
          subcategory: this.testService.getSubcategory(),
          level: this.testService.getLevel(),
        },
      })
      .subscribe({
        next: (data) => {
          this.testAttemptResponse = data;
          this.setQuestion();
          this.initialiseTestResponse();
        },
        error: (error) => {
          console.error('Error occurred:', error);
        },
      });
  }

  prevQuestion() {
    if (this.currentQuestionIndex === 0) {
      return;
    }
    this.currentQuestionIndex--;
    this.setQuestion();
    this.calculateProgress();
  }

  nextQuestion() {
    if (
      this.currentQuestionIndex ===
      this.testAttemptResponse?.questions?.length - 1
    ) {
      return;
    }
    this.currentQuestionIndex++;
    this.setQuestion();
    this.calculateProgress();
  }

  private setQuestion() {
    this.questionText =
      this.testAttemptResponse?.questions[
        this.currentQuestionIndex
      ].questionText;
    this.options =
      this.testAttemptResponse?.questions[this.currentQuestionIndex]?.options;
    this.totalQuestions = this.testAttemptResponse?.questions?.length;
  }

  onSelectionChange(answer: string): void {
    let question =
      this.testAttemptResponse?.questions[this.currentQuestionIndex];

    let selectedOption = question.options.indexOf(answer);
    this.answers.set(question.id, selectedOption);

    this.attemptedQuestionsIndex.add(this.currentQuestionIndex);
  }

  initialiseTestResponse() {
    this.submitTestRequest.assessmentId =
      this.testAttemptResponse?.assessmentId;
    this.submitTestRequest.attemptId = this.testAttemptResponse?.attemptId;
    this.submitTestRequest.userId = 'abc';

    this.answers.clear();

    this.testAttemptResponse.questions.forEach((question) => {
      this.answers.set(question.id, -1);
    });
  }

  private calculateProgress() {
    if (this.totalQuestions === 0) {
      this.progress = 0;
      return;
    }
    this.progress =
      (100 * this.attemptedQuestionsIndex.size) / this.totalQuestions;
  }

  getProgress() {
    return this.progress;
  }

  submitTest() {
    this.submitTestRequest.answers = [];
    this.answers.forEach((selectedAnswer, questionId) => {
      let answer = new Answer();
      answer.questionId = questionId;
      answer.selectedOptionIndex = selectedAnswer;
      this.submitTestRequest.answers.push(answer);
    });

    this.testService.setTestData(this.submitTestRequest);
    this.router.navigate(['/testResult']);
  }
}
