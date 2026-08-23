import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LINKS = {
  Company: [
    { label: 'About Us',      to: '/about' },
    { label: 'Our Services',  to: '/services' },
    { label: 'Why Choose Us', to: '/#whyus' },
    { label: 'Achievements',  to: '/about#achievements' },
    { label: 'Founder',       to: '/about#founder' },
  ],
  Services: [
    { label: 'Luxury Apartments',   to: '/services' },
    { label: 'Builder Floors',      to: '/services' },
    { label: 'Investment Advisory', to: '/services' },
    { label: 'Construction',        to: '/services' },
    { label: 'Redevelopment',       to: '/services' },
  ],
}

const CONTACT_LINKS = [
  { label: 'Book Consultation', to: '/contact' },
  { label: 'Send Enquiry',      to: '/contact' },
  { label: 'WhatsApp Us',       href: 'https://wa.me/919810012254' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#14100D', borderTop: '1px solid rgba(196,120,86,0.12)' }}>
      <div style={{
        padding: '80px clamp(24px,6vw,120px) 60px',
        maxWidth: 1400, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '60px',
      }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: 24 }}
          >
            <span style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 30, fontWeight: 500, lineHeight: 1,
              color: '#F5EEE4',
            }}>
              Sri Sri <span style={{ fontStyle: 'italic', color: '#C47856' }}>Homz</span>
            </span>
          </motion.div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
            lineHeight: 1.8, color: 'rgba(245,238,228,0.45)', maxWidth: 280, marginBottom: 28,
          }}>
            Luxury real estate & construction in Delhi NCR.
            Built on Truth. Driven by Connection.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['RERA ✓', 'HRERA ✓'].map(b => (
              <div key={b} style={{
                padding: '6px 14px',
                border: '1px solid rgba(196,120,86,0.22)',
                fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 700,
                letterSpacing: '0.2em', color: 'rgba(196,120,86,0.65)',
              }}>
                {b}
              </div>
            ))}
          </div>
        </div>

        {Object.entries(LINKS).map(([col, items]) => (
          <div key={col}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#C47856', marginBottom: 24,
            }}>
              {col}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map(l => (
                <li key={l.label}>
                  <Link to={l.to} data-cursor
                    style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                      color: 'rgba(245,238,228,0.45)', textAlign: 'left',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,238,228,0.45)'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#C47856', marginBottom: 24,
          }}>
            Contact
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CONTACT_LINKS.map(l => (
              <li key={l.label}>
                {l.href ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" data-cursor
                    style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                      color: 'rgba(245,238,228,0.45)', textAlign: 'left',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,238,228,0.45)'}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link to={l.to} data-cursor
                    style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                      color: 'rgba(245,238,228,0.45)', textAlign: 'left',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,238,228,0.45)'}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hr-gold" />

      <div style={{
        padding: '24px clamp(24px,6vw,120px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 300,
          color: 'rgba(245,238,228,0.28)', letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} Sri Sri Homz. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
