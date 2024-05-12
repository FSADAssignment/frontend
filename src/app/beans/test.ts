export class TestAttemptResponse {
    public assessmentId: number = 0;
    public attemptId: number = 0;
    public questions: Question[] = [];
  }
  
  export class Question {
    public id: string = '';
    public language: string = '';
    public level: string = '';
    public options: string[] = [];
    public questionText: string = '';
    public subcategory: string = '';
  }
  
  export class SubmitTestRequest {
    public attemptId: number = 0;
    public assessmentId: number = 0;
    public userId: string = '';
    public answers: Answer[] = [];
  }
  
  export class Answer {
    public questionId: string = '';
    public selectedOptionIndex: number = -1;
  }
  
  export class TestResultResponse {
    public assessmentId: number = 0;
    public attemptId: number = 0;
    public userId: string = '';
    public questions: QuestionSolution[] = [];
    public score: number = 0;
  }
  
  export class QuestionSolution {
    public correctOptionIndex: number = -1;
    public questionId: string = '';
    public options: string[] = [];
    public questionText: string = '';
    public userSelectedOptionIndex: number = -1;
  }
  