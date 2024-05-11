import { Component, Input } from '@angular/core';
import { QuestionSolution } from '../beans/test';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-result',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './review-result.component.html',
  styleUrl: './review-result.component.css',
})
export class ReviewResultComponent {
  @Input() questionSolutions: QuestionSolution[] = [];

  getSelectedOption(question: QuestionSolution) {
    if (question?.userSelectedOptionIndex === -1) {
      return 'You did not attempt this question';
    } else {
      return (
        'Your Selection ' + question.options[question?.userSelectedOptionIndex]
      );
    }
  }
}
