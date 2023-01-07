import { useEffect, useState} from 'react'

import data_matches from '../../data/db-matches.json'
import { MatchesData, MatchesStagesFiltered } from "./Matches.interface"

export const GetMatches = () => {
    const [finals, setFinals] = useState<MatchesStagesFiltered>({})
    const [groups, setGroups] = useState<MatchesStagesFiltered>({})

    useEffect(() => {
        const finalStages: MatchesData[] | undefined = Object.values(data_matches)
        .flat()
        .filter(stages => !stages.round.includes("group"))

        if (finalStages.length !== 0) {
            const fetchFS = finalStages.reduce<MatchesStagesFiltered>((acc, curr) => (
                // eslint-disable-next-line no-sequences
                (acc[curr.round] = acc[curr.round] || []).push(curr), acc
            ), {})
            setFinals(fetchFS)
        }
    }, [])

    useEffect(() => {
        const groupStages: MatchesData[] | undefined = Object.values(data_matches)
        .flat()
        .filter(stages => stages.round.includes("group"))
        
        if (groupStages.length !== 0) {
            const fetchGRP = groupStages.reduce<MatchesStagesFiltered>((acc, curr) => (
                // eslint-disable-next-line no-sequences
                (acc[curr.round] = acc[curr.round] || []).push(curr), acc
            ), {})
            setGroups(fetchGRP)
        }
    }, [])

    return {finals, groups}
}