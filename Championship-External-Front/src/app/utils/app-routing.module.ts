import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChampionshipPage } from "../pages/championship/championship.component";
import { MainPage } from "../pages/main/main.component";
import { TicketPage } from "../pages/ticket/ticket.component";

const routes: Routes =[
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainPage },
  { path: "championship", component: ChampionshipPage },
  { path: "ticket", component: TicketPage },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }