import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';

  currentUrl = '';

  constructor(public auth: AuthService, private router: Router) {
    // track current route for conditional nav
    router.events.subscribe(event => {
      // simplified check for NavigationEnd event
      if ((event as any).url) {
        this.currentUrl = (event as any).url;
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
