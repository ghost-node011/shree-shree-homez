import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

// Sri Sri Homz promotional video & Instagram Reel
export const INSTAGRAM_REEL_ID = 'DY4bsNGuzZr'
export const INSTAGRAM_REEL_URL = 'https://www.instagram.com/reel/DY4bsNGuzZr/?stkn=MXJuYXJ0cTJvc3h1NA=='
export const DEFAULT_POSTER = '/reel-thumb.jpg'
export const VIDEO_ID = 'GyGpYsYdZts' // YouTube fallback if needed

function LightboxModal({ open, onClose, reelId = INSTAGRAM_REEL_ID, videoId = null }) {
  const isYouTube = Boolean(videoId && videoId !== VIDEO_ID && !reelId)
  const embedUrl = isYouTube
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : `https://www.instagram.com/reel/${reelId}/embed/`

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,18,30,0.94)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(16px,4vw,48px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: isYouTube ? 1000 : 440,
              height: isYouTube ? 'auto' : 'min(84vh, 760px)',
              aspectRatio: isYouTube ? '16/9' : undefined,
              border: '1px solid rgba(249,168,25,0.35)',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 30px rgba(249,168,25,0.12)',
              position: 'relative',
              background: '#04101c',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Modal Top Bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 18px',
              background: 'rgba(0,43,66,0.9)',
              borderBottom: '1px solid rgba(249,168,25,0.2)',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A819',
              }}>
                Sri Sri Homz · Story
              </span>
              <button
                onClick={onClose}
                data-cursor
                aria-label="Close"
                style={{
                  background: 'none', border: 'none',
                  color: 'rgba(247,248,250,0.8)',
                  fontFamily: 'Inter, sans-serif', fontSize: 11,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  cursor: 'pointer', padding: '4px 8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#F9A819'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,248,250,0.8)'}
              >
                Close ✕
              </button>
            </div>

            {/* Video Iframe */}
            <div style={{ flex: 1, width: '100%', height: '100%', position: 'relative', background: '#000' }}>
              <iframe
                src={embedUrl}
                title="Sri Sri Homz Video"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: '100%', height: '100%', display: 'block', border: 0 }}
              />
            </div>

            {/* Modal Bottom Bar for Instagram Reel */}
            {!isYouTube && (
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 18px',
                background: 'rgba(0,30,48,0.95)',
                borderTop: '1px solid rgba(249,168,25,0.18)',
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11.5, color: 'rgba(247,248,250,0.65)' }}>
                  Yashank Arora · @srisri_homzz
                </span>
                <a
                  href={INSTAGRAM_REEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 11.5, fontWeight: 600,
                    color: '#F9A819', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                  }}
                >
                  Open on Instagram <ExternalLink size={12} />
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Hook for custom trigger elements
export function useVideoLightbox(reelId = INSTAGRAM_REEL_ID) {
  const [open, setOpen] = useState(false)
  const modal = <LightboxModal open={open} onClose={() => setOpen(false)} reelId={reelId} />
  return { open, setOpen, modal }
}

// Self-contained Video thumbnail with play button + lightbox
export default function VideoThumb({
  reelId = INSTAGRAM_REEL_ID,
  videoId = null,
  poster = DEFAULT_POSTER,
  aspectRatio = '16/9',
  label = 'Play Film',
  playSize = 72,
}) {
  const { setOpen, modal } = useVideoLightbox(reelId)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        data-cursor
        style={{
          position: 'relative', overflow: 'hidden',
          aspectRatio, cursor: 'pointer',
          borderRadius: 8,
          border: '1px solid rgba(249,168,25,0.25)',
          background: '#04101c',
        }}
      >
        <img
          src={poster}
          alt={label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,43,66,0.3) 0%, rgba(0,43,66,0.65) 100%)',
          transition: 'background 0.3s',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
        }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: playSize, height: playSize, borderRadius: '50%',
              border: '1px solid rgba(249,168,25,0.7)',
              background: 'rgba(0,43,66,0.65)',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            }}
          >
            <Play size={playSize * 0.32} color="#F9A819" fill="#F9A819" strokeWidth={0} style={{ marginLeft: 3 }} />
          </motion.div>
          {label && (
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#F7F8FA',
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            }}>
              {label}
            </span>
          )}
        </div>
      </div>
      {modal}
    </>
  )
}
