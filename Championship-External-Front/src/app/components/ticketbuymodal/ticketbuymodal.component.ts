import { Component, Input } from "@angular/core";
import { ModalDismissReasons, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'ticket-buy-modal',
	standalone: true,
	imports: [ ],
    styleUrls:  ['./ticketbuymodal.component.css'],
	templateUrl: './ticketbuymodal.component.html',
})
export class TicketBuyModal {
	@Input()
	ticket!: {
		competitionTitle: string,
		totalTicket: number,
		soldTickets: number,
	}
	available!: number

    closeResult = '';

	constructor(public activeModal: NgbActiveModal) {
		
	}

	ngOnInit(){
		this.available = this.ticket.totalTicket - this.ticket.soldTickets
	}
}
