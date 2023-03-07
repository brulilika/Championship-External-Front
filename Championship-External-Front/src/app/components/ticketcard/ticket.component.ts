import { Component, Input } from "@angular/core";
import { NgbProgressbar } from "@ng-bootstrap/ng-bootstrap";
import { NgIconComponent } from "@ng-icons/core";
import { AllTicket } from "src/app/models/allTicket.response";
@Component({
	selector: 'ticket-card',
	standalone: true,
	imports: [NgbProgressbar,NgIconComponent ],
    styleUrls:  ['./ticketcard.component.css'],
	templateUrl: './ticketcard.component.html',
})
export class TicketCard {
    @Input()
	item!: AllTicket;
}
