import { Component, Input, SimpleChanges } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TicketBuyModal } from "src/app/components/ticketbuymodal/ticketbuymodal.component";
import { AllTicket } from "src/app/models/allTicket.response";
import { TicketService } from "src/app/services/ticket.service";

@Component({
    selector: 'TicketPage',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})

export class TicketPage {
    
    tickets: AllTicket[] = []

    @Input()
    update!: boolean

    constructor(private modalService: NgbModal, private ticketService: TicketService) {
        this.loadData()
    }


    async loadData(){
        await this.ticketService.getAllAvailable().subscribe((data)=>{
            var response = data as AllTicket[]
            this.tickets = response
        })
    }

    openModal(item: AllTicket) {
        const modalRef = this.modalService.open(TicketBuyModal)
        modalRef.componentInstance.ticket = {
            idMatch: item.idMatch,
            competitionTitle: item.champioshipTitle,
            totalTicket: item.matchTotalTicket,
            soldTickets: item.totalSold,
        }
        modalRef.result.finally(()=>{
            this.loadData()
        })
    }
}