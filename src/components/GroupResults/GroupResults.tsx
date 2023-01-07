import { GroupData } from '../../views/Groups/Groups.interface'
import { Link } from 'react-router-dom'
import './GroupResults.style.scss'

const GroupResults = (props: {title: string, content: GroupData[]}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>{props.title}</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                {props.content.map((group, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{group.rank}</td>
                        <td>
                            <Link to={`/teams/${group.team.replace(" ", "-")}`}>
                                <img 
                                    src={process.env.PUBLIC_URL + '/assets/flags/'+ group.acro.toUpperCase() +'.webp'} 
                                    alt="flag" 
                                />
                            </Link>
                        </td>
                        <td>
                            <Link to={`/teams/${group.team.replace(" ", "-")}`}>
                                <h4>{group.acro}</h4>
                            </Link>
                        </td>
                        <td>{group.win}</td>
                        <td>{group.draw}</td>
                        <td>{group.lose}</td>
                        <td>{group.goaldifference}</td>
                        <td>{group.points}</td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    )   
}

export default GroupResults