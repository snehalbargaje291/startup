import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-selleradd',
  standalone: true,
  imports: [SelleraddComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './selleradd.component.html',
  styleUrl: './selleradd.component.css'
})
export class SelleraddComponent {
  
}
