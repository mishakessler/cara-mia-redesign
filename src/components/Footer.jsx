import React from 'react'
import CaraMiaLogo from '../assets/CaraMiaLogo.png'
import InstagramIcon from '../assets/InstagramIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/TwitterIcon.png'
import EmailIcon from '../assets/EmailIcon.png'
import PhoneIcon from '../assets/PhoneIcon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <p>Tues-Fri: 11am-10pm</p>
      <p>Sat: 12pm-10pm • Sun: 1pm-9pm</p>
      <p>Closed</p>

      <img src={CaraMiaLogo} alt="logo" />

      <p>220-20 Hillside Ave, Queens Village, NY 11427</p>

      <img src={InstagramIcon} alt="logo" />
      <img src={facebookIcon} alt="logo" />
      <img src={TwitterIcon} alt="logo" />

      <img src={EmailIcon} alt="logo" />
      <p>info@caramiarestaurant.com</p>
      <img src={PhoneIcon} alt="logo" />
      <p>(718) 740-9118</p>
    </div>
  )
}