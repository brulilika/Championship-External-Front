import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDismissReasons, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TicketService } from "src/app/services/ticket.service";

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
		idMatch: string,
		competitionTitle: string,
		totalTicket: number,
		soldTickets: number
	}
	available!: number

    closeResult = '';

	constructor(public activeModal: NgbActiveModal, private router: Router, private ticketService : TicketService) {
		
	}

	ngOnInit(){
		this.available = this.ticket.totalTicket - this.ticket.soldTickets
	}

	buyTicket(){
		var login = localStorage.getItem("auth")
		
		if(login){
			this.ticketService.buyTicket(this.ticket.idMatch).subscribe(data =>{
				var response = data as boolean
				if(response){
					alert("Compra realizada com sucesso")
					this.activeModal.close()
				}
				else
					alert("Não foi possível finalizar compra do ingresso")
			})
		}
		else{
			alert("É necessário esta logado para comprar um ingresso")
			this.activeModal.close()
			this.router.navigate([`login`])
		}
	}
}
