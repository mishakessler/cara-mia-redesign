import React from 'react'
import './css/footer.css'

import CaraMiaLogo from '../assets/CaraMiaLogo.png'
import InstagramIcon from '../assets/InstagramIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/TwitterIcon.png'
import EmailIcon from '../assets/EmailIcon.png'
import PhoneIcon from '../assets/PhoneIcon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div id="footer-hours">
        <p>Tues-Fri: 11am-10pm</p>
        <p>Sat: 12pm-10pm • Sun: 1pm-9pm</p>
        <p>Closed</p>
      </div>
      <div id="footer-address">
        <img src={CaraMiaLogo} alt="logo" />
        <p>220-20 Hillside Ave, Queens Village, NY 11427</p>
      </div>
      <div id="footer-contact">
        <div id="footer-socials">
          <a href="https://www.instagram.com/caramiarestaurant/?hl=en"><img src={InstagramIcon} alt="logo" /></a>
          <a href="https://www.facebook.com/CaraMiaRestaurant"><img src={facebookIcon} alt="logo" /></a>
          <a href="https://www.facebook.com/CaraMiaRestaurant"><img src={TwitterIcon} alt="logo" /></a>
        </div>
        <div id='footer-contact-link'>
          <img src={EmailIcon} alt="logo" />
          <a href="info@caramiarestaurant.com">info@caramiarestaurant.com</a>
          <img src={PhoneIcon} alt="logo" />
          <a href="tel:718-740-9118">718-740-9118</a>
        </div>
      </div>
    </div>
  )
}