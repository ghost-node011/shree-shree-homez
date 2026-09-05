import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram, Youtube, Facebook, Clock, Phone, Mail, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',       to: '/' },
  { label: 'Services',   to: '/services' },
  { label: 'About Us',   to: '/about' },
  { label: 'Our Team',   to: '/team' },
  { label: 'Contact Us', to: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy',          to: '/privacy-policy' },
  { label: 'Accessibility Statement', to: '/accessibility-statement' },
]

const SOCIALS = [
  { Icon: Instagram, href: 'https://instagram.com/srisrihomz', label: 'Instagram' },
  { Icon: Youtube,   href: 'https://youtube.com/@srisrihomz',  label: 'YouTube' },
  { Icon: Facebook,  href: 'https://facebook.com/srisrihomz',  label: 'Facebook' },
]

const CONTACT_INFO = [
  { Icon: Clock,  value: 'Monday - Saturday,\n10:00 AM - 07:30 PM' },
  { Icon: Phone,  value: '098100 12254', href: 'tel:+919810012254' },
  { Icon: Mail,   value: 'info@srisrihomz.com', href: 'mailto:info@srisrihomz.com' },
  { Icon: MapPin, value: 'B-24, Rampuri, Block B,\nSurya Nagar, Ghaziabad, UP 201011' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#002B42', borderTop: '1px solid rgba(249,168,25,0.15)' }}>
      <div style={{
        padding: '80px clamp(24px,6vw,120px) 56px',
        maxWidth: 1300, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr 1fr',
        gap: '48px',
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
            style={{ marginBottom: 20 }}
          >
            <img src="/logo-bg.png" alt="Sri Sri Homz" style={{ height: 68, width: 'auto', display: 'block', marginLeft: -8 }} />
          </motion.div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 14.5, fontWeight: 300,
            lineHeight: 1.8, color: 'rgba(247,248,250,0.5)', maxWidth: 300, marginBottom: 22,
          }}>
            Your trusted real estate partner in Delhi NCR, specializing in
            residential, commercial, and construction projects. Transparent
            service. End-to-end support.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#FFC670', marginBottom: 14,
          }}>
            Follow Us on Social Media
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-cursor
                aria-label={label}
                style={{ color: '#F9A819', display: 'flex', transition: 'opacity 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = 0.65}
                onMouseLeave={e => e.currentTarget.style.opacity = 1}
              >
                <Icon size={22} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#FFC670', marginBottom: 22,
          }}>
            Navigate
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} data-cursor
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 14.5, fontWeight: 500,
                    color: 'rgba(247,248,250,0.7)', textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F9A819'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,248,250,0.7)'}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {LEGAL_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} data-cursor
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 400,
                    color: 'rgba(247,248,250,0.45)', textDecoration: 'underline',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F9A819'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,248,250,0.45)'}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#FFC670', marginBottom: 22,
          }}>
            Contact Us
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {CONTACT_INFO.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <item.Icon size={17} color="#F9A819" strokeWidth={1.75} style={{ marginTop: 2, flexShrink: 0 }} />
                {item.href ? (
                  <a href={item.href} data-cursor style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                    color: 'rgba(247,248,250,0.7)', textDecoration: 'none', whiteSpace: 'pre-line',
                  }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400,
                    color: 'rgba(247,248,250,0.7)', lineHeight: 1.5, whiteSpace: 'pre-line',
                  }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(249,168,25,0.12)', padding: '22px clamp(24px,6vw,120px)' }}>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 300,
          color: 'rgba(247,248,250,0.4)', textAlign: 'center',
        }}>
          © {new Date().getFullYear()} by Sri Sri Homz.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
