import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// Placeholder property imagery standing in for real Instagram reels/posts — swap for actual content when available.
const POSTS = [
  { img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80' },
]

function InstagramGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function SocialSection() {
  return (
    <div style={{ background: '#FFFFFF', padding: '80px clamp(24px,6vw,120px)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <motion.a
          href="https://instagram.com/srisrihomz"
          target="_blank" rel="noopener noreferrer" data-cursor
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            justifyContent: 'center', marginBottom: 36,
            textDecoration: 'none', color: '#002B42',
          }}
        >
          <span style={{ color: '#F9A819' }}><InstagramGlyph /></span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 400 }}>
            /srisrihomz
          </span>
        </motion.a>

        <div className="social-strip" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 12,
        }}>
          {POSTS.map((p, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/srisrihomz"
              target="_blank" rel="noopener noreferrer" data-cursor
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22,1,0.36,1] }}
              style={{
                position: 'relative', overflow: 'hidden',
                aspectRatio: '1/1', display: 'block',
              }}
            >
              <img
                src={p.img}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,43,66,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.85)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Play size={16} color="#002B42" fill="#002B42" strokeWidth={0} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .social-strip { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 420px) { .social-strip { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </div>
  )
}
