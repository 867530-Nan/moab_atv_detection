import React from 'react'
import MoabAnimation from "./MoabAnimation";
import './App.css'
import DateRange from './DateRangePicker';
import DetectionsHeader from './DetectionsHeader'
import moment from 'moment'
import EventTimeline from './EventTimeline'
import VideoPlayer from './VideoPlayer'
import Footer from './Footer'

function App() {
  const [startDate,setStartDate] = React.useState(moment())
  const [endDate,setEndDate] = React.useState(moment())
  const [videoPlayerInfo, setVideoPlayerInfo] = React.useState(null)
  const [response, setResponse] = React.useState({allDetections: [
    {
      date: moment.utc(new Date(Date.UTC(96, 7, 1, 4, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(96, 7, 1, 3, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(97, 7, 3, 5, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(97, 7, 3, 6, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(97, 7, 3, 7, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(98, 7, 9, 7, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(98, 7, 9, 7, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(98, 7, 9, 7, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(98, 7, 9, 7, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(99, 7, 20, 3, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(99, 7, 20, 3, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(2000, 7, 1, 3, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    {
      date: moment.utc(new Date(Date.UTC(2000, 7, 1, 3, 4, 5))).format("LT, L"),
      vehicleCount: Math.floor(Math.random() * 10),
      videoId: Math.floor(Math.random() * 99999),
    },
    
  ]})

  const dateChange = ({startDate,endDate}) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }
  const timelineClick = (info) => {
    setVideoPlayerInfo(info)
  }

  const sorted = response.allDetections.reduce((acc, curr) => {
    const formatDate = curr.date.split(", ")
    if (acc[formatDate[1]]){
      acc[formatDate[1]].push(curr)
    } else {
      acc[formatDate[1]] = [curr]
    }
    return acc
  }, {})

  return (
    <div>

    <div className="background">
      <MoabAnimation />
      <DateRange dateChange={dateChange} startDate={startDate} endDate={endDate} />
      {/* <hr style={{height: 1, width: '50%', background: 'black', marginTop: 50}}/> */}
      <DetectionsHeader detectionInfo={response.allDetections.length}/>
      <div style={{display: 'flex', width: '100%', height: 600}}>
        <div style={{width: "50%", display: 'flex', flexDirection: 'column'}}>
            <h1 
              style={{
                textAlign: "center", 
                fontSize: 50, 
                margin: '0', 
                textDecoration: 'underline', 
                textDecorationThickness: 2, 
                fontWeight: 300
              }}
            >
              Timeline
            </h1>
          <EventTimeline timelineInfo={sorted} timelineClick={timelineClick}/>
        </div>
        <div style={{width: 1, height: '100%', background: 'black'}}/>
        <div style={{width: "50%", display: 'flex', flexDirection: 'column'}}>
            <h1 
              style={{
                textAlign: "center", 
                fontSize: 50, 
                margin: '0', 
                textDecoration: 'underline', 
                textDecorationThickness: 2, 
                fontWeight: 300
              }}
            >
              Video Player
            </h1>
          <VideoPlayer videoPlayerInfo={videoPlayerInfo}/>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
