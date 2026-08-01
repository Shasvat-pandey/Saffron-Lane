import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Programs from "./Components/Programs/programs.jsx"
import Title from "./Components/Title/Title.jsx"
import About from "./Components/About/About.jsx"
import Campus from "./Components/Campus/Campus.jsx"
import Testimonials from "./Components/Testimonials/Testimonials.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import ExploreMore from "./Components/explore-more/ExploreMore.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Reservation from './Components/Contact/Reservation.jsx';
import WriteToUs from './Components/Contact/writetous.jsx';
import Auth from './Components/Auth/Auth';
import Profile from './Components/Auth/Profile';
import ScrollToTop from "./Components/ScrollToTop.jsx"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const HomePage = ({ playerState, setPlayerState }) => {
  const location = useLocation();

  // Automatically scroll to section if user navigated from another page
  useEffect(() => {
    if (location.state && location.state.targetSection) {
      const target = location.state.targetSection;
      
      // Calculate offset based on section
      let sectionOffset = -260;
      if (target === 'hero') sectionOffset = 0;
      if (target === 'about') sectionOffset = -150;

      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        offset: sectionOffset,
      });
    }
  }, [location]);

  return (
    <div>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Offering' title='What We Serve'/>
        <Programs/>
        <About setPlayerState={setPlayerState}/>
        <Title subTitle='Gallery' title='Inside the House'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What People Says'/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

const App = () => {
  const [playerState, setPlayerState] = useState(false);

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout><HomePage playerState={playerState} setPlayerState={setPlayerState} /></Layout>} />
        <Route path="/explore-more" element={<Layout><ExploreMore /></Layout>} />
        <Route path="/reservation" element={<Layout><Reservation /></Layout>} />
        <Route path="/write-to-us" element={<Layout><WriteToUs /></Layout>} />
        <Route path="/contact" element={<Layout><WriteToUs /></Layout>} />
        <Route path="/auth" element={<Layout><Auth /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App