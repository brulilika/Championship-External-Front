import { Component, Input } from "@angular/core";

@Component({
	selector: 'main-card',
	standalone: true,
	imports: [],
	styleUrls:  ['./maincard.component.css'],
	templateUrl: './maincard.component.html',
})
export class MainCard {
    @Input()
	imgSrc!: string;
	@Input()
	title!: string;
	@Input()
	description!: string;

	ngOnInit(){
		
	}
}