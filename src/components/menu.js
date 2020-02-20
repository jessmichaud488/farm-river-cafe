import React from 'react';

class Menu extends React.Component {
    redner () {
        return (
            <div>
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>
                <p>This is the Menu page.</p>
            </div>
        )
    }
}

export default Menu