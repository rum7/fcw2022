import { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

import data_groups from '../../data/db-groups-results.json'
import { GroupData, GroupRankFiltered } from "./Groups.interface"

export const GetGroupResults = () => {
    const location = useLocation();

    const [groupResults, setGroupResults] = useState<GroupRankFiltered>({})
    const [teamGR, setTeamGR] = useState<GroupRankFiltered>({})

    useEffect(() => {
        const groupStages: GroupData[] | undefined = Object.values(data_groups).flat()

        if (groupStages.length !== 0) {
            const fetchGR = groupStages.reduce<GroupRankFiltered>((acc, curr) => (
                // eslint-disable-next-line no-sequences
                (acc[curr.group] = acc[curr.group] || []).push(curr), acc
            ), {})
            setGroupResults(fetchGR)
        }
    }, [])

    useEffect(() => {
        const tag:string = location.pathname.split('/')[2]

        const groupFilter = Object.values(data_groups).flat().find(key => key.team === tag)       
        const squadGroupStages: GroupData[] | undefined = Object.values(data_groups).flat().filter(groups => groups.group === groupFilter?.group)
        
        if (squadGroupStages.length !== 0) {
            const fetchSGR = squadGroupStages.reduce<GroupRankFiltered>((acc, curr) => (
                // eslint-disable-next-line no-sequences
                (acc[curr.group] = acc[curr.group] || []).push(curr), acc
            ), {})
            setTeamGR(fetchSGR)
        }
    }, [location])

    return {groupResults, teamGR}
}