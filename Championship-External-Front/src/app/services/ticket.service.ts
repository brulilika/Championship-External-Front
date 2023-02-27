import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { TicketResponse } from '../models/ticket.response';
import { handleError } from '../utils/handleErrors';

@Injectable({
    providedIn: 'root'
})

export class TicketService {

    url = 'https://champscoreapi.azurewebsites.net/api/ticket';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authentication' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    //FindAllTickets that a specific user bought
    getAllByUser() : Observable<TicketResponse> {
        return this.httpClient.get<TicketResponse>(`${this.url}`,this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }

    //Buy ticket for an specific championship
    buyTicket(id:string) : Observable<object> {
        return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions)
        .pipe(retry(2),catchError(handleError))
    }

}