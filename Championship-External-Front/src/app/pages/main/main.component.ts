import { Component, OnInit } from "@angular/core";
import { LoginResponse } from "src/app/models/login.response";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'MainPage',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainPage implements OnInit { 
    
    constructor(private authService : AuthService) { }

    ngOnInit(): void {
        //this.authentication();
    }

    authentication() {
        this.authService.login();
    }
}