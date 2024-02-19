import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    emailorphone: new FormControl( '',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  onSubmitLogin(){
    if (this.loginForm.valid && this.loginForm.value.emailorphone === 'snehal123@gmail.com' && this.loginForm.value.password === 'Sneh@123') {
      alert('Login successful!');
      console.log('Form submitted with values:', this.loginForm.value);
    } else {
      alert('Invalid credentials');
    }
  }
}
