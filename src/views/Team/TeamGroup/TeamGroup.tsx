import { useEffect, useState, useRef } from 'react'
import { GetGroupResults } from '../../Groups/Groups.hook'
import GroupResults from '../../../components/GroupResults/GroupResults'

const TeamGroup = () => {
    const teamGR = Object.entries(GetGroupResults().teamGR)
    const [display, setDisplay] = useState<boolean>(false);
    const [squadHeight, setSquadheight] = useState<number>(0)
    const groupRef = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {
        setSquadheight(groupRef.current?.scrollHeight)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [display])

    return (
        <div className="group">
            <h2>group results</h2>
            
            {teamGR.map((tgr, index) => (
                <div key={index}>
                    <h3 onClick={() => setDisplay(!display)}>{tgr[0]}</h3>
                    <div 
                        ref={groupRef} 
                        className="cardGroup__container"
                        style={display ? {height: squadHeight + "px"} : {height: "0px", padding: "0"}}
                    >
                        <GroupResults 
                            title={tgr[0]}
                            content={tgr[1]}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamGroup