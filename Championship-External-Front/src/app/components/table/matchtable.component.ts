import { Component, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { GeneralTableMatch } from 'src/app/models/generalTableMatch';

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
	@Input()
	tableData!: GeneralTableMatch[];
	@Input()
	show!: boolean

	dataSource: GeneralTableMatch[] = [];
	columnsToDisplay = ['TeamA', 'TeamB', 'Juiz', 'Inicio','Fim', 'Ganhador', 'Status'];
	columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
	expandedElement!: GeneralTableMatch | null;
	tableDisplay = "inline-table"
	placeholderDisplay = "none"

	ngOnInit(){
		this.dataSource = this.tableData;
		this.tableDisplay = this.show ? "inline-table" : "none"
		this.placeholderDisplay = this.show ? "none" : "block"
	}
	
	
}

