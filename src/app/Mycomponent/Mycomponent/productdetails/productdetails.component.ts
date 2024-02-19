import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [ProductComponent ,RouterOutlet,RouterLink,RouterModule,RouterLinkActive],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  value: number = 2;

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
