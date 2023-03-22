import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ChampionshiopService } from "src/app/services/championship.service";

@Component({
    selector: 'championship-detail-page',
    templateUrl: './championship-detail.component.html',
    styleUrls: ['./championship-detail.component.css']
})

export class ChampionshipDetailPage{
    id!: string;
    img!: string;
    imgSrc!: string;
    description!: string;
    initialDate!: string;
    endDate!: string;
    subscribed!: string;
    teamRanking!: string[];

    constructor(private router: ActivatedRoute, private championshipService:ChampionshiopService) {
        
    }

    ngOnInit(): void {
        this.router.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id')?? "";
        });

        var response = this.championshipService.getById(this.id)
        this.imgSrc = response.imgSrc;
        this.description = response.description;
        this.initialDate = response.initialDate;
        this.endDate = response.endDate;
        this.subscribed = response.subscribed;

        this.teamRanking = ["TIME A", "TIME B", "TIME C", "TIME D", "TIME E","TIME F"];
    }
}