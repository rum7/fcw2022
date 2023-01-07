import { useEffect, useState, useRef } from 'react'
import { Player } from '../../views/Team/TeamSquad/TeamSquad.interface'
import CardPlayer from './CardPlayer/CardPlayer'

import './SquadGroup.style.scss'

const SquadGroup = (props: {title: string, content: Player[]}) => {
    const [display, setDisplay] = useState<boolean>(false);
    const squadRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const positionRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const [squadHeight, setSquadheight] = useState<number>(0)

    useEffect(() => {
        setSquadheight(squadRef.current.scrollHeight)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [display])

    const handleClick = () => {
        setDisplay(!display)
        // window.scrollTo(0, matchRef.current.getBoundingClientRect().top);
        setTimeout(() => {
            positionRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})
        }, 350)
    }

    return (
    <div>
        <h3 ref={positionRef} onClick={() => handleClick()}>{props.title}</h3>
        <div 
            ref={squadRef} 
            className="cardPlayer__container"
            style={display ? {height: squadHeight + "px"} : {height: "0px", padding: "0"}}
        >            
            {props.content.map((player, index) => (
            <CardPlayer
                key={index}
                firstname={player.firstname} 
                lastname={player.lastname}
                team={player.team}
                position={player.position}
                number={player.number}
            />
            ))}
        </div>
    </div>
  )
}

export default SquadGroup