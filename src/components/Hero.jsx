import React from 'react'
import './css/hero.css'

export default function Hero() {
  return (
    <div className="section hero-section">
      <div>
        <button className="cta-button">Reservations</button>
        <button className="cta-button">Catering</button>
      </div>
      <div>
        <p>Traditional Italian Restaurant Specializing In Roman Trattoria Fare</p>
      </div>
    </div>
  )
}