import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { UpdateUserRequest } from '../models/updateUser.request';
import { UserResponse } from '../models/user.response';
import { handleError } from '../utils/handleErrors';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    url = 'https://champscoreapi.azurewebsites.net/api/user/';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    //Find UserById
    getUserById(id:string) {
        return this.httpClient.get<UserResponse>(`${this.url}${id}`,this.httpOptions)
    }

    //Delete Specific User
    deleteUser(id:string) : Observable<object> {
        return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }

    //Update Specific User
    updateUser(updatedUsed:UpdateUserRequest) : Observable<UserResponse> {
        return this.httpClient.put<UserResponse>(`${this.url}`, JSON.stringify({updatedUsed})
        ,this.httpOptions)
        .pipe(retry(1),catchError(handleError))
    }
  
}