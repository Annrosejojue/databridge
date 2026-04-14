import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  showSidebar = false;

constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Force it TRUE for now just to verify it's working
      this.showSidebar = true; 
      console.log("Current Route:", event.urlAfterRedirects);
    }
  });
}
}