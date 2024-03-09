import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  formData: any ={ "data": []
  };

  constructor(private myservice: MyserviceService, private router: Router){}

  login(): void {
    this.myservice.login(this.formData).subscribe(
      (response: any) => {
        console.log('Logged In Successfully!', response);
        this.router.navigate(['/']);
        const token = response.token;
        localStorage.setItem('token', token);
      }
    );
  }
  
}
