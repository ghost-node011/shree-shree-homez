import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoThumb from './VideoLightbox'

export default function About() {
  return (
    <div style={{
      background: '#FFFFFF',
      padding: '110px clamp(24px,6vw,120px)',
    }}>
      <div className="about-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: 64,
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
        >
          <VideoThumb aspectRatio="3/4" playSize={60} label="Watch Our Story" />
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              fontWeight: 500, color: '#002B42', marginBottom: 24,
            }}
          >
            About Sri Sri Homz
          </motion.h2>

          {[
            'Welcome to Sri Sri Homz, your trusted partner in Delhi NCR\'s real estate market. Founded by Yashank Arora, we specialize in simplifying real estate and construction by offering a transparent, hands-on approach to property buying, selling, and building.',
            'At Sri Sri Homz, we aim to provide long-term advisory to our clients, offering carefully selected opportunities and end-to-end support. Our team is committed to making your property journey as seamless and successful as possible.',
            'We cater to families and investors across Delhi NCR with a keen interest in real estate and construction. Whether you\'re a first-time buyer or looking to expand your portfolio, we\'re here to guide you every step of the way.',
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 15.5, fontWeight: 300,
                lineHeight: 1.85, color: 'rgba(0,43,66,0.68)', marginBottom: 18,
              }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ marginTop: 16 }}
          >
            <Link to="/team" data-cursor className="btn-gold">
              <span>Meet Our Team</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
