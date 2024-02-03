import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sellereg',
  standalone: true,
  imports: [SelleregComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './sellereg.component.html',
  styleUrl: './sellereg.component.css'
})
export class SelleregComponent {

}
