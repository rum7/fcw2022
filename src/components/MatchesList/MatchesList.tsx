import { useEffect, useState, useRef } from 'react'
import { MatchesData } from "../../views/Matches/Matches.interface"
import CardMatch from './CardMatch/CardMatch'

import './MatchesList.style.scss'

const Matches = (props: {title: string, content:MatchesData[] }) => {
    const [display, setDisplay] = useState<boolean>(false);
    const matchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const groupRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const [squadHeight, setSquadheight] = useState<number>(0)

    useEffect(() => {
        setSquadheight(matchRef.current.scrollHeight)
    }, [display])

    const handleClick = () => {
        setDisplay(!display)
        setTimeout(() => {
            groupRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})
        }, 350)
    }
      
    return (
        <div className='match'>
            <h3 ref={groupRef} onClick={() => handleClick()}>{props.title}</h3>
            <div>
                <div 
                ref={matchRef} 
                className="cardMatch"
                style={display ? {height: squadHeight + "px"} : {height: "0px", padding: "0"}}
                >            
                    {props.content.map((match, index) => (
                    <CardMatch
                        key={index}
                        date={match.date} 
                        stade={match.stade} 
                        teamA={match.teamA}
                        acroA={match.acroA}
                        teamB={match.teamB}
                        acroB={match.acroB}
                        score={match.score}
                        scoreTA={match.scoreTA}
                        highlights={match.highlights}
                        round={match.round}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Matches