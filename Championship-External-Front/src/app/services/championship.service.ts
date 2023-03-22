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
    getById(id:string) : {
        imgSrc: string,
        description: string,
        initialDate: string,
        endDate: string,
        subscribed: string
    } {
        // return this.httpClient.get(`${this.url}/${id}`, this.httpOptions)
        // .pipe(retry(2),catchError(handleError))
        return {
            imgSrc: "assets/Championship-Images/voleyplayer.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            initialDate: "21/03/2023",
            endDate: "25/05/2023",
            subscribed: "5/16"
        };
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

