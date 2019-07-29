import React from 'react';
import mapBackground from '../assets/mapBackground.png';
import map from '../assets/map.png';

class Map extends React.Component {
  render() {
    return (
      <div className='map-section'>
        <img src={mapBackground} alt="Map Background" />
        <img src={map} alt="Map Mockup" />

        <h4>Hours & Location</h4>

        <h5>Tuesday - Friday</h5>
        <p>11am-10pm</p>

        <h5>Saturday</h5>
        <p>12pm-10pm</p>

        <h5>Sunday</h5>
        <p>1pm-9pm</p>

        <h5>Closed Mondays</h5>

        <p>220-20 Hillside Ave. Queens Villiage, NY 11427</p>

        <h5>718.749.9118</h5>

      </div>
    )
  }
}

export default Map