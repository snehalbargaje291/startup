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
    if (this.displayTextSignup === 'Signup') {
      this.displayTextSignup = 'Signin';
      this.initialRouterLinkSignup = './login';
    }
  }

  changeToSignup() {
    if (this.displayTextSignup === 'Signin') {
      this.displayTextSignup = 'Signup';
      this.initialRouterLinkSignup = './signup';
    }
  }

  changeToContact() {
    this.displayTextAbout = 'Contact';
    this.initialRouterLinkAbout = './contact';
  }

  handleSignupClick() {
    if (this.displayTextSignup === 'Signin') {
      this.changeToSignup();
    } else {
      this.changeToLogin();
    }
  }
  
  resetTextAndRouterLink() {
    this.displayTextSignup = 'Signup';
    this.initialRouterLinkSignup = './signup';
    this.displayTextAbout = 'Services';
    this.initialRouterLinkAbout = './services';
  }
}
