export interface ChampionshipDetailResponse{
    id: string
    title: string
    description: any
    startDate: string
    endDate: string
    subscription: number
    ranking: Ranking[]
    matchs: Match[]
}

export interface Ranking {
    idTeam: string
    name: string
    wins: number
}
  
export interface Match {
    idMatch: string
    name: string
    phaseNumber: number
    startDate: string
    totalTickets: number
    soldTickets: number
    refereeName: string
    idTeamA: string
    teamAName: string
    idTeamB: string
    teamBName: string
    status: number
}