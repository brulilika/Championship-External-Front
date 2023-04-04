import { Component } from "@angular/core";
import { ModalDismissReasons, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'ticket-buy-modal',
	standalone: true,
	imports: [ ],
    styleUrls:  ['./ticketbuymodal.component.css'],
	templateUrl: './ticketbuymodal.component.html',
})
export class TicketBuyModal {
    closeResult = '';

	constructor(public activeModal: NgbActiveModal) { }

	
}
