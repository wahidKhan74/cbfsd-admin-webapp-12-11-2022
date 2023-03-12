import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  adminLogin(adminReq:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/admins/login`, adminReq);
  }

  adminRegister(adminReq:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/admins`, adminReq);
  }

  userLogin(userReq:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/users/login`,userReq);
  }

  isLoggedIn():boolean {
    let user = localStorage.getItem('user');
    let status = localStorage.getItem('status');
    return !(!user && !status);
  }

  getUser() {
    return localStorage.getItem('user');
  }
  
  logOut() {
    localStorage.clear();
  }
}
