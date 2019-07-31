import React from 'react'
import './css/about.css'

import about from '../assets/about-image.png'



class About extends React.Component {
  render() {
    return (
      <div className="section about-section">

        <div className="about-pics">
          <img src={about} alt="Family making dough at Cara Mia./ Handkneading pizza dough at Cara Mia." />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>It all began many years ago in a small region in Italy called Broccostella, where Tomaso and Armanda DeCiantis dreamed of moving to the United States to start their own business. After arriving at Ellis Island and much hard work, they opened Cara Mia Restaurant in Queens Village, New York. Both their children (Larry, Carlo and Anna) and Armanda’s mother, Liberata helped out every day in the restaurant. Cara Mia soon became famous for Liberata’s meatball recipe. All three children can still be found here preparing our fresh Italian specialties.</p>
        </div>

      </div>
    )
  }
}

export default About;