import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import TabMenu from './components/TabMenu';
import About from './components/About';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <TabMenu />
        <About />
        <Map />
      </div>
    );
  }
}

export default App;
