import { GetTeamMatches } from "./TeamMatches.hook"

import Matches from "../../../components/MatchesList/MatchesList"

const Home = () => {
  const teamMatches = Object.entries(GetTeamMatches().teamMatches)

  return (
    <div className='matches'>
      <h2>Matches</h2>
      {teamMatches.map((group, index) => (
        <Matches 
        key={index}
        title={group[0]}
        content={group[1]}
        />
      ))}
  </div>
  )
}

export default Home