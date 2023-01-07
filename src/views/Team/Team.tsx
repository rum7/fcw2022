import SquadBan from '../../components/SquadBan/SquadBan'
import Group from './TeamGroup/TeamGroup'
import Squad from './TeamSquad/TeamSquad'
import TeamMatches from './TeamMatches/TeamMatches'

const Team = () => {

  return (
    <div className='teamDetails'>
      <SquadBan />
      <Group />
      <Squad />
      <TeamMatches />
    </div>
  )
}

export default Team