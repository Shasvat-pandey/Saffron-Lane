import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setMobilemenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglemenu = () => {
    setMobilemenu(!mobilemenu);
  };

  // Helper function to handle section clicks from non-home pages
  const handleSectionClick = (sectionTarget) => {
    if (location.pathname !== '/') {
      // If we are on /explore-more or any other page, navigate to home and pass target section state
      navigate('/', { state: { targetSection: sectionTarget } });
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink 
            to="hero" 
            smooth={true} 
            offset={0} 
            duration={500}
            onClick={() => handleSectionClick('hero')}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="programs" 
            smooth={true} 
            offset={-260} 
            duration={500}
            onClick={() => handleSectionClick('programs')}
          >
            Program
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="about" 
            smooth={true} 
            offset={-150} 
            duration={500}
            onClick={() => handleSectionClick('about')}
          >
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="campus" 
            smooth={true} 
            offset={-260} 
            duration={500}
            onClick={() => handleSectionClick('campus')}
          >
            Campus
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="testimonials" 
            smooth={true} 
            offset={-260} 
            duration={500}
            onClick={() => handleSectionClick('testimonials')}
          >
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            offset={-260} 
            duration={500} 
            className="btn"
            onClick={() => handleSectionClick('contact')}
          >
            Contact us
          </ScrollLink>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={togglemenu} />
    </nav>
  )
}

export default Navbar;