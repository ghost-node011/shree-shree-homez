import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ServiceCard from './ServiceCard'

function useIsMobile() {
  const [mobile, setMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return mobile
}

export const REAL_ESTATE = [
  {
    title: 'Luxury Apartments',
    desc: 'Premium apartments & builder floors in prime Delhi NCR locations with world-class amenities.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tag: 'Residential',
  },
  {
    title: 'Builder Floors',
    desc: 'Exclusive independent builder floor developments with bespoke finishes and private terraces.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    tag: 'Premium',
  },
  {
    title: 'Commercial Real Estate',
    desc: 'High-yield commercial properties strategically located for long-term investment returns.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tag: 'Commercial',
  },
  {
    title: 'Investment Advisory',
    desc: 'Data-driven real estate investment consulting to identify opportunities with real appreciation.',
    img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80',
    tag: 'Advisory',
  },
  {
    title: 'Distress & Off-Market',
    desc: 'Exclusive access to below-market and off-market deals not available publicly.',
    img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    tag: 'Exclusive',
  },
  {
    title: 'NRI Investment',
    desc: 'Specialised end-to-end advisory for NRI investors entering the India premium real estate market.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    tag: 'Global',
  },
  {
    title: 'Land Opportunities',
    desc: 'Strategic land acquisition for redevelopment projects and long-term appreciation.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    tag: 'Land',
  },
  {
    title: 'Property Advisory',
    desc: 'End-to-end consultation from site selection through negotiation to registration.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tag: 'Consulting',
  },
]

export const CONSTRUCTION = [
  {
    title: 'Independent House',
    desc: 'Turnkey construction of your dream independent home — foundation to final finish.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tag: 'Turnkey',
  },
  {
    title: 'Builder Floor Dev.',
    desc: 'Full-cycle builder floor development with premium finishes and structural excellence.',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    tag: 'Development',
  },
  {
    title: 'Redevelopment',
    desc: 'Strategic redevelopment of older properties, maximising land value and modern living.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tag: 'Redevelop',
  },
  {
    title: 'Interior & Space',
    desc: 'Coordinated interior design and space planning — from concept to curated completion.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    tag: 'Interior',
  },
  {
    title: 'Project Management',
    desc: 'Expert supervision ensuring quality, timelines, and full cost transparency at every stage.',
    img: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=800&q=80',
    tag: 'Management',
  },
  {
    title: 'Turnkey Solutions',
    desc: 'Single-point accountability — we handle everything from approvals to final handover.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    tag: 'Complete',
  },
]

const TABS = [
  { id: 'realestate',  label: 'Real Estate',  count: '08', data: REAL_ESTATE },
  { id: 'construction', label: 'Construction', count: '06', data: CONSTRUCTION },
]

export default function Services() {
  const [active, setActive] = useState('realestate')
  const scrollRef = useRef(null)
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const current = TABS.find(t => t.id === active)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
    }
  }

  return (
    <div style={{
      background: '#002B42',
      paddingTop: 120, paddingBottom: 80,
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="hr-gold" />
      <div style={{ height: 80 }} />

      {/* ── Header row ── */}
      <div style={{
        padding: '0 clamp(24px,6vw,100px)',
        maxWidth: 1400, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 40, alignItems: 'flex-end',
        marginBottom: 56,
      }}
        className="services-header"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ marginBottom: 20 }}
          >
            What We Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.08 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(48px, 6vw, 90px)',
              fontWeight: 400, lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: '#F7F8FA', marginBottom: 0,
            }}
          >
            Real Estate<br />
            <span style={{ fontStyle: 'italic', color: '#F9A819' }}>&amp; Construction</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="services-arrows"
          style={{ maxWidth: 340 }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 15, fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(247,248,250,0.48)',
            marginBottom: 24,
          }}>
            From finding the perfect investment to building the right structure — end-to-end solutions under one trusted name.
          </p>
          {/* Scroll arrows */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['←', '→'].map((arrow, i) => (
              <button
                key={i}
                onClick={() => scroll(i === 0 ? -1 : 1)}
                data-cursor
                style={{
                  width: 48, height: 48,
                  border: '1px solid rgba(249,168,25,0.3)',
                  background: 'transparent',
                  color: '#F9A819', fontSize: 18,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F9A819'; e.currentTarget.style.color = '#002B42' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F9A819' }}
              >
                {arrow}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Tabs ── */}
      <div style={{
        padding: '0 clamp(24px,6vw,100px)',
        maxWidth: 1400, margin: '0 auto',
        display: 'flex', gap: 0,
        borderBottom: '1px solid rgba(249,168,25,0.1)',
        marginBottom: 48,
      }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            data-cursor
            style={{
              background: 'none', border: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '14px 0', marginRight: 40,
              color: active === tab.id ? '#F9A819' : 'rgba(247,248,250,0.3)',
              borderBottom: active === tab.id ? '1px solid #F9A819' : '1px solid transparent',
              marginBottom: -1,
              transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            {tab.label}
            <span style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 13, fontStyle: 'italic',
              color: active === tab.id ? 'rgba(249,168,25,0.6)' : 'rgba(247,248,250,0.15)',
            }}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* ── Cards — Swiper on mobile, horizontal scroll on desktop ── */}
      {isMobile ? (
        <>
          <style>{`
            .services-swiper { padding: 0 24px 48px !important; }
            .services-swiper .swiper-pagination { bottom: 8px !important; }
            .services-swiper .swiper-slide { height: auto; }
          `}</style>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={16}
            slidesPerView={1.15}
            grabCursor={true}
            className="services-swiper"
          >
            {current.data.map((item, i) => (
              <SwiperSlide key={`${active}-${i}`}>
                <ServiceCard item={item} index={i} fullWidth />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div
                onClick={() => navigate('/contact')}
                style={{
                  aspectRatio: '3/4',
                  background: '#F9A819',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-start', justifyContent: 'flex-end',
                  padding: '32px 28px',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: '#002B42',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 24,
                }}>↗</div>
                <p style={{
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: 26, fontWeight: 500,
                  color: '#002B42', lineHeight: 1.2,
                }}>Book a Free Consultation</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      ) : (
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          paddingLeft: 'clamp(24px,6vw,100px)',
          paddingRight: 'clamp(24px,6vw,100px)',
          paddingBottom: 8,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {current.data.map((item, i) => (
          <ServiceCard key={`${active}-${i}`} item={item} index={i} />
        ))}
        {/* CTA card at end */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          data-cursor
          onClick={() => navigate('/contact')}
          style={{
            flexShrink: 0,
            width: 'clamp(200px, 18vw, 260px)',
            aspectRatio: '3/4',
            background: '#F9A819',
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', justifyContent: 'flex-end',
            padding: '32px 28px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          whileHover={{ backgroundColor: '#FFC670' }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: '#002B42',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, marginBottom: 24,
          }}>
            ↗
          </div>
          <p style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 26, fontWeight: 500,
            color: '#002B42', lineHeight: 1.2,
          }}>
            Book a Free Consultation
          </p>
        </motion.div>
      </div>
      )}
    </div>
  )
}
