import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar.component';
import { ChampionshipPage } from './pages/championship/championship.component';
import { MainPage } from './pages/main/main.component';
import { TicketPage } from './pages/ticket/ticket.component';
import { AppRoutingModule } from './utils/app-routing.module';
import { NgbAccordionModule, NgbAlertModule, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { DashCarousel } from "./components/carosel/carosel.component";
import { MainCard } from "./components/maincard/maincard.component";
import { TicketCard } from './components/ticketcard/ticket.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroTicket } from '@ng-icons/heroicons/outline';
import { ChampcardComponent } from './components/champcard/champcard.component';
import { ChampionshipDetailPage } from './pages/championship/detail/championship-detail.component';
import { TableMatch } from './components/table/matchtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        AppComponent,
        Navbar,
        TicketPage, 
        ChampionshipPage,
        MainPage, 
        ChampcardComponent,
        ChampionshipDetailPage,
        TableMatch
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgIconsModule.withIcons({ featherAirplay , heroTicket}),
        AppRoutingModule,
        HttpClientModule,
        NgbProgressbar,
        NgbAlertModule,
        NgbAccordionModule,
        DashCarousel,
        MainCard,
        TicketCard,
        BrowserAnimationsModule,
        MaterialExampleModule,
        MatNativeDateModule,
        FlexLayoutModule
    ]
})
export class AppModule { }
