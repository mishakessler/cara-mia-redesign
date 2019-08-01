import React from 'react'
import './css/hero.css'

export default function Hero() {
  return (
    <div className="section hero-section">
      <div className="cta">
        <a href="#footer" className="cta-button">Reservations</a>
        <a href="#menu" className="cta-button">Catering</a>
      </div>
      <div className="hero-text">
        <h4>A Traditional Italian Restaurant Specializing In Roman Trattoria Fare</h4>
      </div>
    </div>
  )
}