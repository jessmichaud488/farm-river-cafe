import React from 'react'
import Form from './form'
import MapContainer from './mapcontainer'

class Contact extends React.Component {
    render () {
        return (
            <div className="main-div">
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>
                <MapContainer />
                <Form />
            </div>
        )
    }
}

export default Contact