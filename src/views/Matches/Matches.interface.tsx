export interface MatchesData {
  date: string;
  stade: string;
  teamA: string;
  acroA?: string;
  teamB: string;
  acroB?: string;
  score: string;
  scoreTA: string;
  highlights: string;
  round: string;
}

export type MatchesStagesFiltered = Record<string, MatchesData[]>
