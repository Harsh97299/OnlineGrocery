import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TransactionData {
  customerId: string;
  productIds: string[];
  totalAmount: number;
  numberOfItems: number;
  paymentMethod: string;
}

export interface TransactionResponse {
  transactionId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) {}

  createTransaction(data: TransactionData): Observable<TransactionResponse> {
    return this.http.post<TransactionResponse>(this.baseUrl, data);
  }
}
