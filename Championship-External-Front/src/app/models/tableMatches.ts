import { GeneralTableMatch } from "./generalTableMatch";

export interface TableMatches{
    phase: number,
    matches : GeneralTableMatch[],
    show: boolean
}


export { GeneralTableMatch };
