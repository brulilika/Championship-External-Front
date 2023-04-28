import { Component } from "@angular/core";
import { AllChampionshipResponse } from "src/app/models/allChampionship.response";
import { ChampionshiopService } from "src/app/services/championship.service";

@Component({
    selector: 'championship-page',
    templateUrl: './championship.component.html',
    styleUrls: ['./championship.component.css']
})

export class ChampionshipPage{

    championships: AllChampionshipResponse[] = [];
    constructor(private championshipService : ChampionshiopService) {
        this.loadData()
    }

    async loadData(){
        this.championships = await this.championshipService.getAll()
    }
}