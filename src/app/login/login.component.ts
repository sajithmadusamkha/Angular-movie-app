import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  login() {
    if (this.username.trim().length === 0) {
      this.error = 'User Name is required';
    } else if (this.password.trim().length === 0) {
      this.error = 'Pawword is required';
    } else {
      this.error = '';
    }
  }
}
