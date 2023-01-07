import { GetPlayers } from './TeamSquad.hook'
import SquadGroup from '../../../components/SquadGroup/SquadGroup'

const TeamSquad = () => {
  const squadPlayerSorted = GetPlayers().squadSorted

  return (
    <div className='team'>
      <h2>Squad</h2>
      {squadPlayerSorted.map((sqp, index) => (
        <SquadGroup 
          key={index}
          title={sqp[0]}
          content={sqp[1]}
        />
      ))}
    </div>
  )
}

export default TeamSquad