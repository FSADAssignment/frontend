import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";

  onLoginTab(): void{
    this.active = "login";
  }

  onRegisterTab(): void{
    this.active = "register";
  }

  onSubmitLogin(): void{
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  onSubmitRegister(): void{
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName, "lastName": this.lastName,
      "login": this.login, "password": this.password});
  }


}
