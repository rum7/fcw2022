import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data_team from '../../data/db-teams.json'

import './Teams.style.scss'

const Teams = () => {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [hiding, setHiding] = useState<string>("hide")

  useEffect(() => {
    if (isLoaded) {
      setHiding("")
    }
  }, [isLoaded])

  return (
    <div className='teams'>
      {data_team.map((team, index) => (
        <Link 
          key={index} 
          to={`/teams/${team.name.replace(" ", "-")}`} 
          className={hiding}
        >
          <img 
            src={process.env.PUBLIC_URL + '/assets/flags/'+ team.acro +'.webp'} 
            alt={`${team.name} flag`} 
            onLoad={() => setLoaded(!isLoaded)} 
          />
          <h3>{team.name.replace("-", " ")}</h3>
          <p>{`(${team.acro})`}</p>
        </Link>
      ))}
    </div>
  )
}

export default Teams