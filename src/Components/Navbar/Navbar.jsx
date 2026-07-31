import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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

  const handleSectionClick = (sectionTarget) => {
    setMobilemenu(false); // Close menu when item clicked on mobile
    if (location.pathname !== '/') {
      navigate('/', { state: { targetSection: sectionTarget } });
    }
  };

  const handleLogoClick = (e) => {
    setMobilemenu(false);
    if (location.pathname === '/') {
      e.preventDefault();
      scroll.scrollToTop({ duration: 500, smooth: 'easeInOutQuart' });
    } else {
      handleSectionClick('hero');
    }
  };

  return (
    <nav className={sticky ? 'dark-nav' : ''}>
      <div className="nav-left-wrapper">
        {/* Hamburger icon placed on the LEFT */}
        <div className={`hamburger-icon ${mobilemenu ? 'active' : ''}`} onClick={togglemenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Brand Logo & Title */}
        <Link to="/" onClick={handleLogoClick} className="nav-brand">
          <img src={logo} alt="Saffron Lane Logo" className="logo-small" />
          <span className="brand-title">SAFFRON LANE</span>
        </Link>
      </div>

      <ul className={mobilemenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink to="hero" smooth={true} offset={0} duration={500} onClick={() => handleSectionClick('hero')}>
            HOME
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="programs" smooth={true} offset={-100} duration={500} onClick={() => handleSectionClick('programs')}>
            OFFERINGS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={-100} duration={500} onClick={() => handleSectionClick('about')}>
            PHILOSOPHY
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="explore-more" smooth={true} offset={-100} duration={500} onClick={() => navigate('/explore-more')}>
            MENU
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="campus" smooth={true} offset={-100} duration={500} onClick={() => handleSectionClick('campus')}>
            GALLERY
          </ScrollLink>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobilemenu(false)} className="nav-link-sign">SIGN IN</Link>
        </li>
        {location.pathname !== '/reservation' && (
        <li>
          <Link to="/reservation" onClick={() => setMobilemenu(false)} className="btn-reserve-nav">RESERVE</Link>
        </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar;