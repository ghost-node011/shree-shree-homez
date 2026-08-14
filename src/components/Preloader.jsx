import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [pct, setPct]   = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    let val = 0
    const id = setInterval(() => {
      val += Math.floor(Math.random() * 6) + 2
      if (val >= 100) {
        val = 100
        clearInterval(id)
        setTimeout(() => { setExit(true); setTimeout(onDone, 900) }, 500)
      }
      setPct(val)
    }, 55)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#060D18',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Rings */}
          {[280, 380, 480].map((size, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 + i * 0.15, ease: [0.22,1,0.36,1] }}
              style={{
                position: 'absolute',
                width: size, height: size,
                borderRadius: '50%',
                border: `1px solid rgba(201,168,76,${0.12 - i * 0.03})`,
              }}
            />
          ))}

          {/* Logo */}
          <motion.img
            src="/logo-bg.png" alt="Sri Sri Homz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22,1,0.36,1] }}
            style={{ height: 90, marginBottom: 56, position: 'relative', zIndex: 1 }}
          />

          {/* Progress track */}
          <div style={{
            position: 'relative', width: 200, height: 1,
            background: 'rgba(201,168,76,0.15)',
            marginBottom: 20, zIndex: 1,
          }}>
            <motion.div
              animate={{ scaleX: pct / 100 }}
              transition={{ duration: 0.25, ease: 'linear' }}
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, #9D7C2F, #C9A84C, #DEC172)',
                transformOrigin: 'left',
              }}
            />
            <motion.div
              animate={{ left: `${pct}%` }}
              transition={{ duration: 0.25, ease: 'linear' }}
              style={{
                position: 'absolute', top: -3,
                width: 7, height: 7,
                background: '#DEC172', borderRadius: '50%',
                boxShadow: '0 0 12px rgba(201,168,76,0.9)',
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* Counter */}
          <p style={{
            fontFamily: 'Caudex, serif',
            fontSize: 13, letterSpacing: '0.4em',
            color: 'rgba(201,168,76,0.65)',
            position: 'relative', zIndex: 1,
          }}>
            {String(pct).padStart(3, '0')}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
