import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getAll(page=0,size=10) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/orders?page=${page}&size=${size}`);
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/orders/${id}`);
  }

  save(orderObj:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/orders`, orderObj);
  }

  update(orderObj:any) {
    return this.httpClient.put<any[]>(`${environment.baseUrl}/orders`, orderObj);
  }

  delete(orderId:any) {
    return this.httpClient.delete<any[]>(`${environment.baseUrl}/orders/${orderId}`);
  }
}
