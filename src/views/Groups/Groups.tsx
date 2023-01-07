import { GetGroupResults } from "./Groups.hook"
import GroupResults from "../../components/GroupResults/GroupResults"

import './Groups.style.scss'

const Groups = () => {
  const groupResults = Object.entries(GetGroupResults().groupResults)

  return (
    <div className='group'>
        <h2>Groups results</h2>
        <div className="groupAll">          
          {groupResults.map((gr, index) => (
            <div key={index} className="cardGroup__container">
              <GroupResults                   
                  title={gr[0]}
                  content={gr[1]}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Groups