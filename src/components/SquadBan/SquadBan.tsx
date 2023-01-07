import { useEffect, useState } from "react"
import { GetSquadData } from "./SquadBan.hook"
import './SquadBan.style.scss'

export interface Teams {
    name: string;
    acro: string;
    groupe: string;
}

const SquadBan = () => {
    const data = GetSquadData().squadData
    const [squadData, setSquadData] = useState<Teams[]>([])
    const [teamInOut, setTeamInOut] = useState<string>('')

    useEffect(() => {
        setTeamInOut("team--out")
        setTimeout(() => {
            setSquadData(data)
            setTeamInOut("team--in")
        }, 300);
    }, [data])

    return (
        <div className="squadban">
            {squadData.map((sqdata, index) => (
            <div key={index} className="squadban_data">
                <img 
                    src={process.env.PUBLIC_URL + '/assets/flags/'+ sqdata.acro.toUpperCase() +'.webp'} 
                    alt={`${sqdata.name} flag`}
                    className={teamInOut}
                />
                <h2 className={teamInOut}>{sqdata.name.replace("-", " ")}</h2>
            </div>
            ))}
        </div>
    )
}

export default SquadBan