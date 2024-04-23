import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService){}

  onLogin(input: any): void{
    this.axiosService.requestData(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    )
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
    )
  }

}
