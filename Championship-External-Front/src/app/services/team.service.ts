import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { handleError } from '../utils/handleErrors';
import { SubscribeChampionship } from '../models/subscribeChampionship.request';

@Injectable({
    providedIn: 'root'
})
//TODO: endpoints - aqui so temos template de conexao
export class ChampionshiopService {

    url = 'https://champscoreapi.azurewebsites.net/api/team';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    //Request to participate in a certain team in a championship
    subscribe(subcribeChampionship: SubscribeChampionship){
        return this.httpClient.post<boolean>(`${this.url}`,{...subcribeChampionship},this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }

}

