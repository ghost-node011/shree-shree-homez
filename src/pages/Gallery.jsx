import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

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
        border: '1px solid rgba(249,168,25,0.18)',
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
        background: 'rgba(0,43,66,0.55)', backdropFilter: 'blur(4px)',
        border: '1px solid rgba(249,168,25,0.35)',
        padding: '5px 12px',
        fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#FFC670',
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
      <PageHero
        eyebrow="Gallery"
        title="A Glimpse Into"
        accent="Our World"
        subtitle="From striking exteriors to thoughtfully finished interiors — a look at the kind of spaces we help our clients find and build."
      />

      {/* ── Photo grid ── */}
      <div style={{
        background: '#F7F8FA',
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
