import { motion } from 'framer-motion'
import { Flag, Users2, Award, TrendingUp } from 'lucide-react'
import About from '../components/About'
import Founder from '../components/Founder'
import Achievements from '../components/Achievements'

const JOURNEY = [
  {
    icon: Flag,
    title: 'The Beginning',
    desc: 'Yashank Arora founded Sri Sri Homz on a simple belief: people deserve honest guidance while making the biggest financial decisions of their lives.',
  },
  {
    icon: Users2,
    title: 'Building Trust',
    desc: 'Word of mouth grew as families experienced transparent, pressure-free advice — the foundation that would define every relationship since.',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    desc: 'Premier developers — SOBHA, Godrej, Prestige, Civitech — began recognizing Sri Sri Homz for performance, partnership, and trust.',
  },
  {
    icon: TrendingUp,
    title: 'Where We Are Today',
    desc: '500+ families guided, 250+ properties transacted, and 15+ industry recognitions — with the same founding principle intact.',
  },
]

function OurJourney() {
  return (
    <div style={{
      background: '#F5EEE4',
      padding: '110px clamp(24px,6vw,120px)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24 }}
          >
            Our Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              fontWeight: 400, color: '#14100D',
            }}
          >
            From Vision to <span style={{ fontStyle: 'italic', color: '#C47856' }}>Trusted Name</span>
          </motion.h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: 28, left: 28, right: 28,
            height: 1, background: 'rgba(196,120,86,0.25)',
            display: 'none',
          }} className="journey-line" />

          <div className="journey-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }}>
            {JOURNEY.map((j, i) => {
              const Icon = j.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22,1,0.36,1] }}
                  style={{ position: 'relative', textAlign: 'center' }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: '#F5EEE4',
                    border: '1px solid rgba(196,120,86,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 22px', position: 'relative', zIndex: 1,
                  }}>
                    <Icon size={22} color="#C47856" strokeWidth={1.75} />
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'rgba(196,120,86,0.7)', marginBottom: 8,
                  }}>
                    Step {i + 1}
                  </p>
                  <h3 style={{
                    fontFamily: 'Source Serif 4, serif',
                    fontSize: 20, fontWeight: 500,
                    color: '#14100D', marginBottom: 10,
                  }}>
                    {j.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13.5, fontWeight: 300,
                    lineHeight: 1.7, color: '#8C7F72',
                  }}>
                    {j.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) { .journey-line { display: block !important; } }
        @media (max-width: 760px) { .journey-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .journey-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <About />
      <OurJourney />
      <div id="founder"><Founder /></div>
      <div id="achievements"><Achievements /></div>
    </>
  )
}
