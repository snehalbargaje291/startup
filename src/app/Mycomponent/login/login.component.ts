import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { warn } from 'node:console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, LoginComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData: any ={ "data": []
  };

  constructor(private myservice: MyserviceService, private router: Router){}

  login(): void {
    this.myservice.login(this.formData).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Logged In Successfully!', response);
          const token = response.token;
          sessionStorage.setItem('token', token);
          this.router.navigate(['/']);
        } else {
          console.error('Login failed:', response.message);
        }
      }
    );
  }
  
  
}
