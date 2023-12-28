// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  Getdatalist(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(userInfo: any) {
   
    return this.http.post(`${this.apiUrl}/register`, userInfo);
  }
}
