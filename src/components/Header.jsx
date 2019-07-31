import React from 'react'
import './css/header.css'

import CaraMiaLogo from '../assets/CaraMiaLogo.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='secondary-nav'>
        <p>Cara Mia Restaurant</p>
        <p>220-20 Hillside Avenue, Queens Village, NY 11427</p>
        <p>718.740.9118</p>
        <p>Hours: Tues-Fri: 11am-10pm • Sat: 12pm-10pm • Sun: 1pm-9pm </p>
      </div>
      <div className='primary-nav'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><img src={CaraMiaLogo} alt="logo" /></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </div>
    </div>
  )
}