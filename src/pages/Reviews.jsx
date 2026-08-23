import { motion } from 'framer-motion'
import GoogleReviews from '../components/GoogleReviews'
import Testimonials from '../components/Testimonials'

export default function ReviewsPage() {
  return (
    <>
      <GoogleReviews />
      <Testimonials />
      <div style={{ background: '#14100D', padding: '80px clamp(24px,6vw,120px)', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16, fontWeight: 300,
            color: 'rgba(245,238,228,0.6)',
            marginBottom: 24,
          }}
        >
          Worked with us? We'd love to hear about your experience.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          href="https://www.google.com/search?q=Sri+Sri+Homz+Ghaziabad+reviews"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          className="btn-gold"
        >
          <span>Leave Us a Review</span>
        </motion.a>
      </div>
    </>
  )
}
