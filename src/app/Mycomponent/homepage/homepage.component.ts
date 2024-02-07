import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Last3Component } from '../last3/last3.component';
import { ProductComponent } from '../product/product.component';
import { Slider1Component } from '../slider1/slider1.component';
import { NewarrivalComponent } from '../newarrival/newarrival.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomepageComponent,ProductComponent, NewarrivalComponent, Slider1Component, Last3Component,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
