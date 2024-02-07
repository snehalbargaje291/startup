import { Component } from '@angular/core';
import { RouterModule,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { Slider1Component } from '../slider1/slider1.component';
import { ProductComponent } from '../product/product.component';
import { Last3Component } from '../last3/last3.component';
import { NewarrivalComponent } from '../newarrival/newarrival.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesComponent,Slider1Component, NewarrivalComponent, ProductComponent, Last3Component, RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
