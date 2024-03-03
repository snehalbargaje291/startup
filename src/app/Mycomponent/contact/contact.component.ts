import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  formData:any={}
  constructor(private http:HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  submitForm(formData: any): void {
    this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.router.navigate(['cart']);
      }
    );
  }
}