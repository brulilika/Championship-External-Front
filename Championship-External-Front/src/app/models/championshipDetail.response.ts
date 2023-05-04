import { Ranking } from "./ranking.response"

export interface ChampionshipDetailResponse{
    id: string
    title: string
    description: any
    startDate: string
    endDate: string
    subscription: number
    totalPhases : number
    status: number
    ranking: Ranking[]
    matchs: Match[]
}
 
export interface Match {
    idMatch: string
    name: string
    phaseNumber: number
    startDate: string
    finishDate: string
    totalTickets: number
    soldTickets: number
    refereeName: string
    idTeamA: string
    teamAName: string
    idTeamB: string
    teamBName: string
    idWinner: string
    winnnerName: string
    status: number
}