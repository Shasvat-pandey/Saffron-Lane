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
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx"
import ExploreMore from "./Components/explore-more/ExploreMore.jsx"

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
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About setPlayerState={setPlayerState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What People Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch With Us'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState}/>
    </div>
  )
}

const App = () => {
  const [playerState, setPlayerState] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage playerState={playerState} setPlayerState={setPlayerState} />} />
        <Route path="/explore-more" element={<ExploreMore />} />
      </Routes>
    </Router>
  )
}

export default App