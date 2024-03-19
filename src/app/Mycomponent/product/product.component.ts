import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() imageSrc: string = '../../../assets/service/s4.png';
  @Input() pName: string = 'Product1';
  @Input() pPrice: number = 0;

  constructor(){}
  ngOnInit(): void {  }

}
