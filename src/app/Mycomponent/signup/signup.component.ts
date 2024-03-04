import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule, CommonModule, SignupComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  formData:any={data:[{}]}
  constructor(private http:HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  signUpForm(formData: any): void {
    this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateUserDetails', formData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.router.navigate(['']);
      }
    );
  }
}



