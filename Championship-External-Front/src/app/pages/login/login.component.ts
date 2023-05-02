import { ChangeDetectorRef, Component, Input} from "@angular/core";
import jwtDecode from "jwt-decode";
import { Token } from "src/app/models/token";
import { UserResponse } from "src/app/models/user.response";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'LoginPage',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginPage {
    login: string = "";
    password: string = "";
    
	show: boolean = true //Login forms
    logged: boolean = false //UserInfos after logged

    @Input()
    userInfo!: UserResponse

    constructor(private userService: UserService) {
        var login = localStorage.getItem("auth")
        if (login && login !== "") {
            this.show = false
            this.logged = true
        }
        else if(login && login !== "" || !login){
            this.show = true
            this.logged = false
        }
    }

    ngOnInit(){
        if(this.logged){
            this.loadData()
        }
    }

    async loadData(){
        var login = localStorage.getItem("auth")
        if (login && login !== "") {
            var userInfo = jwtDecode<Token>(login)
            this.userService.getUserById(userInfo.userId).subscribe((data)=>{
                this.userInfo = data
            })
        }
    }
}