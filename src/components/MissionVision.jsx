import { missionVision } from '../constants'

const MissionVision = () => {
  return (
    <div className='content'>
      <h1 className='text-2xl font-bold'>Our Mission and Vision</h1>
      <div className="mission-vision">
        {missionVision.map(missVis => (
          <div className="missVis" key={missVis.id}>
            <div className="icons">
              {missVis.icon}
            </div>
            <h2 className='font-bold'>{missVis.title}</h2>
            <p>{missVis.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MissionVision