import React from 'react'
import './css/header.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import CaraMiaLogo from '../assets/CaraMiaLogo.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='secondary-nav'>
        <p><b>Cara Mia Restaurant</b></p>
        <p>220-20 Hillside Avenue, Queens Village, NY 11427</p>
        <p>718.740.9118</p>
        <p>Hours: Tues-Fri: 11am-10pm • Sat: 12pm-10pm • Sun: 1pm-9pm </p>
      </div>
      <div className='primary-nav'>
        <ul>
          <li><AnchorLink href="#home">Home</AnchorLink></li>
          <li><AnchorLink href="#menu">Menu</AnchorLink></li>
          <li><img src={CaraMiaLogo} alt="logo" /></li>
          <li><AnchorLink href="#about">About</AnchorLink></li>
          <li><AnchorLink href="#gallery">Gallery</AnchorLink></li>
        </ul>
      </div>
    </div>
  )
}