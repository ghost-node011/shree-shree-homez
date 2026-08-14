import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder poster + clip — swap for Yashank's actual walkthrough/brand film when available.
const POSTER = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80'
const VIDEO_SRC = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

export default function VideoSection() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      background: '#060D18',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24 }}
          >
            Watch Our Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 400, color: '#F5F0E8',
            }}
          >
            A Closer Look at <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Sri Sri Homz</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
          style={{
            position: 'relative', overflow: 'hidden',
            aspectRatio: '16/9',
            border: '1px solid rgba(201,168,76,0.2)',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(true)}
          data-cursor
        >
          <img
            src={POSTER}
            alt="Sri Sri Homz — video preview"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(6,13,24,0.35) 0%, rgba(6,13,24,0.55) 100%)',
          }} />

          {/* Play button */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
          }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              style={{
                width: 88, height: 88, borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.6)',
                background: 'rgba(6,13,24,0.5)',
                backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{
                width: 0, height: 0, marginLeft: 5,
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeft: '18px solid #C9A84C',
              }} />
            </motion.div>
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.85)',
            }}>
              Play Film
            </span>
          </div>

          {/* Corner accents */}
          {[
            { top: 20, left: 20 }, { top: 20, right: 20 },
            { bottom: 20, left: 20 }, { bottom: 20, right: 20 },
          ].map((pos, i) => (
            <div key={i} style={{ position: 'absolute', ...pos, width: 28, height: 28 }}>
              <div style={{
                position: 'absolute',
                ...(pos.top !== undefined ? { top: 0 } : { bottom: 0 }),
                ...(pos.left !== undefined ? { left: 0 } : { right: 0 }),
                width: '100%', height: 1, background: 'rgba(201,168,76,0.6)',
              }} />
              <div style={{
                position: 'absolute',
                ...(pos.top !== undefined ? { top: 0 } : { bottom: 0 }),
                ...(pos.left !== undefined ? { left: 0 } : { right: 0 }),
                height: '100%', width: 1, background: 'rgba(201,168,76,0.6)',
              }} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000,
              background: 'rgba(3,8,16,0.94)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 'clamp(16px,4vw,48px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: 1100,
                border: '1px solid rgba(201,168,76,0.25)',
                position: 'relative', background: '#000',
              }}
            >
              <video
                src={VIDEO_SRC}
                controls autoPlay
                style={{ width: '100%', display: 'block', maxHeight: '80vh' }}
              />
              <button
                onClick={() => setOpen(false)}
                data-cursor
                style={{
                  position: 'absolute', top: -44, right: 0,
                  background: 'none', border: 'none',
                  color: 'rgba(245,240,232,0.8)',
                  fontFamily: 'Outfit, sans-serif', fontSize: 11,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  padding: 8,
                }}
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
