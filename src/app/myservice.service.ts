import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient, private router:Router) { }

  private apiUrl = 'http://3.111.47.3:24051/api/v1/userlogin';

  login(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  setAuthToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  // loggedIn() {
  //   return !! sessionStorage.getItem('token');
  // }
  loggedIn(): boolean {
    if (typeof sessionStorage !== 'undefined') {
      return !!sessionStorage.getItem('token');
    } else {
      console.error("sessionStorage is not supported in this environment.");
      return false;
    }
  }

  getAuthToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logoutUser() {
    return sessionStorage.removeItem('token');
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
