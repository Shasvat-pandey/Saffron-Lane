import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import heroBg from '../../assets/hero.jpg'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div 
      className='hero' 
      style={{ '--bg-img': `url(${heroBg})` }}
    > 
      <div className='hero-text'>
        <span className="hero-subtitle">EST. 2024 · PURE VEGETARIAN</span>
        
        <h1 className="hero-title-italic">We craft extraordinary</h1>
        <h1 className="hero-title-gold">FLAVOURS OF A GOLDEN WORLD</h1>
        
        <p className="hero-description">
          A candlelit house of seasonal, pure-vegetarian cuisine — where saffron, spice and slow fire turn each grain into a golden story.
        </p>
        
        <div className="hero-cta-group">
          <button className='btn-gold' onClick={() => navigate('/contact')}>
            RESERVE A TABLE
          </button>
          <button className='btn-outline-gold' onClick={() => navigate('/explore-more')}>
            EXPLORE THE MENU
          </button>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL ↓</span>
        </div>
      </div>
    </div>
  )
}

export default Hero