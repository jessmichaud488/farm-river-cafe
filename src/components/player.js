import React from 'react'
import ReactPlayer from 'react-player'

class Player extends React.Component {
    render () {
      return (
          <div>
          <ReactPlayer
            url='https://www.facebook.com/FarmRiverCafe/videos/539490733535134/'
            width='100%'
            height='100%'
            config={{
                facebook: {
                  appId: '12345'
                }
              }}
          />

            <ReactPlayer
            url='https://www.facebook.com/FarmRiverCafe/videos/436335760318415/'
            width='100%'
            height='100%'
            config={{
                facebook: {
                  appId: '12345'
                }
              }}
          />

            <ReactPlayer
            url='https://www.facebook.com/FarmRiverCafe/videos/758829094581577/'
            width='100%'
            height='100%'
            config={{
                facebook: {
                  appId: '12345'
                }
              }}
          />
        </div>
      )
    }
  }

export default Player