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
  { label: 'Terms & Conditions',      to: '/terms-and-conditions' },
  { label: 'Accessibility Statement', to: '/accessibility-statement' },
]

const SOCIALS = [
  { Icon: Instagram, href: 'https://instagram.com/srisrihomz', label: 'Instagram' },
  { Icon: Youtube,   href: 'https://youtube.com/@srisrihomz',  label: 'YouTube' },
  { Icon: Facebook,  href: 'https://facebook.com/srisrihomz',  label: 'Facebook' },
]

const CONTACT_INFO = [
  { Icon: Clock,  value: 'Monday - Saturday,\n10:00 AM - 08:00 PM' },
  { Icon: Phone,  value: '098100 12254', href: 'tel:+919810012254' },
  { Icon: Mail,   value: 'info@srisrihomz.com', href: 'mailto:info@srisrihomz.com' },
  { Icon: MapPin, value: 'B-24, Block B,\nSurya Nagar, Ghaziabad, UP 201011' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#002B42', borderTop: '1px solid rgba(249,168,25,0.2)' }}>
      {/* ─── Part 1: Brand & Social Media Top Section ─── */}
      <div
        style={{
          borderBottom: '1px solid rgba(249,168,25,0.14)',
          padding: '48px clamp(24px, 5vw, 64px)',
          background: 'rgba(0,18,30,0.25)',
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 28,
          }}
          className="footer-top-row"
        >
          {/* Brand & Bio */}
          <div style={{ maxWidth: 540 }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 14 }}
            >
              <img
                src="/logo-bg.png"
                alt="Sri Sri Homz"
                style={{ height: 58, width: 'auto', display: 'block', marginLeft: -6 }}
              />
            </motion.div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body-size)',
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(247,248,250,0.72)',
                margin: 0,
              }}
            >
              Your trusted real estate partner in Delhi NCR, specializing in
              residential, commercial, and construction projects. Transparent
              service. End-to-end support.
            </p>
          </div>

          {/* Follow Us on Social Media */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFC670',
                margin: '0 0 12px 0',
              }}
            >
              Follow Us on Social Media
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  aria-label={label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'rgba(249,168,25,0.08)',
                    border: '1px solid rgba(249,168,25,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F9A819',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(249,168,25,0.2)'
                    e.currentTarget.style.borderColor = '#F9A819'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(249,168,25,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(249,168,25,0.25)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Part 2: Middle Navigation & Contact Directory Section ─── */}
      <div
        style={{
          padding: '52px clamp(24px, 5vw, 64px) 56px',
          borderBottom: '1px solid rgba(249,168,25,0.14)',
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 'clamp(36px, 6vw, 72px)',
          }}
          className="footer-middle-grid"
        >
          {/* Sub-Part A: Navigate */}
          <div
            style={{
              paddingRight: 'clamp(20px, 4vw, 48px)',
              borderRight: '1px solid rgba(249,168,25,0.12)',
            }}
            className="footer-nav-panel"
          >
            <div style={{ marginBottom: 18 }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#FFC670',
                  margin: 0,
                }}
              >
                Navigate
              </p>
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: '#F9A819',
                  marginTop: 8,
                  borderRadius: 1,
                }}
              />
            </div>

            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(110px, 1fr))',
                gap: '12px 18px',
                padding: 0,
                margin: 0,
              }}
              className="footer-nav-list"
            >
              {NAV_LINKS.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-cursor
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-nav)',
                      fontWeight: 500,
                      letterSpacing: 'var(--spacing-nav-btn)',
                      textTransform: 'uppercase',
                      color: 'rgba(247,248,250,0.75)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#F9A819'
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(247,248,250,0.72)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Part B: Contact Us */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#FFC670',
                  margin: 0,
                }}
              >
                Contact Us
              </p>
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: '#F9A819',
                  marginTop: 8,
                  borderRadius: 1,
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '18px 28px',
              }}
            >
              {CONTACT_INFO.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: 'rgba(249,168,25,0.08)',
                      border: '1px solid rgba(249,168,25,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <item.Icon size={16} color="#F9A819" strokeWidth={1.8} />
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      data-cursor
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 13.5,
                        fontWeight: 400,
                        color: 'rgba(247,248,250,0.75)',
                        textDecoration: 'none',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.5,
                        transition: 'color 0.25s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F9A819')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,248,250,0.75)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 13.5,
                        fontWeight: 400,
                        color: 'rgba(247,248,250,0.75)',
                        lineHeight: 1.55,
                        whiteSpace: 'pre-line',
                        margin: 0,
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Part 3: Bottom Legal & Copyright Utility Bar ─── */}
      <div
        style={{
          padding: '22px clamp(24px, 5vw, 64px)',
          background: 'rgba(0,18,30,0.5)',
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
          className="footer-bottom-bar"
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 300,
              color: 'rgba(247,248,250,0.5)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} by Sri Sri Homz.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(12px, 2vw, 22px)',
            }}
          >
            {LEGAL_LINKS.map((l, idx) => (
              <span key={l.to} style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                {idx > 0 && (
                  <span style={{ color: 'rgba(249,168,25,0.25)', fontSize: 10 }}>•</span>
                )}
                <Link
                  to={l.to}
                  data-cursor
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 12.5,
                    fontWeight: 400,
                    color: 'rgba(247,248,250,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F9A819')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,248,250,0.5)')}
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-middle-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-nav-panel {
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(249,168,25,0.12) !important;
            padding-bottom: 28px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-top-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .footer-nav-list {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  )
}
