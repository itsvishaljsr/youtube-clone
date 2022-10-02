import React from 'react'
import './VideoRow.css'
import Avatar from '@mui/material/Avatar';

function VideoRow({ views, description, timestamp, channel, title, image, image_logo }) {
  return (
    <div className='videoRow'>
        <img src={image} alt={description} />
        
        <div className="videoRow__details">
            <div className="videoRow__text">
                <a href="-">{title}</a>
            </div>

            <div className="videoRow__text">
                <p className='videoRow__headline'>
                    {views} views • {timestamp}
                </p>
            </div>
            
            <div className="videoRow__channel">
                <Avatar className="videoRow__logo"
                alt={channel} src={image_logo} />
                <p>{channel}</p>
            </div>

            <div className="videoRow__text">
            <p className='videoRow__description'>{description}</p>
            </div>

        </div>
  </div>
  )
}




export default VideoRow