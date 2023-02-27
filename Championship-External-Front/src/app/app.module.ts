import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar.component';
import { ChampionshipPage } from './pages/championship/championship.component';
import { MainPage } from './pages/main/main.component';
import { TicketPage } from './pages/ticket/ticket.component';
import { AppRoutingModule } from './utils/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent, Navbar,
    TicketPage, ChampionshipPage,MainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
