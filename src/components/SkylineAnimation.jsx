import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Back layer — smaller, hazier, further away
const BACK_BUILDINGS = [
  { w: 34, h: 120 }, { w: 26, h: 90 }, { w: 40, h: 160 }, { w: 22, h: 70 },
  { w: 30, h: 140 }, { w: 46, h: 100 }, { w: 28, h: 175 }, { w: 36, h: 110 },
  { w: 24, h: 85 }, { w: 42, h: 150 }, { w: 30, h: 95 }, { w: 26, h: 130 },
  { w: 38, h: 105 }, { w: 22, h: 75 }, { w: 32, h: 145 }, { w: 44, h: 115 },
]

// Front layer — taller, sharper, closer
const FRONT_BUILDINGS = [
  { w: 48, h: 220, windows: true }, { w: 34, h: 160, windows: true },
  { w: 60, h: 280, windows: true, spire: true }, { w: 30, h: 140, windows: true },
  { w: 42, h: 190, windows: true }, { w: 54, h: 240, windows: true },
  { w: 36, h: 170, windows: true }, { w: 46, h: 210, windows: true, crane: true },
  { w: 32, h: 150, windows: true }, { w: 58, h: 260, windows: true, spire: true },
  { w: 40, h: 185, windows: true }, { w: 30, h: 130, windows: true },
  { w: 50, h: 225, windows: true }, { w: 36, h: 165, windows: true },
]

function Building({ b, color, night }) {
  const cols = Math.max(1, Math.floor(b.w / 9))
  const rows = Math.max(1, Math.floor(b.h / 14))
  return (
    <div style={{ position: 'relative', width: b.w, height: b.h, background: color, flexShrink: 0, marginLeft: 3 }}>
      {b.spire && (
        <div style={{
          position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)',
          width: 2, height: 28, background: color,
        }} />
      )}
      {b.crane && (
        <>
          <div style={{ position: 'absolute', top: -46, left: 6, width: 2, height: 46, background: color }} />
          <div style={{ position: 'absolute', top: -46, left: 6, width: 34, height: 2, background: color }} />
        </>
      )}
      {b.windows && (
        <div style={{
          position: 'absolute', inset: 6,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: 3,
        }}>
          {Array.from({ length: cols * rows }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                background: '#C9A84C',
                opacity: night,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Cloud({ top, size, duration, delay, opacity }) {
  return (
    <motion.div
      initial={{ x: '-20vw' }}
      animate={{ x: '120vw' }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      style={{
        position: 'absolute', top, width: size, height: size * 0.36,
        background: 'rgba(255,255,255,0.9)',
        borderRadius: '50%',
        filter: 'blur(14px)',
        opacity,
        pointerEvents: 'none',
      }}
    />
  )
}

export default function SkylineAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const dayOpacity    = useTransform(scrollYProgress, [0, 0.35, 0.55], [1, 1, 0])
  const sunsetOpacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])
  const nightOpacity  = useTransform(scrollYProgress, [0.55, 0.8, 1], [0, 1, 1])
  const starOpacity   = useTransform(scrollYProgress, [0.6, 0.85], [0, 1])
  const cloudFade     = useTransform(scrollYProgress, [0.2, 0.55], [1, 0])
  const backY         = useTransform(scrollYProgress, [0, 1], ['0%', '-4%'])
  const frontY         = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <div ref={ref} style={{
      position: 'relative', overflow: 'hidden',
      height: 'clamp(420px, 60vh, 620px)',
      background: '#050B14',
    }}>
      {/* ── Sky layers (crossfade day → sunset → night) ── */}
      <motion.div style={{
        position: 'absolute', inset: 0, opacity: dayOpacity,
        background: 'linear-gradient(180deg, #17324F 0%, #3E6285 45%, #C9A87A 100%)',
      }} />
      <motion.div style={{
        position: 'absolute', inset: 0, opacity: sunsetOpacity,
        background: 'linear-gradient(180deg, #2A1F3D 0%, #8A4A4E 40%, #D98C4A 75%, #E8B15E 100%)',
      }} />
      <motion.div style={{
        position: 'absolute', inset: 0, opacity: nightOpacity,
        background: 'linear-gradient(180deg, #030710 0%, #060D1C 55%, #0A1628 100%)',
      }} />

      {/* Stars — night only */}
      <motion.div style={{ position: 'absolute', inset: 0, opacity: starOpacity, pointerEvents: 'none' }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${(i * 53) % 60}%`,
            left: `${(i * 37) % 100}%`,
            width: 1.5, height: 1.5, borderRadius: '50%',
            background: '#F5F0E8',
            opacity: 0.4 + (i % 4) * 0.15,
          }} />
        ))}
      </motion.div>

      {/* Drifting clouds — fade out as sky moves past day */}
      <motion.div style={{ opacity: cloudFade, position: 'absolute', inset: 0 }}>
        <Cloud top="12%" size={140} duration={70} delay={0}  opacity={0.5} />
        <Cloud top="20%" size={100} duration={55} delay={12} opacity={0.35} />
        <Cloud top="8%"  size={170} duration={85} delay={28} opacity={0.4} />
        <Cloud top="26%" size={90}  duration={48} delay={5}  opacity={0.3} />
      </motion.div>

      {/* Gold horizon glow */}
      <div style={{
        position: 'absolute', bottom: '30%', left: 0, right: 0, height: 200,
        background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Back skyline layer ── */}
      <motion.div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, y: backY,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        opacity: 0.5, filter: 'blur(1px)',
      }}>
        {[...BACK_BUILDINGS, ...BACK_BUILDINGS].map((b, i) => (
          <Building key={i} b={b} color="#0F2038" night={nightOpacity} />
        ))}
      </motion.div>

      {/* ── Front skyline layer ── */}
      <motion.div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, y: frontY,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}>
        {[...FRONT_BUILDINGS, ...FRONT_BUILDINGS].map((b, i) => (
          <Building key={i} b={b} color="#050B14" night={nightOpacity} />
        ))}
      </motion.div>

      {/* ── Caption ── */}
      <div style={{
        position: 'absolute', top: 'clamp(40px,6vw,72px)', left: 0, right: 0,
        textAlign: 'center', zIndex: 5, pointerEvents: 'none',
      }}>
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20, color: 'rgba(245,240,232,0.85)' }}>
          Noida &amp; Delhi NCR
        </div>
        <h2 style={{
          fontFamily: 'Caudex, serif',
          fontSize: 'clamp(30px, 4vw, 52px)',
          fontWeight: 400, color: '#F5F0E8',
        }}>
          A Skyline We're <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Helping Build</span>
        </h2>
      </div>
    </div>
  )
}
