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

  
  displayTextAbout = 'Services';
  initialRouterLinkAbout = './services';

  changeToContact() {
    this.displayTextAbout = 'Contact';
    this.initialRouterLinkAbout = './contact';
  }

   displayTextSignup = 'Signup';
   initialRouterLinkSignup = './signup';
  // changeToLogin() {
  //   if (this.displayTextSignup === 'Signup') {
  //     this.displayTextSignup = 'Signin';
  //     this.initialRouterLinkSignup = './login';
  //   }
  // }

  // changeToSignup() {
  //   if (this.displayTextSignup === 'Signin') {
  //     this.displayTextSignup = 'Signup';
  //     this.initialRouterLinkSignup = './signup';
  //   }
  // }

  // handleSignupClick() {
  //   if (this.displayTextSignup = 'Signup') {
  //     this.changeToSignup();
  //   } else {
  //     this.changeToLogin();
  //   }
  // }
  
  resetTextAndRouterLink() {
    this.displayTextSignup = 'Signup';
    this.initialRouterLinkSignup = './signup';
    this.displayTextAbout = 'Services';
    this.initialRouterLinkAbout = './services';
  }
}
