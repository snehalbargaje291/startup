import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Last3Component } from '../last3/last3.component';
import { ProductComponent } from '../product/product.component';
import { Slider1Component } from '../slider1/slider1.component';
import { NewarrivalComponent } from '../newarrival/newarrival.component';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-homepage', 
  standalone: true,
  imports: [CommonModule, HomepageComponent,ProductComponent, NewarrivalComponent, Slider1Component, Last3Component,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {
  // productName: string = "AK-900 Wired Keyboard";
  // productPrice: number = 960;
  categories:any[]=[{data: []}];
  products: any[] = [{data:[]}];
  constructor(private myservice: MyserviceService) { }
  ngOnInit(): void {
    this.fetchCategoryDetsails();
    this.fetchProducts();
  }

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

scrollAmount = 10; 
scrollDuration = 1000; 

scrollDiv(direction: 'left' | 'right') {
  const container = this.scrollContainer.nativeElement;
  const scrollStep = this.scrollAmount;
  const scrollDuration = this.scrollDuration;
  const scrollWidth = direction === 'left' ? -scrollStep : scrollStep;
  const scrollDirection = direction === 'left' ? 'scrollLeft' : 'scrollLeft';

  let startTime: number;

  const animateScroll = (timestamp: number) => {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1); // Ensure progress is between 0 and 1
    container[scrollDirection] += scrollWidth * progress; // Scroll container based on progress

    if (elapsed < scrollDuration) {
      requestAnimationFrame(animateScroll); // Continue animating
    }
  };

  requestAnimationFrame(animateScroll); // Start animation
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

    scrollToTop(): void {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
}

