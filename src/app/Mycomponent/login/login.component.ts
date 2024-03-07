import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, LoginComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData: any ={};

  constructor(private myservice: MyserviceService){}

  login(): void {
    this.myservice.login(this.formData).subscribe(
      (response: any) => {
        console.log('Logged In Successfully!', response);
        // Extract token from response and store it in local storage
        const token = response.token;
        localStorage.setItem('token', token);
        // Additional logic after successful login (e.g., redirect)
      }
    );
  }
  
}
