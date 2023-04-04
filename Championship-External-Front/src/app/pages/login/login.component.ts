import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'LoginPage',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginPage {
    login: string = "";
    password: string = "";
    
    onSubmit() {
        this.login = (<HTMLInputElement>document.getElementById("login")).value;
        this.password = (<HTMLInputElement>document.getElementById("password")).value;
        console.log(this.login + " "+this.password)
    }
    
}