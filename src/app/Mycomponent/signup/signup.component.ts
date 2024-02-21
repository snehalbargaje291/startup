import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, SignupComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup= new FormGroup({});

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      yourname: new FormControl(null),
      emailorphone: new FormControl(null),
      password: new FormControl(null)
    });
  }

  SignUpSubmit(){
    console.log(this.signUpForm.value)
  }
}
