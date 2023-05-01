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
        const modalRef = this.modalService.open(ChampSubsModal)
        modalRef.componentInstance.championship = {
            idChampionship: this.championshipDetail.id,
            championshipTitle: this.championshipDetail.title,
            subscribed: this.championshipDetail.subscription,
        }
        modalRef.result.finally(()=>{
            this.loadData()
        })
    }

    formatMatchList(){
        for (let index = 1; index <= this.championshipDetail.totalPhases; index++) {
            var mats = this.championshipDetail.matchs.filter(f=>f.phaseNumber==index).map(m=>{
                return {
                    TeamA: m.teamAName,
                    TeamB: m.teamBName,
                    Juiz: m.refereeName,
                    Inicio: m.startDate,
                    Fim: "-",
                    Ganhador: "-",
                    Status: m.status
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