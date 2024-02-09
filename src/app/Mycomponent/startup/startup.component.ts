import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [StartupComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.css'
})
export class StartupComponent {
  constructor(private router: Router) {}

  displayTextSignup = 'Signup';
  displayTextAbout = 'Services';
  initialRouterLinkSignup = './signup';
  initialRouterLinkAbout = './services';

  changeToLogin() {
    if (this.router.url === '/login') {
      this.displayTextSignup = 'Signup';
      this.initialRouterLinkSignup = './signup';
    } else if (this.router.url === '/signup') {
      this.displayTextSignup = 'Login';
      this.initialRouterLinkSignup = './login';
    }
  }

  changeToContact() {
    this.displayTextAbout = 'Contact';
    this.initialRouterLinkAbout = './contact'
  }

  resetTextAndRouterLink() {
    this.displayTextSignup = 'Signup';
    this.initialRouterLinkSignup = './signup';
    this.displayTextAbout = 'Services';
    this.initialRouterLinkAbout = './services';
  }
}
