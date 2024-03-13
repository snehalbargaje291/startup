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
    return localStorage.removeItem('token');
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
    const token = localStorage.getItem('token');
    console.log("Token: " +token);
    if (token) {
      const decodedToken: any = jwtDecode(token);
      console.log("Decoded Token : " +JSON.stringify(decodedToken, null, 5));
      const userId: number = decodedToken.user;
      console.log("User Id : "+ userId);
      return this.http.get<any>(`http://3.111.47.3:24051/api/v1/getSingleUserDetails/${userId}`);
    } else {
      return of(null);
    }
  }

  category(): Observable<any> {
    return this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllCategory');
  }
}
