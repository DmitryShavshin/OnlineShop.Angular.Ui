import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';

export const ACCESS_TOKEN_KEY = 'access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) { }

  private loginUrl = "Auth/Login";
  private registerUrl = "Auth/Registration"


  registration(email: string | null, password: string | null, passwordConfirm: string | null): Observable<Token>{
  return this.http.post<Token>(`${environment.apiUrl}/${this.registerUrl}`, { email, password, passwordConfirm })
    .pipe(
      tap(token => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token.token);
      })
    )
  }

  login(email: string | null, password: string | null):Observable<Token>{
    return this.http.post<Token>(`${environment.apiUrl}/${this.loginUrl}`, { email, password })
      .pipe(
        tap(token => {
          localStorage.setItem(ACCESS_TOKEN_KEY, token.token);
        })
      )
  }

  logout(): void{
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  this.router.navigate(['/']);
  }

  isAuthenticated(): boolean{
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true
    }else{
      return false
    }
  }
}