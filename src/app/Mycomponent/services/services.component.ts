import { Component } from '@angular/core';
import { RouterModule,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { Slider1Component } from '../slider1/slider1.component';
import { ProductComponent } from '../product/product.component';
import { Last3Component } from '../last3/last3.component';
import { NewarrivalComponent } from '../newarrival/newarrival.component';
import { MyserviceService } from '../../myservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServicesComponent,Slider1Component, NewarrivalComponent, ProductComponent, Last3Component, RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  categories:any=[{data: []}];
  products: any[] = [{data:[]}];
  constructor(private myservice: MyserviceService) { }
  ngOnInit(): void {
    this.fetchCategoryDetsails();
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.myservice.getProducts().subscribe(
      (response: any) => {
        if (Array.isArray(response.data)) {
          this.products = response.data;
        } else {
          console.error('Error: response.data is not an array');
        }
      }
    );
  }

    fetchCategoryDetsails(): void {
      this.myservice.category().subscribe(
        (response: any) => {
          if (response.success && response.data && Array.isArray(response.data)) {
            this.categories = response.data;
          } else {
            console.error('Error fetching category details:', response.message);
          }
        }
      );
    }

}
