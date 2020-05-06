import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay showThumbs={false} style={{ height: "200px", width: "300px"}}>
        <div style={{ height: "200px", width: "300px"}}>
            <img src={require('../images/barwithmug.jpg')} alt="Dessert bar with mug"></img>
        </div>
        <div style={{ height: "200px", width: "300px"}}>
            <img src={require('../images/cupcakes.jpg')} alt="Cupcakes"></img>
        </div>
        <div style={{ height: "200px", width: "300px"}}>
            <img src={require('../images/crumble.jpg')} alt="Different crumbles on display"></img>
        </div>
        <div style={{ height: "200px", width: "300px"}}>
            <img src={require('../images/cupcake-meditation.jpg')} alt="Cupcake with meditation cards"></img>
        </div>
        <div style={{ height: "200px", width: "300px"}}>
            <img src={require('../images/desserts-case.jpg')} alt="Desserts case"></img>
        </div>
    </Carousel>
);
