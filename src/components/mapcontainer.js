import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '600px',
    height: '300px'
  };

class MapContainer extends React.Component {
render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 41.878977, lng: -72.979586}}
        >
          <Marker position={{ lat: 42.00, lng: -73.00}} />
        </Map>
        </div>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: 'TOKEN'
  })(MapContainer);