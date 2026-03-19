import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
})
export class SignupComponent {
  form = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthService) {}

  submit() {
    this.auth.signup(this.form).subscribe({
      next: () => alert('Signup successful'),
      error: () => alert('Signup failed')
    });
  }
}
