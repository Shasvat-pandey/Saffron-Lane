import React from 'react'
import './programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
      
      {/* Card 1 */}
      <div className="program-card">
        <div className="img-container">
          <span className="step-number">01</span>
          <img src={program_1} alt="The Royal Thali" />
        </div>
        <div className="card-content">
          <span className="card-category">CHEF'S THALI</span>
          <h3 className="card-title">The Royal Thali</h3>
          <p className="card-desc">
            Nine slow-cooked preparations on a hand-hammered brass platter — the day's finest, presented at once.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="program-card">
        <div className="img-container">
          <span className="step-number">02</span>
          <img src={program_2} alt="The Spice Route" />
        </div>
        <div className="card-content">
          <span className="card-category">TASTING JOURNEY</span>
          <h3 className="card-title">The Spice Route</h3>
          <p className="card-desc">
            A seven-course walk from Kashmir's saffron fields to the Mediterranean coast — paired with rare teas.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="program-card">
        <div className="img-container">
          <span className="step-number">03</span>
          <img src={program_3} alt="The Kesar Room" />
        </div>
        <div className="card-content">
          <span className="card-category">PRIVATE DINING</span>
          <h3 className="card-title">The Kesar Room</h3>
          <p className="card-desc">
            A candlelit private room for eight to sixteen guests, with a bespoke vegetarian menu written for the evening.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Programs