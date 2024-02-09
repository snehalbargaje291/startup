import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [StartupComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.css'
})
export class StartupComponent {
  displayTextSignup: string = 'Signup';
  displayTextAbout: string = 'Services';
  initialRouterLinkSignup: string = './signup';
  initialRouterLinkAbout: string = './services';

  changeToLogin() {
    this.displayTextSignup = 'Login';
    this.initialRouterLinkSignup = './login';
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
