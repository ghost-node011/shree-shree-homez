import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Achievements from '../components/Achievements'
import GoogleReviews from '../components/GoogleReviews'
import Testimonials from '../components/Testimonials'
import VideoSection from '../components/VideoSection'
import Philosophy from '../components/Philosophy'
import Founder from '../components/Founder'
import SocialSection from '../components/SocialSection'
import SkylineAnimation from '../components/SkylineAnimation'
import ServiceCard from '../components/ServiceCard'
import { REAL_ESTATE, CONSTRUCTION } from '../components/Services'

const TEASER_SERVICES = [REAL_ESTATE[0], REAL_ESTATE[1], CONSTRUCTION[0], REAL_ESTATE[3]]

function ServicesTeaser() {
  return (
    <div style={{
      background: '#14100D',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 24,
          justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 48,
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-label"
              style={{ marginBottom: 20 }}
            >
              What We Offer
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.08 }}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: 400, lineHeight: 1.1,
                color: '#F5EEE4',
              }}
            >
              Real Estate <span style={{ fontStyle: 'italic', color: '#C47856' }}>&amp; Construction</span>
            </motion.h2>
          </div>
          <Link to="/services" data-cursor className="btn-outline-gold" style={{ flexShrink: 0 }}>
            View All Services
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {TEASER_SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} fullWidth />
          ))}
        </div>
      </div>
    </div>
  )
}

function FinalCTA() {
  return (
    <div style={{
      background: '#F5EEE4',
      padding: '100px clamp(24px,6vw,120px)',
      textAlign: 'center',
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: 'Source Serif 4, serif',
          fontSize: 'clamp(28px, 3.5vw, 46px)',
          fontWeight: 400, color: '#14100D',
          marginBottom: 32,
        }}
      >
        Ready to find your <span style={{ fontStyle: 'italic', color: '#C47856' }}>dream property?</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <Link to="/contact" data-cursor className="btn-gold">
          <span>Book a Free Consultation</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesTeaser />
      <div id="whyus"><WhyUs /></div>
      <Achievements />
      <GoogleReviews />
      <Testimonials />
      <VideoSection />
      <Philosophy />
      <Founder />
      <SocialSection />
      <FinalCTA />
      <SkylineAnimation />
    </>
  )
}
