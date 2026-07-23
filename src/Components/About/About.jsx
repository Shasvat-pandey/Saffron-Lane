import React from 'react'
import './About.css'
import about_img from '../../Assets/about.jpg'
import play_icon from '../../Assets/play-icon.png'


const About = ({ setPlayerState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img' />
        <img src={play_icon} alt="" className='play_icon' onClick={() => setPlayerState(true)}/>
      </div>
      <div className="about-right">
        <h3>The Saffron Lane Philosophy</h3>
        <h2>Where every grain tells a golden story</h2>        
        <p>Unlike standard restaurants, Saffron Lane focuses on the origin of ingredients. Each dish is designed to take the diner down a metaphorical "lane" through the history of Asian spices—from the high altitudes of Kashmir to the lush valleys of Southeast Asia.</p>
        <p>We specialize in "elevated vegetarianism." This means using cutting-edge techniques like molecular gastronomy or wood-fire smoking to give vegetables the depth and complexity usually reserved for gourmet meats.</p>
        <p>The "Lane" in our name also represents our commitment to a transparent supply chain. We prioritize direct-from-farmer sourcing, ensuring that every grain and spice used is sustainable and ethically harvested</p>
      </div>
    </div>
  )
}

export default About
