import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/YE7VzlLtp-4'
const ReactPlayerCode = () => (
  <div className="video-container bg-primary">
    <h1 className="heading" style={{color:"#ffffff"}}>Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer controls url={videoURL} playing={true} />
    </div>
  </div>
)

export default ReactPlayerCode