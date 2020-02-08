import React from 'react';

class Homepage extends React.Component {
    render () {
        return (
    <div>
        <div className="logo-div">
            <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
        </div>
            
            <img src={require("../images/cafe-room.jpg")} alt="Cafe room" className="medium-pic" id="cafe-room-pic"></img>
            <img src={require("../images/avocado-toast.jpg")} alt="Avocado toast" className="small-pic" id="avocado-toast-pic"></img>
                <div className="text-div">
                    <p>We serve New Hartford and its neighbors the freshest breakfast and lunch with a passion for organic and local ingredients. We have a variety of coffees
                    and house-blended teas and have plenty of vegan and gluten-free options, with something for everyone!<br></br>
                    </p>
                </div>
            
            <img src={require("../images/cafe-couch.jpg")} alt="Comfy couch" className="small-pic" id="cafe-couch-pic"></img>
            <img src={require("../images/chia-pudding.jpg")} alt="Chia pudding" className="large-pic" id="chia-pudding-pic"></img>
        </div>
        )
    }
}

export default Homepage