import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(emailId: string, password: string): Observable<any> {
    const credentials = {
      email: emailId,
      password: password
    };
    return this.http.post<any>(this.apiUrl, credentials);
  }
}