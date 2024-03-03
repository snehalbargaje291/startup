import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Last3Component } from '../last3/last3.component';
import { ProductComponent } from '../product/product.component';
import { Slider1Component } from '../slider1/slider1.component';
import { NewarrivalComponent } from '../newarrival/newarrival.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

//http://3.111.47.3:24051/api/v1/getAllCategory
@Component({
  selector: 'app-homepage', 
  standalone: true,
  imports: [CommonModule, HomepageComponent,ProductComponent, NewarrivalComponent, Slider1Component, Last3Component,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {
  categories:any=[{data: []}];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchCategoryDetails();
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  fetchCategoryDetails(): void {
    this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllCategory').subscribe(
      (response) => {
        if (response.success && response.data&& Array.isArray(response.data)) {
          this.categories = response.data;
        } else {
          console.error('Error fetching product details:', response.message);
        }
      }
    );
  }
}
