import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: 'championship-detail-page',
    templateUrl: './championship-detail.component.html',
    styleUrls: ['./championship-detail.component.css']
})

export class ChampionshipDetailPage{
    id!: string;
    constructor(private router: ActivatedRoute) {
        
    }

    ngOnInit(): void {
        this.router.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id')?? "";
        });
    }
}