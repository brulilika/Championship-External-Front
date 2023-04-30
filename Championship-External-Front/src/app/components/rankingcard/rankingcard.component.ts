import { Component, Input } from "@angular/core";
import { Ranking } from "src/app/models/ranking.response";

@Component({
	selector: 'ranking-card',
	standalone: true,
	imports: [],
	styleUrls:  ['./rankingcard.component.css'],
	templateUrl: './rankingcard.component.html',
})


export class RankingCard {
    @Input()
	team!: Ranking;
	@Input()
	index!: number;

}