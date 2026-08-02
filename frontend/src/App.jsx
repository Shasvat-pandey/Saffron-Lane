import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

// User components
import Navbar from './user/Components/Navbar/Navbar.jsx'
import Hero from './user/Components/Hero/Hero.jsx'
import Programs from './user/Components/Programs/programs.jsx'
import Title from './user/Components/Title/Title.jsx'
import About from './user/Components/About/About.jsx'
import Campus from './user/Components/Campus/Campus.jsx'
import Testimonials from './user/Components/Testimonials/Testimonials.jsx'
import Footer from './user/Components/Footer/Footer.jsx'
import ExploreMore from './user/Components/explore-more/ExploreMore.jsx'
import Contact from './user/Components/Contact/Contact.jsx'
import Reservation from './user/Components/Contact/Reservation.jsx'
import WriteToUs from './user/Components/Contact/writetous.jsx'
import Auth from './user/Components/Auth/Auth'
import Profile from './user/Components/Auth/Profile'
import ScrollToTop from './user/Components/ScrollToTop.jsx'

// Admin components
import AdminLayout from './admin/Components/AdminLayout/AdminLayout.jsx'
import Dashboard from './admin/Components/Dashboard/Dashboard.jsx'
import Reservations from './admin/Components/Reservations/Reservations.jsx'
import MenuManager from './admin/Components/MenuManager/MenuManager.jsx'
import Settings from './admin/Components/Settings/Settings.jsx'

// Global Layout Wrapper
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

const HomePage = ({ playerState, setPlayerState }) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state && location.state.targetSection) {
      const target = location.state.targetSection;
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
      <Hero />
      <div className="container">
        <Title subTitle='Our Offering' title='What We Serve' />
        <Programs />
        <About setPlayerState={setPlayerState} />
        <Title subTitle='Gallery' title='Inside the House' />
        <Campus />
        <Title subTitle='Testimonials' title='What People Says' />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

const App = () => {
  const [playerState, setPlayerState] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage playerState={playerState} setPlayerState={setPlayerState} /></Layout>} />
        <Route path="/explore-more" element={<Layout><ExploreMore /></Layout>} />
        <Route path="/reservation" element={<Layout><Reservation /></Layout>} />
        <Route path="/write-to-us" element={<Layout><WriteToUs /></Layout>} />
        <Route path="/contact" element={<Layout><WriteToUs /></Layout>} />
        <Route path="/auth" element={<Layout><Auth /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />

        {/* Admin mounted under /admin-xyz */}
        <Route path="/admin-xyz" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="menu" element={<MenuManager />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App