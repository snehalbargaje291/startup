import { Component, OnInit } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, LoginComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formData: any ={ "data": []
  };

  constructor(private myservice: MyserviceService, private router: Router){}

  ngOnInit(): void {}

  login() {
    alert("Login button works!");
    this.myservice.login(this.formData).subscribe(
      (response: any) => {
        if (response.success) {
          // alert("Response is success");
          console.log('Logged In Successfully!', response);
          const token = response.token;
          localStorage.setItem('token', token);
          this.router.navigate(['/']);
        } else {
          // alert("Login failed");
          console.error('Login failed:', response.message);
        }
      }
    );
  }
  
// async login() {
//   alert("button is working");
//   try {
//     const response = await lastValueFrom(this.myservice.login(this.formData));

//     if (response.success) {
//       console.log('Logged In Successfully!', response);
//       const token = response.token;
//       localStorage.setItem('token', token);
//       this.router.navigate(['/']);
//     } else {
//       console.error('Login failed:', response.message);
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }
}
