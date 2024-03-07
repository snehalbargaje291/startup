import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
   
  formData: any = {};

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
  }

  submitForm(formData: any): void {
    this.myservice.contactUs(formData).subscribe(
      (response:any) => {
        console.log('Response:', response);
        alert("Your message has been sent successfully!");
      }
    );
  }
}