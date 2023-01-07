export interface GroupData {
    group: string,
    rank: string,
    team: string,
    acro: string,
    win: string,
    draw: string,
    lose: string,
    goaldifference: string,
    points: string
  }
  
  export type GroupRankFiltered = Record<string, GroupData[]>
  