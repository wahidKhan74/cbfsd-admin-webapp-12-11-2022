import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getAll(page=0, size=10) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/categories?page=${page}&size=${size}`);
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/categories/${id}`);
  }

  save(categoryObj:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/categories`, categoryObj);
  }

  update(categoryObj:any) {
    return this.httpClient.put<any[]>(`${environment.baseUrl}/categories`, categoryObj);
  }

  delete(categoryId:any) {
    return this.httpClient.delete<any[]>(`${environment.baseUrl}/categories/${categoryId}`);
  }
}
