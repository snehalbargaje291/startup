import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartComponent, FormsModule, RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  price= 650;
  quantity: any = 1;
  total: any;
  price1= 550;
  quantity1: any = 1;
  total1: any;
  subTotal: any;
  ngOnInit(){
    
  }
  upDateCart(){
    this.total = this.price * this.quantity;
    this.total1 = this.price1 * this.quantity1;
    this.subTotal = this.total + this.total1;
  }
}
