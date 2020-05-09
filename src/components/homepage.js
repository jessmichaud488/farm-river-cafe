import React from 'react'

class Homepage extends React.Component {
    render () {
        return (
    <div className="main-div">
        <div className="logo-div">
            <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
        </div>
        
        <div id="homepage-collage">
            <img src={require("../images/cafe-room.jpg")} alt="Cafe room" className="pic" id="cafe-room-pic"></img>
                <div className="text-div">
                    <p>We serve New Hartford and its neighbors the freshest breakfast and lunch with a passion for organic and local ingredients. We have a variety of coffees
                    and house-blended teas and have plenty of vegan and gluten-free options, with something for everyone!<br></br>
                    </p>
                    <img src={require("../images/ivyswag.jpg")} alt="Ivy swag around doorframe" className="pic" id="ivy-swag-pic"></img>
                </div>
            <img src={require("../images/avocado-toast.jpg")} alt="Avocado toast" className="pic" id="avocado-toast-pic"></img>
            <img src={require("../images/chia-pudding.jpg")} alt="Chia pudding" className="pic" id="chia-pudding-pic"></img>
        </div>
        </div>
        )
    }
}
export default Homepage