import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import data_squad from '../../../data/db-squad.json'
import { Player, PlayerSquadFiltered } from './TeamSquad.interface'

export const GetPlayers = () => {
    const location = useLocation();

    const [playerList, setplayerList] = useState<PlayerSquadFiltered>({});    

    useEffect(() => {
        const tag:string = location.pathname.split('/')[2]
		const fetchTeam: Player[] | undefined = Object.values(data_squad)
        .flat()
        .filter(player => player.team === tag)

        if (fetchTeam.length !== 0) {
            const fetchSquad = fetchTeam.reduce<PlayerSquadFiltered>((acc, curr)=>(
                // eslint-disable-next-line no-sequences
                (acc[curr.position] = acc[curr.position] || []).push(curr), acc
            ), {})

            setplayerList(fetchSquad)
        }

    }, [location])

    const squadGK = Object.entries(playerList).filter(player => player[0] === "goalkeeper")
    const squadDF = Object.entries(playerList).filter(player => player[0] === "defender")
    const squadMF = Object.entries(playerList).filter(player => player[0] === "midfielder")
    const squadFW = Object.entries(playerList).filter(player => player[0] === "forward")
    
    const squadSorted = [...squadGK, ...squadDF, ...squadMF, ...squadFW]
    
    return {squadSorted}
}