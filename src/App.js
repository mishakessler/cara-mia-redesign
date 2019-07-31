import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import TabMenu from './components/semantic/TabMenu';
import MobileMenu from './components/semantic/MobileMenu'
import About from './components/About';
import Map from './components/Map';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <TabMenu />
        <MobileMenu />
        <About />
        <Gallery />
        <Map />
        <Footer />
      </div>
    );
  }
}
