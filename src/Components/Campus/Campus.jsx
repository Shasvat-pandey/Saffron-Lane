import React from 'react'
import './Campus.css'
import gallery_1 from '../../Assets/gallery-1.jpg'
import gallery_2 from '../../Assets/gallery-2.jpg'
import gallery_3 from '../../Assets/gallery-3.jpg'
import gallery_4 from '../../Assets/gallery-4.jpg'

const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery Image 1" />
        <img src={gallery_2} alt="Gallery Image 2" />
        <img src={gallery_3} alt="Gallery Image 3" />
        <img src={gallery_4} alt="Gallery Image 4" />
      </div>
      
      {/* Updated button to match the luxury outline style from the image */}
      <button className='btn-outline-gold-menu'>
        SEE THE FULL MENU
      </button>
    </div>
  )
}

export default Campus