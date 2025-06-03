import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class transAuthService {
  private customerId = 'CUST123'; // Replace this with real login logic
  private customerName = 'John Doe';
// use session for current user
  getCustomerId(): string {
    return this.customerId;
  }

  getCustomerName(): string {
    return this.customerName;
  }

  // You can also have login(), logout(), isAuthenticated() etc.
}