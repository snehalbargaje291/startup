import { Component } from '@angular/core';
import { RouterModule,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { Slider1Component } from '../slider1/slider1.component';

@Component({
  selector: 'app-services1',
  standalone: true,
  imports: [Services1Component,Slider1Component, RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './services1.component.html',
  styleUrl: './services1.component.css'
})
export class Services1Component {

}
