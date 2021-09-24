import React from "react"
import ReactPlayer from 'react-player'
import "./responsiveVideo.css"

const ResponsivePlayer = () => {

      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=J_7Q75XcYCY&ab_channel=triiyo'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
  }

  export default ResponsivePlayer