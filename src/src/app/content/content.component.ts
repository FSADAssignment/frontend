import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { LoggedOutComponent } from '../logged-out/logged-out.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LoginComponent, HomeComponent, CommonModule, LoginButtonComponent, LogoutButtonComponent, LoggedOutComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string = "logged-out";

  constructor(private axiosService: AxiosService){}

  showComponent(componentToShow: string){
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void{
    this.axiosService.requestData(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "home";
    });
  }

  onRegister(input: any): void{
    this.axiosService.requestData(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "home";
    });
  }

}
