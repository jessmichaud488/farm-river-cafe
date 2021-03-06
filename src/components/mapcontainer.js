import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '605px',
    height: '400px'
  };

class MapContainer extends React.Component {
render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 41.878977, lng: -72.979586 }}
        >
          <Marker position={{ lat: 41.878977, lng: -72.979586 }} />
        </Map>
        </div>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_KEY)
  })(MapContainer);