import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar.component';
import { ChampionshipPage } from './pages/championship/championship.component';
import { MainPage } from './pages/main/main.component';
import { TicketPage } from './pages/ticket/ticket.component';
import { AppRoutingModule } from './utils/app-routing.module';
import { NgbAlertModule, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { DashCarousel } from "./components/carosel/carosel.component";
import { MainCard } from "./components/maincard/maincard.component";
import { TicketCard } from './components/ticketcard/ticket.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
@NgModule({
    declarations: [
        AppComponent, Navbar,
        TicketPage, ChampionshipPage, MainPage
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgIconsModule.withIcons({ featherAirplay }),
        AppRoutingModule,
        HttpClientModule,
        NgbProgressbar,
        NgbAlertModule,
        DashCarousel,
        MainCard,
        TicketCard
    ]
})
export class AppModule { }
