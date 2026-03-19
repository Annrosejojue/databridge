import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://127.0.0.1:8000/users/me', { headers })
      .subscribe(res => this.user = res);
  }
}
