import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatTabsModule, HeaderComponent, LoginComponent, ContentComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
