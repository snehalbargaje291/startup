// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MyserviceService {

//   constructor(private http: HttpClient, private router:Router) { }

//   private apiUrl = 'http://3.111.47.3:24051/api/v1/userlogin';

//   login(formData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, formData);
//   }

//   setAuthToken(token: string): void {
//     localStorage.setItem('token', token);
//   }

//   // loggedIn() {
//   //   return !! localStorage.getItem('token');
//   // }
//   loggedIn(): boolean {
//     if (typeof localStorage !== 'undefined') {
//       return !!localStorage.getItem('token');
//     } else {
//       console.error("localStorage is not supported in this environment.");
//       return false;
//     }
//   }

//   getAuthToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   logoutUser() {
//     return localStorage.removeItem('token');
//   }
  
//   signUp(formData: any): Observable<any> {
//     return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateUserDetails', formData);
//   }
//   contactUs(formData: any): Observable<any> {
//     return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData);
//   }
//   category(): Observable<any> {
//     return this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllCategory');
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage'; // Import from ngx-webstorage

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: LocalStorageService // Use LocalStorageService from ngx-webstorage
  ) { }

  private apiUrl = 'http://3.111.47.3:24051/api/v1/userlogin';

  login(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  setAuthToken(token: string): void {
    this.storage.store('token', token); // Use store method from ngx-webstorage
  }

  loggedIn(): boolean {
    return !!this.storage.retrieve('token'); // Use retrieve method from ngx-webstorage
  }

  getAuthToken(): string | null {
    return this.storage.retrieve('token'); // Use retrieve method from ngx-webstorage
  }

  logoutUser() {
    this.storage.clear('token'); // Use clear method from ngx-webstorage
  }
  
  signUp(formData: any): Observable<any> {
    return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateUserDetails', formData);
  }
  
  contactUs(formData: any): Observable<any> {
    return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData);
  }
  
  category(): Observable<any> {
    return this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllCategory');
  }
}
