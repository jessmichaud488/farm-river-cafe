import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px',
    objectfit: 'cover'
  };
  
function App() {
  return (
	<div style={styles}>
		<Carousel autoPlay showThumbs={false}>
			<div>
				<img src={require('../images/barwithmug.jpg')} alt="Dessert bar with mug" />
			</div>
			<div>
				<img src={require('../images/orangecupcake.jpg')} alt="Cupcakes" />
			</div>
			<div>
				<img src={require('../images/crumble.jpg')} alt="Different crumbles on display" />
			</div>
			<div>
				<img src={require('../images/cupcake-meditation.jpg')} alt="Cupcake with meditation cards" />
			</div>
		</Carousel>
	</div>
  );
}

export default App;