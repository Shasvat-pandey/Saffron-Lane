import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    const slider=useRef();
    const tx=useRef(0);

const slideForward = () => {
    if(tx.current > -50)
    {
        tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
}
const slideBackward = () => {
    if(tx.current < 0)
    {
        tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ananya R.</h3>
                            <span>The Culinary Times</span>
                        </div>
                    </div>
                        <p>Saffron Lane has redefined vegetarian dining. It’s rare to find a place that treats vegetables with such high-end technique. The aroma hits you the moment you walk in—it’s like walking through a spice market in a dream.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William jackson</h3>
                            <span>Food Enthusiast</span>
                        </div>
                    </div>
                        <p>I’m not even a vegetarian, but the flavors here are so rich I didn't even miss the meat. The Signature Saffron Pilaf is the best I've ever had. Truly a 'golden' experience!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Vinira S.</h3>
                            <span>Wellness Blogger</span>
                        </div>
                    </div>
                        <p>Finally, a place that balances health and luxury. You can tell the ingredients are fresh and the spices are pure. It feels like a high-end meal that actually makes you feel good afterward.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>jack Will</h3>
                            <span>The Urban Gourmet Guide</span>
                        </div>
                    </div>
                        <p>At Saffron Lane, you don't just eat; you travel. Every dish is a masterpiece of fragrance and color that proves vegetarian food can be the most luxurious choice on the menu. It is, quite simply, the gold standard of dining.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
