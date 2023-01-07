import { GetMatches } from "./Matches.hook"

import Matches from "../../components/MatchesList/MatchesList"

const Home = () => {
  const finals = Object.entries(GetMatches().finals)
  const groups = Object.entries(GetMatches().groups).sort()

  return (
    <div className='matches'>
        <h2>Knockout stage</h2>
        {finals.map((final, index) => (
          <Matches 
            key={index}
            title={final[0]}
            content={final[1]}
          />
        ))}

        <h2>Group stage</h2>
        {groups.map((group, index) => (
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