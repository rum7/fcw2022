import { useEffect, useState} from 'react'
import data_team from '../../data/db-teams.json'

import { useNavigate } from 'react-router-dom';

export interface Teams {
    name: string;
    acro: string;
    groupe: string;
}

export const GetSquadData = () => {
    const tag: string = window.location.href.split('/')[4]
    const [squadData, setSquadData] = useState<Teams[]>([])

    const [notValid, setNotValid] = useState<boolean>(false);
    const navigate = useNavigate()

    useEffect(() => {
    const fetchTeam: Teams[] | undefined = Object.values(data_team).flat().filter(team => team.name === tag)
    if (fetchTeam.length !== 0) {
        setSquadData(fetchTeam)
        setNotValid(false)
    } else {
        setNotValid(true)
    }
    }, [tag])

    useEffect(() => {
        if (notValid) {
            navigate('nothing_here', {replace: true})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notValid])

    return {squadData}
}