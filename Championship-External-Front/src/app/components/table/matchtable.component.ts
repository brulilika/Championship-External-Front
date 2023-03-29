import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'match-table',
    styleUrls: ['./matchtable.component.css'],
	templateUrl: './matchtable.component.html',
	animations: [
		trigger('detailExpand', [
		  state('collapsed', style({height: '0px', minHeight: '0'})),
		  state('expanded', style({height: '*'})),
		  transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	  ],
})


export class TableMatch {
	dataSource = ELEMENT_DATA;
	columnsToDisplay = ['Team1', 'Team2', 'Winner', 'Date'];
	columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
	expandedElement!: PeriodicElement | null;
}

export interface PeriodicElement {
	Team1: string;
	Team2: string;
	Winner: string;
	Date: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
	{
		Team1: "Time A",
		Team2: 'Time B',
		Winner: "Time A",
		Date: '20/03/2023'
	},
	{
		Team1: "Time C",
		Team2: 'Time D',
		Winner: "Time D",
		Date: '21/03/2023'
	},
	{
		Team1: "Time E",
		Team2: 'Time F',
		Winner: "Time E",
		Date: '22/03/2023'
}
];