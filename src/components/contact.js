import React from 'react'
import MapContainer from './mapcontainer'

class Contact extends React.Component {
    render () {
        return (
            <div>
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>
                
                <MapContainer />
                <form className="contact-form">
                <div className="row">
                    <div className = "column">
                        <input
                            className="input-block"
                            type="text"
                            placeholder="Your name"
                        />
                        <input
                            className="input-block"
                            type="text"
                            placeholder="Your email"
                            required
                        />
                        <input
                            className="input-block"
                            type="text"
                            placeholder="Subject"
                        />
                    </div>

                    <div className = "column">
                        <input 
                            id="message-box"
                            type="text"
                            placeholder="Drop us a line!"
                            required
                        />
                    </div>
                </div>
                </form>
                <button id="form-button" type="submit">SEND</button>
            </div>
        )
    }
}

export default Contact