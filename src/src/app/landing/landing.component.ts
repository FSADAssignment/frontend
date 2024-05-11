import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { ContentComponent } from '../content/content.component';
import { LoggedOutComponent } from '../logged-out/logged-out.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatTabsModule, LoggedOutComponent, HeaderComponent, LoginComponent, ContentComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
