import { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

import data_matches from '../../../data/db-matches.json'
import { MatchesData, MatchesStagesFiltered } from "../../Matches/Matches.interface"

export const GetTeamMatches = () => {
    const location = useLocation();

    const [teamMatches, setTeamMatches] = useState<MatchesStagesFiltered>({})

    useEffect(() => {
        const tag:string = location.pathname.split('/')[2]
        const teamMatches: MatchesData[] | undefined = Object.values(data_matches)
        .flat()
        .filter(stages => stages.teamA.includes(tag) || stages.teamB.includes(tag))

        if (teamMatches.length !== 0) {
            const fetchTeam = teamMatches.reduce<MatchesStagesFiltered>((acc, curr) => (
                // eslint-disable-next-line no-sequences
                (acc[curr.round] = acc[curr.round] || []).push(curr), acc
            ), {})
            setTeamMatches(fetchTeam)
        }
    }, [location])

    return {teamMatches}
}