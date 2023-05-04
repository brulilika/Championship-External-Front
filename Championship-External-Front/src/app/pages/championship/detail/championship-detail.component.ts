import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ChampionshiopService } from "src/app/services/championship.service";
import {ChampionshipDetailResponse} from "src/app/models/championshipDetail.response"
import { GeneralTableMatch, TableMatches } from "src/app/models/tableMatches";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ChampSubsModal } from "src/app/components/champsubsmodal/champsubsmodal.component";

@Component({
    selector: 'championship-detail-page',
    templateUrl: './championship-detail.component.html',
    styleUrls: ['./championship-detail.component.css']
})

export class ChampionshipDetailPage{
    id!: string;
    championshipDetail!: ChampionshipDetailResponse;
    matchslist : TableMatches[] = []


    constructor(private modalService: NgbModal, private router: ActivatedRoute, private championshipService:ChampionshiopService) {
        this.router.paramMap.subscribe(async (params: ParamMap) => {
            this.id = params.get('id')?? "";
        });
    }

    async ngOnInit(): Promise<void> {
        await this.loadData()
    }

    async loadData(){
        await this.championshipService.getById(this.id).subscribe((data) => { 
            var response = data as ChampionshipDetailResponse
            this.championshipDetail = response
            this.formatMatchList()
        }) 
    }

    openModal() {
        if(this.championshipDetail.subscription< Math.pow(2,this.championshipDetail.totalPhases)){
            const modalRef = this.modalService.open(ChampSubsModal)
            modalRef.componentInstance.championship = {
                idChampionship: this.championshipDetail.id,
                championshipTitle: this.championshipDetail.title,
            }
            modalRef.result.finally(()=>{
                this.loadData()
            })
        }
        else
            alert("Quantidade limite de inscrições atingida")
    }

    formatMatchList(){
        for (let index = 1; index <= this.championshipDetail.totalPhases; index++) {
            var mats = this.championshipDetail.matchs.filter(f=>f.phaseNumber==index).map(m=>{
                return {
                    TeamA: m.teamAName,
                    TeamB: m.teamBName,
                    Juiz: m.refereeName,
                    Inicio: m.startDate,
                    Fim: m.finishDate,
                    Ganhador: m.winnnerName,
                    Status: m.status == 0 ? "Criado": m.status == 1? "Em andamento": "Finalizado"
                } as GeneralTableMatch
            })
            this.matchslist.push(
                {
                    phase: index,
                    matches: mats,
                    show: mats.length>0
                } as TableMatches
            )
        }
    }
}