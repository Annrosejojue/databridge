import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup';
import { LoginComponent } from './auth/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
