import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Video,
  Headphones,
  Radio,
  Sparkles,
  Layers,
  Clock,
  Mic,
  Film,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════════
   MEDIA CONFIGURATION
   When you receive your podcast video or audio links/files, you can
   add them here in the future to display live episodes.
═══════════════════════════════════════════════════════════════════ */
export const PODCAST_CONFIG = {
  videoEpisodes: [], // Add video episodes once received
  audioEpisodes: [], // Add audio episodes once received
  platforms: [
    { name: 'YouTube', icon: Video, desc: '4K Studio Episodes', href: 'https://youtube.com/@srisrihomzz' },
    { name: 'Spotify', icon: Headphones, desc: 'High-Fidelity Audio', href: 'https://open.spotify.com' },
  ],
}

export default function PodcastPage() {
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'video' | 'audio'

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'THE EPIC PODCAST — STOP FOLLOWING THE CROWD | Sri Sri Homzz'
  }, [])

  return (
    <div style={{ background: '#050B14', color: '#F7F8FA', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO SPOTLIGHT (NO FILTER SHOWCASE AT THE START)
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        padding: 'clamp(120px, 14vw, 160px) clamp(16px, 4vw, 60px) 50px',
        background: 'radial-gradient(ellipse at 50% 20%, rgba(226, 74, 59, 0.15) 0%, rgba(5, 11, 20, 1) 75%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        {/* Cinematic ambient glow lights */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(980px, 92vw)',
          height: '380px',
          background: 'radial-gradient(circle, rgba(249, 168, 25, 0.14) 0%, rgba(226, 74, 59, 0.08) 50%, transparent 80%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Top Status & Brand Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 28,
            flexWrap: 'wrap',
          }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 999,
                background: 'rgba(226, 74, 59, 0.15)',
                border: '1px solid rgba(226, 74, 59, 0.45)',
                color: '#FF7D70',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <span style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#FF4D3D',
                boxShadow: '0 0 10px #FF4D3D',
                display: 'inline-block',
              }} />
              <span>Honest Conversations from Real Estate</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 999,
                background: 'rgba(249, 168, 25, 0.12)',
                border: '1px solid rgba(249, 168, 25, 0.35)',
                color: '#FFC670',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <Sparkles size={13} color="#F9A819" />
              <span>By Sri Sri Homzz</span>
            </motion.div>
          </div>

          {/* MAIN PROMINENT DISPLAY OF THE NO FILTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              background: '#04070D',
              boxShadow: '0 30px 100px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(226, 74, 59, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
            }}
          >
            {/* The Image from the prompt */}
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
              <img
                src="/podcast-studio-clean.png"
                onError={(e) => {
                  e.currentTarget.src = '/podcast-studio.png'
                }}
                alt="NO FILTER — Real Estate Podcast Studio"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  maxHeight: 'min(580px, 70vh)',
                }}
              />

              {/* Seamless edge blending gradients */}
              <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(4, 7, 13, 0.65) 100%)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                pointerEvents: 'none',
                background: 'linear-gradient(to top, #04070D 0%, transparent 100%)',
              }} />

              {/* Cinematic Center Brand Title Overlay - THE EPIC PODCAST */}
              <div
                style={{
                  position: 'absolute',
                  top: '11%',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  zIndex: 2,
                  pointerEvents: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 16px',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: 960,
                  }}
                >
                  {/* Primary Regal Title (Strictly 1 Line) */}
                  <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(22px, 4.2vw, 52px)',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    margin: 0,
                    lineHeight: 1.15,
                    textShadow: '0 4px 30px rgba(0, 0, 0, 0.95), 0 0 45px rgba(249, 168, 25, 0.22)',
                    filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.9))',
                  }}>
                    THE EPIC PODCAST
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Bottom Studio Bar */}
            <div style={{
              background: '#04070D',
              padding: '20px clamp(20px, 4vw, 36px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(226, 74, 59, 0.15)',
                  border: '1px solid rgba(226, 74, 59, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Radio size={22} color="#FF6352" />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    THE EPIC PODCAST
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: 'rgba(247, 248, 250, 0.72)',
                    margin: '3px 0 0',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}>
                    STOP FOLLOWING THE CROWD.
                  </p>
                </div>
              </div>


            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: EPISODES & RELEASES (COMING SOON TABS)
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '70px clamp(16px, 4vw, 60px) 110px',
        maxWidth: 1100,
        margin: '0 auto',
      }}>

        {/* Section Header with Format Filter Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 44,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: 24,
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#F9A819',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
              marginBottom: 8,
            }}>
              <span>Series Releases</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '0.02em',
            }}>
              Episodes Catalog
            </h2>
          </div>

          {/* Tabs: All Releases | Video Episodes | Audio Podcast */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: 5,
            borderRadius: 14,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            gap: 6,
            flexWrap: 'wrap',
          }}>
            {[
              { id: 'all', label: 'All Releases', icon: Layers },
              { id: 'video', label: 'Video Episodes', icon: Video },
              { id: 'audio', label: 'Audio Podcast', icon: Headphones },
            ].map((tab) => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 20px',
                    borderRadius: 10,
                    border: 'none',
                    background: active ? '#F9A819' : 'transparent',
                    color: active ? '#002B42' : 'rgba(247, 248, 250, 0.75)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13.5,
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            DYNAMIC "COMING SOON" CONTENT PER TAB
        ═══════════════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">

          {/* TAB 1: ALL RELEASES -> COMING SOON */}
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'linear-gradient(180deg, rgba(16, 26, 42, 0.7) 0%, rgba(7, 13, 24, 0.9) 100%)',
                borderRadius: 24,
                border: '1px solid rgba(249, 168, 25, 0.22)',
                padding: 'clamp(44px, 6vw, 72px) clamp(24px, 5vw, 60px)',
                textAlign: 'center',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle background glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '140px',
                background: 'radial-gradient(ellipse at center, rgba(249, 168, 25, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Glowing Icon Badge */}
              <div style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                background: 'rgba(249, 168, 25, 0.12)',
                border: '1px solid rgba(249, 168, 25, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 0 30px rgba(249, 168, 25, 0.2)',
              }}>
                <Clock size={34} color="#F9A819" />
              </div>

              <div style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: 20,
                background: 'rgba(249, 168, 25, 0.1)',
                border: '1px solid rgba(249, 168, 25, 0.3)',
                color: '#FFC670',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Season 01 Premiere
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 16px',
                letterSpacing: '0.02em',
              }}>
                Episodes Coming Soon
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.75,
                color: 'rgba(247, 248, 250, 0.76)',
                maxWidth: 680,
                margin: '0 auto 36px',
              }}>
                We are producing unscripted, unfiltered conversations with leading builders, architects, structural visionaries, and real estate pioneers. All full episodes will be published here upon release.
              </p>

              {/* Distribution platforms preview */}
              <div style={{
                paddingTop: 28,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}>
                <span style={{
                  fontSize: 12,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(247, 248, 250, 0.55)',
                  fontWeight: 600,
                }}>
                  Streamable On:
                </span>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['YouTube 4K Video', 'Spotify Audio'].map((p) => (
                    <span
                      key={p}
                      style={{
                        padding: '7px 16px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 10,
                        fontSize: 12.5,
                        color: 'rgba(247, 248, 250, 0.85)',
                        fontWeight: 500,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: VIDEO EPISODES -> COMING SOON */}
          {activeTab === 'video' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'linear-gradient(180deg, rgba(16, 26, 42, 0.7) 0%, rgba(7, 13, 24, 0.9) 100%)',
                borderRadius: 24,
                border: '1px solid rgba(226, 74, 59, 0.3)',
                padding: 'clamp(44px, 6vw, 72px) clamp(24px, 5vw, 60px)',
                textAlign: 'center',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glowing Red-Coral Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '140px',
                background: 'radial-gradient(ellipse at center, rgba(226, 74, 59, 0.14) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Video Icon Badge */}
              <div style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                background: 'rgba(226, 74, 59, 0.14)',
                border: '1px solid rgba(226, 74, 59, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 0 30px rgba(226, 74, 59, 0.25)',
              }}>
                <Film size={34} color="#FF7D70" />
              </div>

              <div style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: 20,
                background: 'rgba(226, 74, 59, 0.12)',
                border: '1px solid rgba(226, 74, 59, 0.35)',
                color: '#FF7D70',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                4K Multi-Camera Visual Series
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 16px',
                letterSpacing: '0.02em',
              }}>
                Video Episodes Coming Soon
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.75,
                color: 'rgba(247, 248, 250, 0.76)',
                maxWidth: 680,
                margin: '0 auto 36px',
              }}>
                Our full 4K studio visual episodes are currently in filming and final post-production edits. Once received, the full video episodes will be embedded and viewable directly right here.
              </p>

              <div style={{
                paddingTop: 28,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                color: 'rgba(247, 248, 250, 0.7)',
                fontSize: 13,
              }}>
                <Video size={16} color="#FF7D70" />
                <span>Premiering on YouTube & Sri Sri Homzz NO FILTER Platform</span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: AUDIO PODCAST -> COMING SOON */}
          {activeTab === 'audio' && (
            <motion.div
              key="audio"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'linear-gradient(180deg, rgba(16, 26, 42, 0.7) 0%, rgba(7, 13, 24, 0.9) 100%)',
                borderRadius: 24,
                border: '1px solid rgba(249, 168, 25, 0.25)',
                padding: 'clamp(44px, 6vw, 72px) clamp(24px, 5vw, 60px)',
                textAlign: 'center',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glowing Amber Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '140px',
                background: 'radial-gradient(ellipse at center, rgba(249, 168, 25, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Audio Mic/Headphones Icon Badge */}
              <div style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                background: 'rgba(249, 168, 25, 0.12)',
                border: '1px solid rgba(249, 168, 25, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 0 30px rgba(249, 168, 25, 0.2)',
              }}>
                <Mic size={34} color="#F9A819" />
              </div>

              <div style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: 20,
                background: 'rgba(249, 168, 25, 0.1)',
                border: '1px solid rgba(249, 168, 25, 0.3)',
                color: '#FFC670',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Master Audio Recordings
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 16px',
                letterSpacing: '0.02em',
              }}>
                Audio Podcast Coming Soon
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.75,
                color: 'rgba(247, 248, 250, 0.76)',
                maxWidth: 680,
                margin: '0 auto 36px',
              }}>
                Studio-grade master audio recordings are currently being mastered for full lossless streaming. As soon as the sound files are ready, you will be able to play them directly here and on your favorite podcast apps.
              </p>

              <div style={{
                paddingTop: 28,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                color: 'rgba(247, 248, 250, 0.7)',
                fontSize: 13,
              }}>
                <Headphones size={16} color="#F9A819" />
                <span>Releasing on Spotify, YouTube & here</span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </section>

    </div>
  )
}
