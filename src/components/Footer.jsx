import { motion } from 'framer-motion'

const LINKS = {
  Company: [
    { label: 'About Us',      id: 'about' },
    { label: 'Our Services',  id: 'services' },
    { label: 'Why Choose Us', id: 'whyus' },
    { label: 'Achievements',  id: 'achievements' },
    { label: 'Founder',       id: 'founder' },
  ],
  Services: [
    { label: 'Luxury Apartments',   id: 'services' },
    { label: 'Builder Floors',      id: 'services' },
    { label: 'Investment Advisory', id: 'services' },
    { label: 'Construction',        id: 'services' },
    { label: 'Redevelopment',       id: 'services' },
  ],
  Contact: [
    { label: 'Book Consultation', id: 'contact' },
    { label: 'Send Enquiry',      id: 'contact' },
    { label: 'WhatsApp Us',       id: 'contact' },
  ],
}

function goTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background: '#030810', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
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
          <motion.img
            src="/logo-bg.png" alt="Sri Sri Homz"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ height: 64, objectFit: 'contain', marginBottom: 24 }}
          />
          <p style={{
            fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 300,
            lineHeight: 1.8, color: 'rgba(245,240,232,0.42)', maxWidth: 280, marginBottom: 28,
          }}>
            Luxury real estate & construction in Delhi NCR.
            Built on Truth. Driven by Connection.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['RERA ✓', 'HRERA ✓'].map(b => (
              <div key={b} style={{
                padding: '6px 14px',
                border: '1px solid rgba(201,168,76,0.22)',
                fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 700,
                letterSpacing: '0.2em', color: 'rgba(201,168,76,0.65)',
              }}>
                {b}
              </div>
            ))}
          </div>
        </div>

        {Object.entries(LINKS).map(([col, items]) => (
          <div key={col}>
            <p style={{
              fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#C9A84C', marginBottom: 24,
            }}>
              {col}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map(l => (
                <li key={l.label}>
                  <button onClick={() => goTo(l.id)} data-cursor
                    style={{
                      background: 'none', border: 'none', padding: 0,
                      fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 300,
                      color: 'rgba(245,240,232,0.45)', textAlign: 'left',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.45)'}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hr-gold" />

      <div style={{
        padding: '24px clamp(24px,6vw,120px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
        maxWidth: 1400, margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 300,
          color: 'rgba(245,240,232,0.28)', letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} Sri Sri Homz. All rights reserved.
        </p>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: 14,
          fontStyle: 'italic', color: 'rgba(201,168,76,0.4)',
        }}>
          Divine Home. Divine People.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
