import { Component, Input } from "@angular/core";

@Component({
	selector: 'ranking-card',
	standalone: true,
	imports: [],
	styleUrls:  ['./rankingcard.component.css'],
	templateUrl: './rankingcard.component.html',
})
export class RankingCard {
    @Input()
	team!: string;
}