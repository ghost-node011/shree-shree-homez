import { useState } from 'react'
import { motion } from 'framer-motion'

// Placeholder review content — swap for real Google Business Profile reviews before launch.
const REVIEWS = [
  {
    name: 'Anjali Mehta', rating: 5, date: '2 weeks ago',
    text: "We were overwhelmed looking for a builder floor in Noida until we spoke to the Sri Sri Homz team. They walked us through every option honestly, never pushed us toward the highest-commission property, and stayed available even after the deal closed. Genuinely different from every other agent we'd met.",
  },
  {
    name: 'Rohit Bansal', rating: 5, date: '1 month ago',
    text: "Construction on our independent house was finished on time and on budget, which almost never happens in this industry. Every material upgrade was discussed with us first — no surprise costs at the end.",
  },
  {
    name: 'Kavita Sharma', rating: 4, date: '1 month ago',
    text: "Good experience overall. The property search took a little longer than I expected, but that's because they kept ruling out places that didn't actually fit what we needed instead of just showing us anything to close fast. Appreciated that in hindsight.",
  },
  {
    name: 'Deepak Chauhan', rating: 5, date: '2 months ago',
    text: "As an NRI investing from abroad, I needed someone I could fully trust with site visits, paperwork, and negotiations. Sri Sri Homz handled everything transparently and sent regular updates with photos and videos. Closed a great deal in Sector 150.",
  },
  {
    name: 'Priyanka Rawat', rating: 5, date: '3 months ago',
    text: "Yashank personally got involved when we had questions about RERA approval on a project we were considering. That level of attention from the founder himself says a lot about how seriously they take client trust.",
  },
  {
    name: 'Sandeep Yadav', rating: 5, date: '3 months ago',
    text: "Recommended by a colleague and glad I listened. Straightforward advice, no pressure tactics, and they were upfront about a project's resale risk even though it meant a smaller commission for them. Rare to find that.",
  },
]

function Stars({ rating }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#C9A84C' : 'rgba(201,168,76,0.2)', fontSize: 14 }}>★</span>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 160
  const shown = expanded || !isLong ? review.text : review.text.slice(0, 160).trimEnd() + '…'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22,1,0.36,1] }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(201,168,76,0.15)',
        padding: '32px 28px',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Caudex, serif', fontSize: 16, color: '#C9A84C',
          flexShrink: 0,
        }}>
          {review.name.charAt(0)}
        </div>
        <div>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 600, color: '#F5F0E8' }}>
            {review.name}
          </p>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: 'rgba(245,240,232,0.4)', marginTop: 2 }}>
            {review.date}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <Stars rating={review.rating} />
      </div>

      <p style={{
        fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 300,
        lineHeight: 1.75, color: 'rgba(245,240,232,0.6)', flex: 1,
      }}>
        {shown}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(v => !v)}
          data-cursor
          style={{
            background: 'none', border: 'none', padding: 0, marginTop: 12,
            alignSelf: 'flex-start',
            fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#C9A84C',
          }}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </motion.div>
  )
}

export default function GoogleReviews() {
  return (
    <div style={{
      background: '#0A1628',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24 }}
          >
            Google Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 400, color: '#F5F0E8', marginBottom: 28,
            }}
          >
            Trusted by <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Our Clients</span>
          </motion.h2>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 18,
              padding: '18px 32px',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.03)',
            }}
          >
            <span style={{ fontFamily: 'Caudex, serif', fontSize: 40, color: '#C9A84C', lineHeight: 1 }}>
              4.9
            </span>
            <div style={{ textAlign: 'left' }}>
              <Stars rating={5} />
              <p style={{
                fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 400,
                color: 'rgba(245,240,232,0.5)', marginTop: 6,
              }}>
                Based on 180+ Google reviews
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
