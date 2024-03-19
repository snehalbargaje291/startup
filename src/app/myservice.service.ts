import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    return new Observable<any>((observer) => {
      axios.post('http://3.111.47.3:24051/api/v1/userlogin', formData)
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError<any>) => {
          observer.error(error);
        });
    }).pipe(
      catchError((error: any) => {
        return throwError(() => error);
      })
    );
  }

  //Login using http
  // login(formData: any): Observable<any> {
  //   return this.http.post<any>('http://3.111.47.3:24051/api/v1/userlogin', formData);
  // }

  loggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    } else {
      console.error("localStorage is not supported in this environment.");
      return false;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  signUp(formData: any): Observable<any> {
    return new Observable<any>((observer) => {
      axios.post('http://3.111.47.3:24051/api/v1/CreateUserDetails', formData)
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError<any>) => {
          observer.error(error);
        });
    });
  }

  contactUs(formData: any): Observable<any> {
    return new Observable<any>((observer) => {
      axios.post('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData)
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError<any>) => {
          observer.error(error);
        });
    });
  }

  sellerForm(formData: any): Observable<any> {
    return new Observable<any>((observer) => {
      axios.post('http://3.111.47.3:24051/api/v1/CreatesellerDetails', formData)
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError<any>) => {
          observer.error(error);
        });
    });
  }

  // signUp(formData: any): Observable<any> {
  //   return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateUserDetails', formData);
  // }
  // contactUs(formData: any): Observable<any> {
  //   return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData);
  // }
  // sellerForm(formData: any): Observable<any> {
  //   return this.http.post<any>('http://3.111.47.3:24051/api/v1/CreatesellerDetails', formData);
  // }
  // http://3.111.47.3:24051/api/v1/getSingleUserDetails/8845
  // npm install jwt-decode
  
  // myAccount(): Observable<any> {
  //   const userDataString = localStorage.getItem('userData');
  //   if (userDataString) {
  //     const userData = JSON.parse(userDataString);
  //     console.log("User Data:", userData);
  //     const userId = userData[0]?.UserId; // Extract UserId from userData
  //     if (userId) {
  //       return this.http.get<any>(`http://3.111.47.3:24051/api/v1/getSingleUserDetails/${userId}`);
  //     } else {
  //       console.error("UserId not found in userData.");
  //       return of(null);
  //     }
  //   } else {
  //     console.error("User data not found in localStorage.");
  //     return of(null);
  //   }
  // }

  myAccount(): Observable<any> {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log("User Data:", userData);
      const userId = userData[0]?.UserId;
      if (userId) {
        return new Observable<any>((observer) => {
          axios.get(`http://3.111.47.3:24051/api/v1/getSingleUserDetails/${userId}`)
            .then((response: AxiosResponse<any>) => {
              observer.next(response.data);
              observer.complete();
            })
            .catch((error: AxiosError<any>) => {
              observer.error(error);
            });
        }).pipe(
          catchError((error: any) => {
            return of(null);
          })
        );
      } else {
        console.error("UserId not found in userData.");
        return of(null);
      }
    } else {
      console.error("User data not found in localStorage.");
      return of(null);
    }
  }

  // category(): Observable<any> {
  //   return this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllCategory');
  // }
  category(): Observable<any> {
    return new Observable<any>((observer) => {
      axios.get('http://3.111.47.3:24051/api/v1/getAllCategory')
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError<any>) => {
          observer.error(error);
        });
    }).pipe(
      catchError(error => throwError(error))
    );
  }

  getProducts(): Observable<any> {
    return new Observable<any>((observer) => {
      axios.get('http://3.111.47.3:24051/api/v1/viewproductDetails')
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError<any>) => {
          observer.error(error);
        });
    }).pipe(
      catchError(error => throwError(error))
    );
  }
}
