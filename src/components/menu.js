import React from 'react';
import Carousel from './carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Menu extends React.Component {
    render () {
        return (
            <div className="main-div">
                <div className="logo-div">
                    <img src={require("../images/farmriverlogo-transparent.png")} alt="Farm River Cafe logo" id="farmriver-logo"></img>
                </div>

                <img src={require('../images/menuplaceholder.jpg')} alt="placeholder for menu" id="menu-photo"></img>
                <p id="menu-text">Photo to be updated to a current menu.</p>

                <div id="desserts-div">
                    <p className="font-bold">After breakfast or lunch, make sure you take one (or two, or three) of our yummy desserts to go,</p>
                    <p className="font-bold">made with love by this lady right here, the awesome Ms.Stephanie!</p>
                    <img src={require('../images/stephanie.jpg')} alt="Stephanie" id="stephanie-pic"></img>
                    <p className="font-bold">With slices of crumble, bars, cupcakes, muffins, and cookies, many of which are gluten-free and vegan,</p>
                    <p className="font-bold">you can always find something to satisfy a sweet tooth!</p>
                    <p className="font-bold">**If you have a dietary allergy/preference, please be sure to ask first!**</p>
                </div>

                <Carousel />
            </div>
        )
    }
}

export default Menu