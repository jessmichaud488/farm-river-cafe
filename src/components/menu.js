import React from 'react';

class Menu extends React.Component {
    render () {
        return (
            <div>
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>

                <img src={require('../images/menuplaceholder.jpg')} alt="placeholder for menu" id="menu-photo"></img>
                <p id="menu-text">Photo to be updated to a current menu.</p>

                <div id="desserts-div">
                    <p>After breakfast or lunch, make sure you take one (or two, or three) of our yummy desserts to go,</p>
                    <p>made with love by this lady right here, the awesome Ms.Stephanie!</p>
                    <img src={require('../images/stephanie.jpg')} alt="Stephanie" className="dessert-pic"></img>
                    <p>With slices of crumble, bars, cupcakes, muffins, and cookies, many of which are gluten-free and vegan,</p>
                    <p>you can always find something to satisfy a sweet tooth!</p>
                    <img src={require('../images/barwithmug.jpg')} alt="Dessert bar with mug" className="dessert-pic"></img>
                    <img src={require('../images/cupcakes.jpg')} alt="Cupcakes" className="dessert-pic"></img>
                    <img src={require('../images/crumble.jpg')} alt="Different crumbles on display" className="dessert-pic"></img>
                </div>
            </div>
        )
    }
}

export default Menu