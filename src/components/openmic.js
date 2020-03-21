import React from 'react';
import Player from '../components/player'

class Openmic extends React.Component {
    render () {
        const styles = {
            fontFamily: 'sans-serif',
            textAlign: 'center'
          };

        var openMicVids = [
            /*'../videos/OpenMic1.mp4',
            '../videos/OpenMic2.mp4',
            '../videos/OpenMic3.mp4'*/
            "//www.facebook.com/FarmRiverCafe/videos/539490733535134", 
            "//www.facebook.com/FarmRiverCafe/videos/758829094581577",
            "//www.facebook.com/FarmRiverCafe/videos/436335760318415"
          ];

        return (
            <div>
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>

            <div style={styles}>
            <Player videos={openMicVids}/>
            </div>

            </div>
        )
    }
}

export default Openmic