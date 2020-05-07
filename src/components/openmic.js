import React from 'react';

const path1 = require('../videos/OpenMic1.mp4');
const path2 = require('../videos/OpenMic2.mp4');
const path3 = require('../videos/OpenMic3.mp4');

    class OpenMic extends React.Component {
    render() {
        return (
            <div className="main-div">
            <div className="logo-div">
                <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
            </div>

            <div id="video-div">
                <video controls>
                    <source src={path1} type="video/mp4"></source>
                </video>

                <video controls>
                    <source src={path2} type="video/mp4"></source>
                </video>

                <video controls>
                    <source src={path3} type="video/mp4"></source>
                </video>
            </div>

            <div id="openmic-text-div" className="font-bold">
            <p>We love our local musicians! Every Friday night between 6:30PM-9:30PM, everyone is welcome to stop by</p>
            <p>for entertainment or to entertain!</p>
            </div>

            </div>
                )
            }
    }

    export default OpenMic