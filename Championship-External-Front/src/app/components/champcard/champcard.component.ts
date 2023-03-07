import { Component, Input } from "@angular/core";
import { NgbProgressbar } from "@ng-bootstrap/ng-bootstrap";
import { NgIconComponent } from "@ng-icons/core";
import { AllChampionshipResponse } from "src/app/models/allChampionship.response";

@Component({
  selector: 'champ-card',
  templateUrl: './champcard.component.html',
  styleUrls: ['./champcard.component.css']
})
export class ChampcardComponent {
  @Input()
	championship!: AllChampionshipResponse;
}
