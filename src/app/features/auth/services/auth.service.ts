import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginResponse } from '../models/response/login-response';
import { LoginRequest } from '../models/request/login-request';
import { SignupRequest } from '../models/request/signup-request';
import { VerificationEmailResendRequest } from '../models/request/verification-email-resend-request';
import { PurposeTokenName } from '@shared/enums/PurposeTokenName';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiUrl + environment.endpoints.auth;
  private readonly accessToken = signal<string | null>(sessionStorage.getItem("jwt"));
  
  postAuthLogin(body: LoginRequest){
    return this.http.post<LoginResponse>(`${this.url}/login`, body)
  }

  postAuthSignup(body: SignupRequest){
    return this.http.post<void>(`${this.url}/signup`, body)
  }
  
  postVerificationEmailResend(purpose: PurposeTokenName, body: VerificationEmailResendRequest){
    return this.http.post<void>(`${this.url}/action-tokens/${purpose}/resend`, body)
  }
  
  getVerificationEmailResend(purpose: PurposeTokenName, actionToken: string){
    return this.http.get<void>(`${this.url}/action-tokens/${purpose}/${actionToken}/resend`)
  }

  getVerificationActionToken(token: string){
    return this.http.get<void>(`${this.url}/email-verification/${token}`);
  }

  getAccessToken(){
    return this.accessToken();
  }
}
