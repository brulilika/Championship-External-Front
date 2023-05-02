import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component (
    {
        selector: 'login-form',
        templateUrl: './loginform.component.html',
        styleUrls: ['./loginform.component.css']
    }
)

export class LoginForm{
    login: string = "";
    password: string = "";
    
    constructor(private authService : AuthService, private router: Router) {


    }

    async onSubmit() {
        this.login = (<HTMLInputElement>document.getElementById("login")).value;
        this.password = (<HTMLInputElement>document.getElementById("password")).value;
        var resp = await this.authService.login(this.login, this.password)
        
    }
}