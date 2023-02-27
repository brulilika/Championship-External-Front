import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { AllChampionshipResponse } from '../models/allChampionship.response';
import { handleError } from '../utils/handleErrors';

@Injectable({
    providedIn: 'root'
})
//TODO: endpoints - aqui so temos template de conexao
export class ChampionshiopService {

    url = 'https://champscoreapi.azurewebsites.net/api/championship';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authentication' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    //FindAll Championships - Allowanonimous
    getAll() : Observable<AllChampionshipResponse> {
        return this.httpClient.get<AllChampionshipResponse>(`${this.url}`,this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }

    //Get details about a certain championship - Allowanonimous
    getById(id:string) : Observable<object> {
        return this.httpClient.get(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }

    //GetAll championships that the user is registered
    getAllByUser(id:string) : Observable<object> {
        return this.httpClient.get(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }

    //Get details about a certain championship from a certain user
    getByIdByUser(id:string) : Observable<object> {
        return this.httpClient.get(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }

    //Register user in a certain championship
    register(id:string) : Observable<object> {
        return this.httpClient.post(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }
}

