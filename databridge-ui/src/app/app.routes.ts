import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';
import { DashboardComponent } from './pages/dashboard/dashboard';
// Added these imports to fix the red squiggles in the routes array
import { AnalyticsComponent } from './pages/analytics/analytics';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: DashboardComponent }, // Point this to Dashboard
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];