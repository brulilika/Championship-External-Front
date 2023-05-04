import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ChampionshiopService } from "src/app/services/team.service";

@Component({
	selector: 'champ-subs-modal',
	standalone: true,
	imports: [ ],
    styleUrls:  ['./champsubsmodal.component.css'],
	templateUrl: './champsubsmodal.component.html',
})
export class ChampSubsModal {
	@Input()
	championship!: {
		idChampionship: string,
        championshipTitle: string
	}
	available!: number

	@Input()
	teamName: string =""

    closeResult = '';

	constructor(public activeModal: NgbActiveModal, private router: Router, private championshipService : ChampionshiopService) {
		
	}

	ngOnInit(){
		
	}

	subscribe(){
		var login = localStorage.getItem("auth")
		
		if(login && login!=""){
			this.championshipService.subscribe({name:(<HTMLInputElement>document.getElementById("name")).value, idChampionship: this.championship.idChampionship}).subscribe(data =>{
				var response = data as boolean
				if(response){
					alert("Inscrição realizada com sucesso")
					this.activeModal.close()
				}
				else
					alert("Não foi possível inscrever-se em um campeonato.Tente novamente mais tarde!")
			})
		}
		else{
			alert("É necessário esta logado para inscrever-se em um campeonato")
			this.activeModal.close()
			this.router.navigate([`login`])
		}
		
	}
}
