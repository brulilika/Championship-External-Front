import { Component } from "@angular/core";
import { AllTicket } from "src/app/models/allTicket.response";

@Component({
    selector: 'TicketPage',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})

export class TicketPage {
    items: AllTicket[] = [
        {
            ChampionshipTitle: "Ticket 1",
            ChampionshipDescription: "Descricao ticket 1",
            SoldPercentage: 45
        },
        {
            ChampionshipTitle: "Ticket 2",
            ChampionshipDescription: "Descricao ticket 2",
            SoldPercentage: 35
        },
        {
            ChampionshipTitle: "Ticket 3",
            ChampionshipDescription: "Descricao ticket 3",
            SoldPercentage: 75
        },
        {
            ChampionshipTitle: "Ticket 3",
            ChampionshipDescription: "Descricao ticket 3",
            SoldPercentage: 75
        },
        {
            ChampionshipTitle: "Ticket 3",
            ChampionshipDescription: "Descricao ticket 3",
            SoldPercentage: 75
        },
        {
            ChampionshipTitle: "Ticket 3",
            ChampionshipDescription: "Descricao ticket 3",
            SoldPercentage: 75
        },

        {
            ChampionshipTitle: "Ticket 3",
            ChampionshipDescription: "Descricao ticket 3",
            SoldPercentage: 75
        },
      ]
}