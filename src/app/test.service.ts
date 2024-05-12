import { Injectable } from '@angular/core';
import { SubmitTestRequest } from './beans/test';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  language: string = 'en';
  subcategory: string = 'vocab';
  level: string = 'high';

  submitTestRequest: SubmitTestRequest = new SubmitTestRequest();
  constructor() {}

  getTestData(): SubmitTestRequest {
    return this.submitTestRequest;
  }

  setTestData(submitTestRequest: SubmitTestRequest) {
    this.submitTestRequest = submitTestRequest;
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(language: string) {
    this.language = language;
  }

  getSubcategory() {
    return this.subcategory;
  }

  setSubcategory(subcategory: string) {
    this.subcategory = subcategory;
  }

  getLevel() {
    return this.level;
  }

  setLevel(level: string) {
    this.level = level;
  }

}
