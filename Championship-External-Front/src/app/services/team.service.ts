import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
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
  
    //Request to participate in a certain team in a championship
    requestParticipation() : Observable<object> {
        return this.httpClient.post<object>(`${this.url}`,this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }

    //Accept the request of other user to participate on user teams
    acceptParticipation() : Observable<object> {
        return this.httpClient.post<object>(`${this.url}`,this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }
}

