import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  // You can add logic here later, like fetching real user data from the DB
  userName: string = 'Ann Rose';
  userEmail: string = 'annrose@gmail.com';
  userRole: string = 'AI Engineer';
  userLocation: string = 'United States';
}