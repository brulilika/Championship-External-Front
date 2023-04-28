import { Component} from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'LoginPage',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginPage {
    login: string = "";
    password: string = "";

    constructor(private authService : AuthService) {
        
    }
    
    async onSubmit() {
        this.login = (<HTMLInputElement>document.getElementById("login")).value;
        this.password = (<HTMLInputElement>document.getElementById("password")).value;
        var resp = await this.authService.login(this.login, this.password)
        console.log(resp)
    }
    
}