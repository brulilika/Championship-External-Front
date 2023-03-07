import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
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

  constructor(private router: Router) {  }

  goToDetail(id: string) {
    this.router.navigate([`/championship-detail`, id])
  }
}
