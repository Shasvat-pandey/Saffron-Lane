import React from 'react'
import './ExploreMore.css'
import Navbar from '../Navbar/Navbar.jsx'
import front from '../../assets/front.jpg'
import view_1 from '../../assets/view-1.jpg'
import view_2 from '../../assets/view-2.jpg'
import view_3 from '../../assets/view-3.jpg'
import view_4 from '../../assets/view-4.jpg'
import Footer from '../Footer/Footer.jsx'

const ExploreMore = () => {
  return (
    <div className="explore-more-page">
      <Navbar />
      <div className="explore-more container">
        <div className='border'>
          <h2>Discover the Art of Vegetarian Cuisine</h2>
          <p>
            At Saffron Lane, we believe that vegetarian cuisine is an art form. Our chefs are passionate about creating dishes that are not only delicious but also visually stunning. We use a variety of fresh, seasonal ingredients to craft meals that are both healthy and indulgent.
          </p>
        </div>
        <div>
          <img src={front} alt="Front View" />
          <h2>
            “ Step into a world where tradition meets elegance. Our doors are open to lead you down a lane of exquisite flavors and golden memories. Welcome to the heart of vegetarian fine dining. ”
          </h2>
        </div>
        <div className="gallery">
          <div className="gallery-item">
            <img src={view_1} alt="View" />
            <h1>Our Gallery</h1>
          </div>
          <div className="gallery-item">
            <img src={view_2} alt="View" />
            <h1>Working area</h1>
          </div>
          <div className="gallery-item">
            <img src={view_3} alt="View" />
            <h1>Beverage area</h1>
          </div>
          <div className="gallery-item">
            <img src={view_4} alt="View" />
            <h1>Private dining</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ExploreMore