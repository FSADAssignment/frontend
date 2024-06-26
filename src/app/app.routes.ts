import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';
import { TestResultComponent } from './test-result/test-result.component';
import { TestsComponent } from './tests/tests.component';

export const routes: Routes = [
    { path: '',   redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tests', component: TestsComponent },
    { path: 'attempt', component: AttemptTestComponent },
    { path: 'testResult', component: TestResultComponent }
];
