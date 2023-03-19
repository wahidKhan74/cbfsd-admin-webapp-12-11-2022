import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAll(page=0,size=10) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/products?page=${page}&size=${size}`);
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/products/${id}`);
  }

  save(productObj:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/products`, productObj);
  }

  update(productObj:any) {
    return this.httpClient.put<any[]>(`${environment.baseUrl}/products`, productObj);
  }

  delete(productId:any) {
    return this.httpClient.delete<any[]>(`${environment.baseUrl}/products/${productId}`);
  }
}
