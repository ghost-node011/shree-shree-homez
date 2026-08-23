import { motion } from 'framer-motion'

// Curated stock photography standing in until real property/office photos are provided.
const PHOTOS = [
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', tag: 'Exteriors', h: 420 },
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', tag: 'Exteriors', h: 320 },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', tag: 'Exteriors', h: 480 },
  { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 340 },
  { img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80', tag: 'Exteriors', h: 400 },
  { img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 300 },
  { img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 440 },
  { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80', tag: 'Exteriors', h: 360 },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 420 },
  { img: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 320 },
  { img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 400 },
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80', tag: 'Interiors', h: 340 },
]

function PhotoTile({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22,1,0.36,1] }}
      data-cursor
      style={{
        position: 'relative',
        overflow: 'hidden',
        breakInside: 'avoid',
        marginBottom: 16,
        border: '1px solid rgba(196,120,86,0.18)',
      }}
    >
      <img
        src={p.img}
        alt={p.tag}
        style={{
          width: '100%', height: p.h, objectFit: 'cover', display: 'block',
          transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute', top: 12, left: 12,
        background: 'rgba(20,16,13,0.55)', backdropFilter: 'blur(4px)',
        border: '1px solid rgba(196,120,86,0.35)',
        padding: '5px 12px',
        fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#E2AB89',
        pointerEvents: 'none',
      }}>
        {p.tag}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <div>
      {/* ── Dark header band ── */}
      <div style={{
        background: '#14100D',
        padding: '150px clamp(24px,6vw,120px) 64px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(196,120,86,0.09) 0%, transparent 50%)',
        }} />
        <div style={{ maxWidth: 1300, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24, color: '#E2AB89' }}
          >
            Gallery
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              fontWeight: 400, lineHeight: 1.1,
              color: '#F5EEE4', marginBottom: 20,
            }}
          >
            A Glimpse Into <span style={{ fontStyle: 'italic', color: '#C47856' }}>Our World</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16, fontWeight: 300,
              color: 'rgba(245,238,228,0.55)',
              maxWidth: 560, margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            From striking exteriors to thoughtfully finished interiors — a look
            at the kind of spaces we help our clients find and build.
          </motion.p>
        </div>
      </div>

      {/* ── Photo grid ── */}
      <div style={{
        background: '#F5EEE4',
        padding: '80px clamp(24px,6vw,120px) 120px',
      }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div className="gallery-masonry" style={{ columnCount: 4, columnGap: 16 }}>
            {PHOTOS.map((p, i) => <PhotoTile key={i} p={p} i={i} />)}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .gallery-masonry { column-count: 3 !important; } }
        @media (max-width: 700px)  { .gallery-masonry { column-count: 2 !important; } }
        @media (max-width: 460px)  { .gallery-masonry { column-count: 1 !important; } }
      `}</style>
    </div>
  )
}
