import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/users?page=0&size=10`);
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/users/${id}`);
  }

  save(userObj:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/users`, userObj);
  }

  update(userObj:any) {
    return this.httpClient.put<any[]>(`${environment.baseUrl}/users`, userObj);
  }

  delete(userId:any) {
    return this.httpClient.delete<any[]>(`${environment.baseUrl}/users/${userId}`);
  }
}
