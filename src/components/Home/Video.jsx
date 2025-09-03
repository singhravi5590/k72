import React from 'react'
import video from '../../assets/83c745cf.mp4'

const Video = () => {
  return (
    <div className='w-full h-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={video}></video>
    </div>
  )
}

export default Video