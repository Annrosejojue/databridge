import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  form = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.auth.login(this.form).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.access_token);
        this.router.navigate(['/dashboard']);
      },
      error: () => alert('Invalid credentials')
    });
  }
}
