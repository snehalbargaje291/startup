import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  accountDetails: any={data:[]}; // Assuming account details have the same structure as returned by the API

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.getAccountDetails();
  }

  getAccountDetails(): void {
    this.myservice.myAccount().subscribe({
      next: (response) => {
        this.accountDetails = response;
        console.log('User details:', response);
      },
      error: (error) => {
        console.error('Error fetching account details:', error);
      }
    });
  }
}
