import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'

const REVIEWS = [
  {
    quote: 'Working with Sri Sri Homz was a completely different experience from typical real estate consulting. The guidance was honest, transparent, and investment-focused from day one.',
    name: 'Rahul M.',
    type: 'Homebuyer, Noida',
  },
  {
    quote: 'What stood out most was the clarity and confidence they brought to the entire process. From selecting the right property to explaining future appreciation, everything was handled professionally.',
    name: 'Sandeep K.',
    type: 'Investor, Delhi NCR',
  },
  {
    quote: 'Their understanding of the luxury market and upcoming opportunities in Noida and Delhi NCR is exceptional. They genuinely care about long-term value creation.',
    name: 'Vikram S.',
    type: 'NRI Investor',
  },
  {
    quote: 'We trusted Sri Sri Homz with our house construction project, and the execution was seamless. Timely updates, transparent costing, and quality work made the entire experience stress-free.',
    name: 'Priya A.',
    type: 'Independent House Owner',
  },
  {
    quote: 'Because of their developer relationships, we got access to opportunities that were not easily available in the market. Their advisory approach feels very genuine.',
    name: 'Amit R.',
    type: 'Real Estate Investor',
  },
  {
    quote: 'This tagline truly reflects their work ethic — Built on Truth, Driven by Connection. Every interaction felt relationship-driven instead of sales-driven.',
    name: 'Deepa N.',
    type: 'Long-Term Client',
  },
]

export default function Testimonials() {
  return (
    <div style={{
      background: '#0A1628',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background quote decoration */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        fontFamily: 'Caudex, serif',
        fontSize: '30vw', fontWeight: 700,
        color: 'rgba(201,168,76,0.025)',
        lineHeight: 1, pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.05em',
      }}>
        "
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24 }}
          >
            Client Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(34px, 4vw, 58px)',
              fontWeight: 400, color: '#F5F0E8',
            }}
          >
            What Our <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Clients Say</span>
          </motion.h2>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            style={{ paddingBottom: 56 }}
          >
            {REVIEWS.map((r, i) => (
              <SwiperSlide key={i}>
                <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '44px 36px',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                  minHeight: 280,
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                    e.currentTarget.style.background = 'rgba(201,168,76,0.03)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  {/* Quote mark */}
                  <div style={{
                    fontFamily: 'Caudex, serif',
                    fontSize: 56, lineHeight: 1,
                    color: '#C9A84C', opacity: 0.6,
                    marginBottom: 20,
                  }}>
                    "
                  </div>

                  <p style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 15, fontWeight: 300,
                    lineHeight: 1.78,
                    color: 'rgba(245,240,232,0.65)',
                    flex: 1, marginBottom: 32,
                    fontStyle: 'italic',
                  }}>
                    {r.quote}
                  </p>

                  {/* Divider */}
                  <div style={{ width: 36, height: 1, background: 'rgba(201,168,76,0.4)', marginBottom: 18 }} />

                  <p style={{
                    fontFamily: 'Caudex, serif',
                    fontSize: 18, fontWeight: 500,
                    color: '#F5F0E8', marginBottom: 4,
                  }}>
                    {r.name}
                  </p>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 11, fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.6)',
                  }}>
                    {r.type}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  )
}
