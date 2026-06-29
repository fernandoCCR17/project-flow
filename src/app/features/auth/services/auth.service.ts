import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginResponse } from '../models/login-response';
import { LoginRequest } from '../models/login-request';
import { SignupRequest } from '../models/signup-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiUrl + environment.endpoints.auth;
  
  postAuthLogin(body: LoginRequest){
    return this.http.post<LoginResponse>(`${this.url}/login`, body)
  }

  postAuthSignup(body: SignupRequest){
    return this.http.post<void>(`${this.url}/signup`, body)
  }
}
