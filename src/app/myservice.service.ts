import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jwtDecode } from "jwt-decode";




@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) {}


  login(formData: any): Observable<any> {
    return this.http.post<any>('http://3.111.47.3:24051/api/v1/userlogin', formData);
  }

  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
  } 

  loggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    } else {
      console.error("localStorage is not supported in this environment.");
      return false;
    }
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }
  // helloo 8845

  signUp(formData: any): Observable<any> {
    return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateUserDetails', formData);
  }
  contactUs(formData: any): Observable<any> {
    return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData);
  }
  sellerForm(formData: any): Observable<any> {
    return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreatesellerDetails', formData);
  }
  // http://3.111.47.3:24051/api/v1/getSingleUserDetails/8845
  // npm install jwt-decode
  
  myAccount(): Observable<any> {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log("User Data:", userData);
      const userId = userData[0]?.UserId; // Extract UserId from userData
      if (userId) {
        return this.http.get<any>(`http://3.111.47.3:24051/api/v1/getSingleUserDetails/${userId}`);
      } else {
        console.error("UserId not found in userData.");
        return of(null);
      }
    } else {
      console.error("User data not found in localStorage.");
      return of(null);
    }
  }

  category(): Observable<any> {
    return this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllCategory');
  }
}
