import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/orders';
  constructor(private http: HttpClient) {}

  checkout(cart: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/checkout`, cart);
  }
}