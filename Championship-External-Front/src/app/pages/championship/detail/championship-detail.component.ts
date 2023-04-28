import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ChampionshiopService } from "src/app/services/championship.service";
import {ChampionshipDetailResponse} from "src/app/models/championshipDetail.response"

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
    title!: string;

    constructor(private router: ActivatedRoute, private championshipService:ChampionshiopService) {
        this.router.paramMap.subscribe(async (params: ParamMap) => {
            this.id = params.get('id')?? "";
        });
        
    }

    async ngOnInit(): Promise<void> {
        
        // this.router.paramMap.subscribe(async (params: ParamMap) => {
        //     this.id = params.get('id')?? "";
        // });
        await this.loadData()
        this.teamRanking = ["TIME A", "TIME B", "TIME C", "TIME D", "TIME E","TIME F"];
    }

    async loadData(){
        var response : ChampionshipDetailResponse = await this.championshipService.getById(this.id)
        this.title = response.title;
        console.log(this.title )
    }
}