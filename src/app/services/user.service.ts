import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/current`);
  }

  getUserByEmailId(email: string) {
    return this.http.post(`${this.baseUrl}/getUserByEmail`, {email});
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${user.id}`, user);
  }
}