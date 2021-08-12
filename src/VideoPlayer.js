import moment from 'moment'

const VideoPlayer = ({videoPlayerInfo}) => {

  if (!videoPlayerInfo) return null
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>{moment.utc(videoPlayerInfo.date).format("MMMM DD - LT")}</h1>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/meW3Y_yLlWI" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>  
      </iframe>
      <h2>{videoPlayerInfo.vehicleCount} Vehicles Detected</h2>
    </div>
    // <video width="540" height="310" controls>
    //   <source src="videos/1.mp4" type="video/mp4" />
    // </video>
  )
}

export default VideoPlayer