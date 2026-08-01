import React, { useState } from 'react';
import './Testimonials.css';

// Store data in an array for cleaner mapping and easy editing
const testimonialsData = [
  {
    name: "ANANYA R.",
    role: "The Culinary Times",
    text: "Saffron Lane has redefined vegetarian dining. It's rare to find a place that treats vegetables with such high-end technique. The aroma hits you the moment you walk in — like walking through a spice market in a dream."
  },
  {
    name: "WILLIAM JACKSON",
    role: "Food Enthusiast",
    text: "I’m not even a vegetarian, but the flavors here are so rich I didn't even miss the meat. The Signature Saffron Pilaf is the best I've ever had. Truly a 'golden' experience!"
  },
  {
    name: "VINIRA S.",
    role: "Wellness Blogger",
    text: "Finally, a place that balances health and luxury. You can tell the ingredients are fresh and the spices are pure. It feels like a high-end meal that actually makes you feel good afterward."
  },
  {
    name: "JACK WILL",
    role: "The Urban Gourmet Guide",
    text: "At Saffron Lane, you don't just eat; you travel. Every dish is a masterpiece of fragrance and color that proves vegetarian food can be the most luxurious choice on the menu. It is, quite simply, the gold standard of dining."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='testimonials'>
      <div className="slider">
        {/* Slides the list left or right based on the active index */}
        <ul style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonialsData.map((testimonial, index) => (
            <li key={index}>
              <div className="slide">
                <div className="quote-mark">"</div>
                <p className="review-text">{testimonial.text}</p>
                <div className="user-info">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Bottom Dash Indicators */}
      <div className="slider-dots">
        {testimonialsData.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;