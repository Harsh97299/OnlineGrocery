import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/users/insert';

  constructor(private http: HttpClient) {}

  registerCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }
}
