import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { LoginResponse } from 'src/app/models/login.response';
import { UserRegisterResponse } from 'src/app/models/userRegister.response';
import { handleError } from '../utils/handleErrors';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

  url = 'https://champscoreapi.azurewebsites.net/api/user/';

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  //Authenticate user
  login(email: string, password: string) {
      this.httpClient.post<LoginResponse>(`${this.url}login`, JSON.stringify({
          email: email,
          password: password
      }), this.httpOptions).toPromise()?.then(response=>{
          localStorage.setItem("auth", response?.token??"")
          window.location.reload()
      }).catch(()=>{
        localStorage.setItem("auth","")
        console.log("Erro ao buscar usuário")
      })
      return true;    
  }

  //Register NewUser
  register() : Observable<UserRegisterResponse> {
      return this.httpClient.post<UserRegisterResponse>(`${this.url}register`, JSON.stringify({
          name: "Teste",
          age: 20,
          email: "teste@teste.com.br",
          password: "123456",
          userType: 0
      }), this.httpOptions).pipe(retry(2),catchError(handleError))
  }
}