import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const SECTIONS = [
  {
    title: 'Our Commitment',
    body: 'Sri Sri Homz is committed to ensuring digital accessibility for people of all abilities. We continually work to improve the user experience for everyone and apply relevant accessibility standards.',
  },
  {
    title: 'Measures We Take',
    body: 'Our site is built with semantic structure, readable typography, and keyboard-navigable menus and forms, and we test key pages across common browsers and devices.',
  },
  {
    title: 'Feedback',
    body: 'If you encounter any accessibility barriers while using this website, please let us know so we can address them. We welcome your feedback at info@srisrihomz.com or 098100 12254.',
  },
]

export default function AccessibilityStatement() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Accessibility" accent="Statement" />

      <div style={{ background: '#F7F8FA', padding: '80px clamp(24px,6vw,120px) 120px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              style={{ marginBottom: 40 }}
            >
              <h2 style={{
                fontFamily: 'Source Serif 4, serif', fontSize: 24, fontWeight: 500,
                color: '#002B42', marginBottom: 12,
              }}>
                {s.title}
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300,
                lineHeight: 1.8, color: 'rgba(0,43,66,0.68)',
              }}>
                {s.body}
              </p>
            </motion.div>
          ))}
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
            color: '#5D7A93', marginTop: 32,
          }}>
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}
