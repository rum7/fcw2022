import { MatchesData } from "../../../views/Matches/Matches.interface"
import { Link } from "react-router-dom"
import './CardMatch.style.scss'

import { IconContext } from "react-icons";
import { RxVideo } from 'react-icons/rx';

const CardMatch = (props: MatchesData) => {    
    return (
        <div className="cardMatch__container">
            <p>{props.date}</p>
            <div className='cardMatch__content'>
                <Link to={`/teams/${props.teamA.replace(" ", "-")}`}>
                    <img 
                    src={process.env.PUBLIC_URL + '/assets/flags/'+ props.acroA?.toUpperCase() +'.webp'} 
                    alt="flag a" 
                    />
                    <h4>{props.acroA}</h4>
                </Link>
                <div>
                    <p>{props.score}</p>
                    <p>{props.scoreTA ? `(${props.scoreTA})` : null}</p>
                </div>
                <Link to={`/teams/${props.teamB.replace(" ", "-")}`}>
                    <img 
                        src={process.env.PUBLIC_URL + '/assets/flags/'+ props.acroB?.toUpperCase() +'.webp'}
                        alt="flag b" 
                    />
                    <h4>{props.acroB}</h4>
                </Link>
            </div>
            <a 
                href={props.highlights} 
                target="_blank" 
                rel="noreferrer"
                className="highlights"
            >
                <IconContext.Provider value={{ className: "highlight-icon" }}>
                    <RxVideo />
                </IconContext.Provider>
                <h4>highlights</h4>
            </a>
        </div>
    )
}

export default CardMatch