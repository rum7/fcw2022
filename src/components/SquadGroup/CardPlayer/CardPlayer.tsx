import { Player } from '../../../views/Team/TeamSquad/TeamSquad.interface'
import './CardPlayer.style.scss'

const CardPlayer = (props: Player) => {    
    return (
        <div className='cardPlayer'>
            <header className='cardPlayer__heading'>
                <h4>{props.firstname}</h4>
                
                {props.lastname.length > 10 ?
                (<h4 style={{fontSize: '0.7rem'}}>{props.lastname}</h4>)
                :(<h4>{props.lastname}</h4>)
                }
                <p>{props.number}</p>
            </header>
            <div className='cardPlayer__content'>
                <p>{props.position}</p>
            </div>
        </div>
    )
}

export default CardPlayer