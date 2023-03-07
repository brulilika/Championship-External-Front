import { Component } from "@angular/core";
import { AllChampionshipResponse } from "src/app/models/allChampionship.response";

@Component({
    selector: 'championship-page',
    templateUrl: './championship.component.html',
    styleUrls: ['./championship.component.css']
})

export class ChampionshipPage{

    championships: AllChampionshipResponse[] = [
        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/voleyplayer.png",
            ChampionshipTitle: "champ 1",
            ChampionshipDescription: "Descricao champ 1",
            ChampionshipDate: "20/03/2023"
        },
        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/basketballdunk.png",
            ChampionshipTitle: "champ 2",
            ChampionshipDescription: "Descricao champ 2",
            ChampionshipDate: "20/03/2023"
        },
        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/bypass.png",
            ChampionshipTitle: "champ 3",
            ChampionshipDescription: "Descricao champ 3",
            ChampionshipDate: "20/03/2023"
        },
        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/football_trail.png",
            ChampionshipTitle: "champ 4",
            ChampionshipDescription: "Descricao champ 4",
            ChampionshipDate: "20/03/2023"
        },
        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/footballkick.png",
            ChampionshipTitle: "champ 5",
            ChampionshipDescription: "Descricao champ 5",
            ChampionshipDate: "20/03/2023"
        },
        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/voleyball-ball.png",
            ChampionshipTitle: "champ 6",
            ChampionshipDescription: "Descricao champ 6",
            ChampionshipDate: "20/03/2023"
        },

        {
            Id:"1",
            ChampionshipImgSrc: "assets/Championship-Images/joystick.png",
            ChampionshipTitle: "champ 7",
            ChampionshipDescription: "Descricao champ 7",
            ChampionshipDate: "20/03/2023"
        },
    ]
}