export interface Player {
    firstname: string,
    lastname: string,
    team: string,
    position: string,
    number: string
}

export type PlayerSquadFiltered = Record<string, Player[]>