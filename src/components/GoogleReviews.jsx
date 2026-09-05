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

function GoogleG({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.93 21.93 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
    </svg>
  )
}

function Stars({ rating, size = 14 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#F9A819' : 'rgba(249,168,25,0.2)', fontSize: size }}>★</span>
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
      data-cursor
      whileHover={{ y: -6, borderColor: 'rgba(249,168,25,0.5)', boxShadow: '0 20px 40px rgba(0,43,66,0.08)' }}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(249,168,25,0.15)',
        padding: '36px 30px 30px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.4s ease',
      }}
    >
      {/* Ghost quotation mark */}
      <div style={{
        position: 'absolute', top: -18, right: 12,
        fontFamily: 'Source Serif 4, serif',
        fontSize: 100, fontWeight: 700,
        color: 'rgba(249,168,25,0.06)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        "
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(249,168,25,0.22), rgba(249,168,25,0.08))',
            border: '1px solid rgba(249,168,25,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Source Serif 4, serif', fontSize: 16, color: '#C98209',
            flexShrink: 0,
          }}>
            {review.name.charAt(0)}
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: '#002B42' }}>
              {review.name}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#5D7A93', marginTop: 2 }}>
              {review.date}
            </p>
          </div>
        </div>
        <GoogleG size={18} />
      </div>

      <div style={{ marginBottom: 14, position: 'relative' }}>
        <Stars rating={review.rating} />
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
        lineHeight: 1.75, color: 'rgba(0,43,66,0.68)', flex: 1,
        position: 'relative',
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
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#F9A819',
            position: 'relative',
          }}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}

      {/* Bottom gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.08 }}
        style={{
          position: 'absolute', bottom: 0, left: 0,
          height: 2, width: '100%',
          background: 'linear-gradient(90deg, #F9A819, transparent)',
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  )
}

export default function GoogleReviews() {
  return (
    <div style={{
      background: '#E7ECF1',
      padding: '130px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative background glow + ghost quote */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(249,168,25,0.08) 0%, transparent 55%)',
      }} />
      <div style={{
        position: 'absolute', top: '2%', left: '3%',
        fontFamily: 'Source Serif 4, serif',
        fontSize: 'min(28vw, 380px)', fontWeight: 700,
        color: 'rgba(249,168,25,0.035)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        "
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
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
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 400, color: '#002B42', marginBottom: 32,
            }}
          >
            Trusted by <span style={{ fontStyle: 'italic', color: '#F9A819' }}>Our Clients</span>
          </motion.h2>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 26,
              padding: '24px 40px',
              border: '1px solid rgba(249,168,25,0.3)',
              background: '#FFFFFF',
              boxShadow: '0 24px 48px rgba(0,43,66,0.06)',
            }}
          >
            <GoogleG size={34} />
            <div style={{ width: 1, height: 44, background: 'rgba(249,168,25,0.2)' }} />
            <span style={{ fontFamily: 'Source Serif 4, serif', fontSize: 44, color: '#F9A819', lineHeight: 1 }}>
              4.9
            </span>
            <div style={{ textAlign: 'left' }}>
              <Stars rating={5} size={15} />
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 400,
                color: '#5D7A93', marginTop: 6,
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
