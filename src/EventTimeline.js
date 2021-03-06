import React from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import './eventTimeline.css'
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const EventTimeline = ({timelineInfo, timelineClick}) => {
  const [currentItem, setCurrentItem] = React.useState(null)
  const handleTimelineClick = (info) => {
    setCurrentItem(info.videoId)
    timelineClick(info)
  }
  const classes = useStyles();

  return(
      <Timeline align="alternate" style={{height: '100%',overflowY: 'scroll'}}>
        {Object.keys(timelineInfo).map( (timelineDate, i) => {
          const values = Object.values(timelineInfo[timelineDate])
          return (
            <div key={timelineDate} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{margin: 0, fontWeight: 300}}>{moment(timelineDate).format("MMMM DD")}</h1>
            {values.map( (single,i) => {
                return (
                  <div className='hoverableItem' style={{width: '100%', background: currentItem === single.videoId ? '#76ff3e': undefined}} key={single.videoId} onClick={()=>handleTimelineClick(single)}>
                  <TimelineItem style={{display: "flex", alignItems: "center"}}>
                    <TimelineOppositeContent>
                      <Typography variant="body1" color="black" style={{fontWeight: 500}}>
                        {single.date.split(",")[0]}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="secondary">
                        <EmojiTransportationIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography>{single.vehicleCount} Vehicles Detected</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </div>
              )
            })}
            <hr style={{width: '50%', background: 'black'}}/>
            </div>
          )
        })}
      </Timeline>
  )
}

export default EventTimeline