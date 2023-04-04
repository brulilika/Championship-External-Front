import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TicketBuyModal } from "src/app/components/ticketbuymodal/ticketbuymodal.component";
import { AllTicket } from "src/app/models/allTicket.response";

@Component({
    selector: 'TicketPage',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})

export class TicketPage {
    items: AllTicket[] = [
        {
            ChampionshipTitle: "Competição 1",
            ChampionshipDescription: "Descricao competição 1",
            SoldPercentage: 45
        },
        {
            ChampionshipTitle: "Competição 2",
            ChampionshipDescription: "Descricao competição 2",
            SoldPercentage: 35
        },
        {
            ChampionshipTitle: "Competição 3",
            ChampionshipDescription: "Descricao competição 3",
            SoldPercentage: 75
        },
        {
            ChampionshipTitle: "Competição 4",
            ChampionshipDescription: "Descricao competição 4",
            SoldPercentage: 75
        },
        {
            ChampionshipTitle: "Competição 3",
            ChampionshipDescription: "Descricao competição 5",
            SoldPercentage: 75
        },
        {
            ChampionshipTitle: "Competição 5",
            ChampionshipDescription: "Descricao competição 6",
            SoldPercentage: 75
        },

        {
            ChampionshipTitle: "Competição 6",
            ChampionshipDescription: "Descricao competição 6",
            SoldPercentage: 75
        },
    ]

    constructor(private modalService: NgbModal) {}

    openModal() {
        this.modalService.open(TicketBuyModal);
    }
}