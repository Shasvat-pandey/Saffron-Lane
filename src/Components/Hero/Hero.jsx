import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero container'> 
      <div className='hero-text'>
        <h1>We Craft Extrordinary Flavors for a More Delicious World</h1>
        <p>Our innovative culinary philosophy is designed to inspire with the finest ingredients, techniques, and dining experiences, cultivating a richer appreciation for the art of food.</p>
        <button className='btn dark-btn' onClick={() => navigate('/explore-more')}>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero