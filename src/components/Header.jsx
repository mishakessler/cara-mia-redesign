import React from 'react'
import CaraMiaLogo from '../assets/CaraMiaLogo.png'

export default function Header() {
  return (
    <div className='subheader'>

      <p>Cara Mia Restaurant</p>
      <p>220-20 Hillside Avenue, Queens Village, NY 11427</p>
      <p>718.740.9118</p>
      <p>Hours: Tues-Fri: 11am-10pm • Sat: 12pm-10pm • Sun: 1pm-9pm </p>

      <div className='header'>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
          <img src={CaraMiaLogo} alt="logo" />
        </nav>

      </div>
    </div>
  )
}