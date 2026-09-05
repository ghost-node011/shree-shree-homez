import { motion } from 'framer-motion'
import { useState } from 'react'
import { CalendarClock, Users, Award, Play } from 'lucide-react'
import { useVideoLightbox } from './VideoLightbox'

const CREDENTIALS = [
  { icon: CalendarClock, val: '5+',   label: 'Years in Real Estate' },
  { icon: Users,         val: '500+', label: 'Families Guided' },
  { icon: Award,         val: '15+',  label: 'Industry Recognitions' },
]

export default function Founder() {
  const [photoFailed, setPhotoFailed] = useState(false)
  const { setOpen: setStoryOpen, modal: storyModal } = useVideoLightbox()
  return (
    <div style={{
      background: '#F7F8FA',
      padding: '130px clamp(24px,6vw,120px)',
      position: 'relative',
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(249,168,25,0.07) 0%, transparent 50%), radial-gradient(circle at 95% 80%, rgba(249,168,25,0.05) 0%, transparent 45%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div className="founder-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left — Photo frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
            className="founder-photo-col"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'min(420px, 100%)' }}>
              {/* Soft ambient glow behind photo */}
              <div style={{
                position: 'absolute', inset: '-10%',
                background: 'radial-gradient(circle, rgba(249,168,25,0.22) 0%, transparent 65%)',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }} />

              {/* Decorative frame */}
              <div style={{
                position: 'absolute', inset: -18,
                border: '1px solid rgba(249,168,25,0.28)',
                pointerEvents: 'none',
              }} />

              <div style={{
                position: 'relative',
                boxShadow: '0 40px 70px -24px rgba(0,43,66,0.4)',
              }}>
                {!photoFailed ? (
                  <img
                    src="/yashank.png"
                    alt="Yashank Arora — Founder, Sri Sri Homz"
                    onError={() => setPhotoFailed(true)}
                    style={{
                      aspectRatio: '3/4',
                      width: '100%',
                      objectFit: 'cover',
                      border: '1px solid rgba(249,168,25,0.2)',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div style={{
                    aspectRatio: '3/4',
                    background: 'linear-gradient(160deg, #01476E 0%, #013A5C 100%)',
                    border: '1px solid rgba(249,168,25,0.15)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 16, position: 'relative',
                  }}>
                    <div style={{
                      width: 90, height: 90, borderRadius: '50%',
                      background: 'rgba(249,168,25,0.1)',
                      border: '1px solid rgba(249,168,25,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 36,
                    }}>
                      👤
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{
                        fontFamily: 'Source Serif 4, serif',
                        fontSize: 22, fontWeight: 500,
                        color: '#F7F8FA', marginBottom: 6,
                      }}>
                        Yashank Arora
                      </p>
                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 10, fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(249,168,25,0.7)',
                      }}>
                        Founder, Sri Sri Homz
                      </p>
                    </div>
                  </div>
                )}

                {/* Monogram seal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.22,1,0.36,1] }}
                  style={{
                    position: 'absolute', top: -22, right: -22,
                    width: 64, height: 64, borderRadius: '50%',
                    background: '#F7F8FA',
                    border: '1px solid rgba(249,168,25,0.4)',
                    boxShadow: '0 12px 28px rgba(0,43,66,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <span style={{
                    fontFamily: 'Source Serif 4, serif',
                    fontStyle: 'italic', fontWeight: 600,
                    fontSize: 22, color: '#F9A819',
                  }}>
                    YA
                  </span>
                </motion.div>

                {/* Trust badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.22,1,0.36,1] }}
                  style={{
                    position: 'absolute', top: 20, left: -18,
                    background: '#F9A819',
                    padding: '10px 16px',
                    boxShadow: '0 12px 24px rgba(0,43,66,0.35)',
                    textAlign: 'center',
                  }}
                >
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 8.5, fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(0,43,66,0.75)', marginBottom: 2,
                  }}>
                    Trusted By
                  </p>
                  <p style={{
                    fontFamily: 'Source Serif 4, serif',
                    fontSize: 17, fontWeight: 600,
                    color: '#002B42', lineHeight: 1,
                  }}>
                    500+ Families
                  </p>
                </motion.div>
              </div>

              {/* Caption strip */}
              <div style={{
                marginTop: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 12,
              }}>
                <p style={{
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: 16, fontWeight: 500,
                  color: '#002B42',
                }}>
                  Yashank Arora
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 9.5, fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#F9A819',
                }}>
                  Founder & CEO
                </p>
              </div>

              {/* ── Credential strip ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  marginTop: 28,
                  paddingTop: 24,
                  borderTop: '1px solid rgba(249,168,25,0.18)',
                }}
              >
                {CREDENTIALS.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <div key={i} style={{
                      padding: i === 0 ? '0 14px 0 0' : '0 14px',
                      borderLeft: i > 0 ? '1px solid rgba(249,168,25,0.18)' : 'none',
                    }}>
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -4 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: 34, height: 34, borderRadius: '50%',
                          background: 'rgba(249,168,25,0.08)',
                          border: '1px solid rgba(249,168,25,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          marginBottom: 12,
                        }}
                      >
                        <Icon size={15} color="#F9A819" strokeWidth={1.75} />
                      </motion.div>
                      <div style={{
                        fontFamily: 'Source Serif 4, serif',
                        fontSize: 'clamp(18px, 1.6vw, 22px)',
                        fontWeight: 400, color: '#F9A819', lineHeight: 1,
                      }}>
                        {s.val}
                      </div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 9, fontWeight: 500,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: '#5D7A93', marginTop: 6,
                        lineHeight: 1.4,
                      }}>
                        {s.label}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-label"
              style={{ marginBottom: 24 }}
            >
              A Little About Yashank
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 400, lineHeight: 1.15,
                color: '#002B42', marginBottom: 8,
              }}
            >
              The Man Behind
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15 }}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 300, fontStyle: 'italic',
                color: '#F9A819', marginBottom: 36,
              }}
            >
              Sri Sri Homz
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={() => setStoryOpen(true)}
              data-cursor
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#01476E', border: 'none',
                padding: '13px 24px', marginBottom: 32,
                cursor: 'pointer',
              }}
            >
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: '#F9A819',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Play size={10} color="#002B42" fill="#002B42" strokeWidth={0} />
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#F7F8FA',
              }}>
                Watch Our Story
              </span>
            </motion.button>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                width: 60, height: 1,
                background: 'linear-gradient(90deg, #F9A819, transparent)',
                transformOrigin: 'left',
                marginBottom: 32,
              }}
            />

            {[
              'Real estate and construction are not just businesses for me — they are about helping people build a better future.',
              'Yashank grew up in Delhi NCR watching families navigate one of the biggest decisions of their lives — buying a home — often without anyone in their corner they could fully trust. That gap is what eventually pulled him into real estate, and years of hands-on experience across residential, commercial, and construction projects followed.',
              'I started Sri Sri Homz with the belief that people deserve honest guidance while making some of the biggest financial and emotional decisions of their lives.',
              'Our goal is not just to sell properties or construct buildings. Our goal is to create trust, deliver value, and help people build long-term wealth and meaningful spaces.',
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 16, fontWeight: 300,
                  lineHeight: 1.85,
                  color: 'rgba(0,43,66,0.68)',
                  marginBottom: 20,
                }}
              >
                {i === 0 ? <em>{para}</em> : para}
              </motion.p>
            ))}

            {/* ── Pull quote card ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                position: 'relative',
                background: '#FFFFFF',
                border: '1px solid rgba(249,168,25,0.22)',
                padding: '32px 36px',
                marginTop: 12,
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: -14, left: 12,
                fontFamily: 'Source Serif 4, serif',
                fontSize: 90, fontWeight: 700,
                color: 'rgba(249,168,25,0.08)',
                lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              }}>
                "
              </div>
              <p style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 21, fontStyle: 'italic',
                color: '#002B42', lineHeight: 1.4,
                position: 'relative', marginBottom: 18,
              }}>
                At Sri Sri Homz, every relationship matters.
              </p>
              <p style={{
                fontFamily: 'Source Serif 4, serif',
                fontStyle: 'italic', fontSize: 17,
                color: '#F9A819', position: 'relative',
              }}>
                — Yashank Arora
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  position: 'absolute', bottom: 0, left: 0,
                  height: 2, width: '100%',
                  background: 'linear-gradient(90deg, #F9A819, transparent)',
                  transformOrigin: 'left',
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {storyModal}
    </div>
  )
}
