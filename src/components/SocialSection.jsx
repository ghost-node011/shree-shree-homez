import { motion } from 'framer-motion'

// Placeholder property imagery standing in for real Instagram reels/posts — swap for actual content when available.
const POSTS = [
  { img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80', caption: 'Living spaces built for real life' },
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80', caption: 'Open-plan interiors, done right' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80', caption: 'Where every detail is intentional' },
  { img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80', caption: 'Comfort, curated' },
  { img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80', caption: 'Modern living, Delhi NCR' },
  { img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80', caption: 'Finishes that speak for themselves' },
]

function InstagramGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function SocialSection() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #060D18 0%, #0A1628 100%)',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24, gap: 8 }}
          >
            <InstagramGlyph /> On Instagram
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 400, color: '#F5F0E8', marginBottom: 20,
            }}
          >
            Follow <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>@srisrihomz</span>
          </motion.h2>
          <motion.a
            href="#"
            data-cursor
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'inline-block',
              fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#C9A84C', textDecoration: 'none',
              borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: 4,
            }}
          >
            View Profile
          </motion.a>
        </div>

        <div className="social-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 12,
        }}>
          {POSTS.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              data-cursor
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22,1,0.36,1] }}
              style={{
                position: 'relative', overflow: 'hidden',
                aspectRatio: '9/16',
                display: 'block',
                border: '1px solid rgba(201,168,76,0.12)',
              }}
            >
              <img
                src={p.img}
                alt={p.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(6,13,24,0.85) 0%, transparent 55%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', top: 10, right: 10,
                width: 24, height: 24, borderRadius: '50%',
                background: 'rgba(6,13,24,0.6)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C',
              }}>
                <InstagramGlyph />
              </div>
              <p style={{
                position: 'absolute', left: 10, right: 10, bottom: 10,
                fontFamily: 'Outfit, sans-serif', fontSize: 10.5, fontWeight: 400,
                lineHeight: 1.4, color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}>
                {p.caption}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .social-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 560px)  { .social-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </div>
  )
}
