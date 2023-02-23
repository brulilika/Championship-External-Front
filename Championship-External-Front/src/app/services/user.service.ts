import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { LoginResponse } from 'src/app/models/login.response';
import { UserRegisterResponse } from 'src/app/models/userRegister.response';
import { UpdateUserRequest } from '../models/updateUser.request';
import { UserResponse } from '../models/user.response';
import { handleError } from '../utils/handleErrors';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    url = 'https://champscoreapi.azurewebsites.net/api/user/';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authentication' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    //Find UserById
    getUserById(id:string) : Observable<UserResponse> {
        return this.httpClient.get<UserResponse>(`${this.url}/${id}`,this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }

    //Delete Specific User
    deleteUser(id:string) : Observable<object> {
        return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }

    //UYpdate Specific User
    updateUser(updatedUsed:UpdateUserRequest) : Observable<UserResponse> {
        return this.httpClient.put<UserResponse>(`${this.url}`, JSON.stringify({updatedUsed})
        ,this.httpOptions)
        .pipe(retry(1),catchError(handleError))
    }
  
}