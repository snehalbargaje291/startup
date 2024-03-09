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

  signUpForm(formData: any): void {
    this.myservice.signUp(formData).subscribe(
      (response:any) => {
        console.log('Response:', response);
        alert(response.message);
        this.router.navigate(['./login']);
      }
    );
  }
}



