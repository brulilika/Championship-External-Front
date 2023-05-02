import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserResponse } from "src/app/models/user.response";

@Component (
    {
        selector: 'user-info',
        templateUrl: './userinfo.component.html',
        styleUrls: ['./userinfo.component.css']
    }
)

export class UserInfo{

    @Input()
    userInfo!: UserResponse

    constructor(private router: Router) {

    }

    logout(){
        localStorage.setItem("auth","")
        window.location.reload()
    }
}