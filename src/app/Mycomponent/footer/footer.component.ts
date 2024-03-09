import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

  constructor(public myservice:MyserviceService){}

  redirectToFacebook() {
    window.location.href = 'https://www.facebook.com';
  }
  redirectToTwitter() {
    window.location.href = 'https://www.twitter.com';
  }
  redirectToInstagram() {
    window.location.href = 'https://www.instagram.com';
  }
  redirectToLinkedin() {
    window.location.href = 'https://www.linkedin.com';
  }
}
