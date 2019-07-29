import React from 'react';
import './App.css';
import PrivateParty from './components/menu/PrivateParty';
import Lunch from './components/menu/Lunch';
import Dinner from './components/menu/Dinner';
import About from './components/About';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Lunch />
        <Dinner />
        <PrivateParty />
        <About />
        <Map />
      </div>
    );
  }
}

export default App;
