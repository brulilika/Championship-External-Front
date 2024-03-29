import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { TicketResponse } from '../models/ticket.response';
import { handleError } from '../utils/handleErrors';
import { AllTicket } from '../models/allTicket.response';

@Injectable({
    providedIn: 'root'
})

export class TicketService {

    url = 'https://champscoreapi.azurewebsites.net/';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    getAllAvailable() {
        return this.httpClient.get(`${this.url}getAll/available`)
    }

    //FindAllTickets that a specific user bought
    getAllByUser() : Observable<TicketResponse> {
        return this.httpClient.get<TicketResponse>(`${this.url}`,this.httpOptions)
        .pipe(retry(2),catchError(handleError))      
    }

    //Buy ticket for an specific matchz
    buyTicket(idMatch:string){
        return this.httpClient.post(`${this.url}api/ticket`,{idMatch},this.httpOptions)
    }

}