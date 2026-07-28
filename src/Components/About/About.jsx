import React from 'react'
import './About.css'
// Make sure to put your actual video file in the assets folder!
import about_video from '../../assets/Restro-video.mp4' 

const About = () => {
  return (
    <div className="about-wrapper">
      <div className='about-section'>
        
        {/* Left Media Column */}
        <div className="about-left">
          <div className="media-container">
            {/* Self-contained video player: Auto-plays, loops, and has stop/play controls */}
            <video 
              src={about_video} 
              className="about-video"
              autoPlay 
              muted 
              loop 
              controls 
            />
            <div className="video-caption">CHEF ELENA MARCHETTI</div>
          </div>
        </div>
        
        {/* Right Content Column */}
        <div className="about-right">
          <h3 className="about-subtitle">THE SAFFRON LANE PHILOSOPHY</h3>
          <h2 className="about-title">
            Where every grain<br/>tells a <span className="gold-text">golden story.</span>
          </h2> 
          
          <hr className="divider" />
          
          <p className="about-desc">
            Unlike a standard restaurant, Saffron Lane begins with the origin of the ingredient. Each dish walks the guest down a quiet lane — from the saffron fields of Kashmir to the sun-warmed valleys of the Mediterranean.
          </p>
          <p className="about-desc">
            We practise <span className="highlight-text">ELEVATED VEGETARIANISM</span> — wood-fire, slow ferments, and modern technique that give vegetables the depth usually reserved for far heavier plates.
          </p>
          <p className="about-desc">
            The "Lane" in our name is a promise: every grain, every spice, is sourced direct-from-farmer, sustainably, and with reverence.
          </p>

          <hr className="divider" />

          {/* Stats Row */}
          <div className="about-stats">
            <div className="stat-item">
              <h4>100%</h4>
              <p>PURE VEGETARIAN</p>
            </div>
            <div className="stat-item">
              <h4>24</h4>
              <p>SEATS NIGHTLY</p>
            </div>
            <div className="stat-item">
              <h4>12</h4>
              <p>YEARS OPEN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About