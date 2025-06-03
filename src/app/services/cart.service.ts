import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = 'http://localhost:8080/api/cart';
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addToCart(product: any): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  removeItem(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }

  getProductIds(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getTotalItems(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getTotalPrice(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}