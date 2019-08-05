import React from 'react';
import './App.css';

import SidebarMenu from './components/semantic/SidebarMenu';
import Header from './components/Header';
import Hero from './components/Hero';
import TabMenu from './components/semantic/TabMenu';
import About from './components/About';
import Map from './components/Map';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


export default class App extends React.Component {
  render() {
    return (
      <div className="app" id="home">
        <div className="desktop">
          <Header id="header" />
          <Hero id="hero" />
          <TabMenu id="menu" />
          <About id="about" />
          <Gallery id="gallery" />
          <Map id="map" />
          <Footer id="footer" />
        </div>
        <div className="mobile">
          <SidebarMenu />
        </div>
      </div>
    );
  }
}
