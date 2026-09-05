import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

// Sri Sri Homz's real promotional video — embedded on their existing live site (srisrihomzz.in).
export const VIDEO_ID = 'GyGpYsYdZts'

function LightboxModal({ open, onClose, videoId }) {
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
            background: 'rgba(0,20,32,0.94)',
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
              aspectRatio: '16/9',
              border: '1px solid rgba(249,168,25,0.25)',
              position: 'relative', background: '#000',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Sri Sri Homz"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block', border: 0 }}
            />
            <button
              onClick={onClose}
              data-cursor
              style={{
                position: 'absolute', top: -44, right: 0,
                background: 'none', border: 'none',
                color: 'rgba(247,248,250,0.8)',
                fontFamily: 'Inter, sans-serif', fontSize: 11,
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
  )
}

// Hook for a custom trigger element — returns { setOpen, modal }; render {modal} once in the tree.
export function useVideoLightbox(videoId = VIDEO_ID) {
  const [open, setOpen] = useState(false)
  const modal = <LightboxModal open={open} onClose={() => setOpen(false)} videoId={videoId} />
  return { open, setOpen, modal }
}

// Self-contained YouTube thumbnail with built-in play button + lightbox.
export default function VideoThumb({
  videoId = VIDEO_ID,
  poster,
  aspectRatio = '16/9',
  label = 'Play Film',
  playSize = 72,
}) {
  const thumb = poster || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  const { setOpen, modal } = useVideoLightbox(videoId)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        data-cursor
        style={{
          position: 'relative', overflow: 'hidden',
          aspectRatio, cursor: 'pointer',
          border: '1px solid rgba(249,168,25,0.2)',
        }}
      >
        <img
          src={thumb}
          alt={label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,43,66,0.35) 0%, rgba(0,43,66,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
        }}>
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            style={{
              width: playSize, height: playSize, borderRadius: '50%',
              border: '1px solid rgba(249,168,25,0.6)',
              background: 'rgba(0,43,66,0.5)',
              backdropFilter: 'blur(6px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Play size={playSize * 0.32} color="#F9A819" fill="#F9A819" strokeWidth={0} style={{ marginLeft: 3 }} />
          </motion.div>
          {label && (
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(247,248,250,0.85)',
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
