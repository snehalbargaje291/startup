import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule, CommonModule, SignupComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  formData: any = {};

  constructor(private myservice:MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpForm(formData: any) {
    alert("Signup Button working");
    if (typeof localStorage === 'undefined') {
      alert("localStorage is not supported in this environment.");
      return;
    }
    this.myservice.signUp(formData).subscribe(
      (response: any) => {
        if (response.success) {
          alert("response is success");
          console.log('Response:', response);
          this.router.navigate(['./login']);
        } else {
          alert("Error..");
          console.error("Something went wrong...");
        }
      }
    );
  }
}



