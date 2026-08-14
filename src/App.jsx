import { useState } from 'react'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Achievements from './components/Achievements'
import GoogleReviews from './components/GoogleReviews'
import Testimonials from './components/Testimonials'
import VideoSection from './components/VideoSection'
import Philosophy from './components/Philosophy'
import Founder from './components/Founder'
import SocialSection from './components/SocialSection'
import Contact from './components/Contact'
import SkylineAnimation from './components/SkylineAnimation'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease', background: '#060D18' }}>
        <Cursor />
        <Navbar />
        <Chatbot />
        <main>
          <section id="home"><Hero /></section>
          <Stats />
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="whyus"><WhyUs /></section>
          <section id="achievements"><Achievements /></section>
          <section id="reviews"><GoogleReviews /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="video"><VideoSection /></section>
          <Philosophy />
          <section id="founder"><Founder /></section>
          <section id="social"><SocialSection /></section>
          <section id="contact"><Contact /></section>
          <SkylineAnimation />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
