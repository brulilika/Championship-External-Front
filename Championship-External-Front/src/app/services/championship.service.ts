import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry } from 'rxjs';
import { AllChampionshipResponse } from '../models/allChampionship.response';
import { handleError } from '../utils/handleErrors';
import { ChampionshipDetailResponse } from '../models/championshipDetail.response';

@Injectable({
    providedIn: 'root'
})
//TODO: endpoints - aqui so temos template de conexao
export class ChampionshiopService {

    url = 'https://champscoreapi.azurewebsites.net/';
  
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authentication' : `Bearer ${localStorage.getItem("auth")}`
        })
    }
  
    //FindAll Championships - Allowanonimous
    getAll() : AllChampionshipResponse[] {
        var championships :AllChampionshipResponse[] = [];
        this.httpClient.get<AllChampionshipResponse[]>(`${this.url}external`,this.httpOptions)
        .subscribe((champs:AllChampionshipResponse[])=>{
            champs.map((champ)=>{
                champ.statuscolor = this.setStatusColor(champ.status)
                championships.push(champ)
            })
        })
        
        return championships
    }

    //Get details about a certain championship - Allowanonimous
    getById(id:string)  {
        return this.httpClient.get(`${this.url}external/${id}`)
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

    setStatusColor(status : number):string{
        switch(status){
            case 0:
                return "#54B4D3"
            case 1:
                return "#E4A11B"
            case 2:
                return "#DC4C64"
            default :
                return "#54B4D3"
        }
    }
}

