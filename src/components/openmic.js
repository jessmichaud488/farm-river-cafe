import React from 'react';
import Player from './player'

class Openmic extends React.Component {
    redner () {
        return (
            <div>
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>
                <Player />
            </div>
        )
    }
}

export default Openmic