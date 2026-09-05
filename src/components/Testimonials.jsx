import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { motion } from 'framer-motion'

const REVIEWS = [
  {
    quote: 'Working with Sri Sri Homz was a completely different experience from typical real estate consulting. The guidance was honest, transparent, and investment-focused from day one.',
    name: 'Rahul Mehra',
    type: 'Homebuyer, Noida',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1920&q=80',
  },
  {
    quote: 'What stood out most was the clarity and confidence they brought to the entire process. From selecting the right property to explaining future appreciation, everything was handled professionally.',
    name: 'Sandeep Kapoor',
    type: 'Investor, Delhi NCR',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
  },
  {
    quote: 'Their understanding of the luxury market and upcoming opportunities in Noida and Delhi NCR is exceptional. They genuinely care about long-term value creation.',
    name: 'Vikram Sethi',
    type: 'NRI Investor',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
  },
  {
    quote: 'We trusted Sri Sri Homz with our house construction project, and the execution was seamless. Timely updates, transparent costing, and quality work made the entire experience stress-free.',
    name: 'Priya Agarwal',
    type: 'Independent House Owner',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80',
  },
  {
    quote: 'Because of their developer relationships, we got access to opportunities that were not easily available in the market. Their advisory approach feels very genuine.',
    name: 'Amit Rana',
    type: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
  },
  {
    quote: 'This tagline truly reflects their work ethic — Built on Truth, Driven by Connection. Every interaction felt relationship-driven instead of sales-driven.',
    name: 'Deepa Nair',
    type: 'Long-Term Client',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  },
]

export default function Testimonials() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="testimonial-slider"
      >
        {REVIEWS.map((r, i) => (
          <SwiperSlide key={i}>
            <div
              className="testimonial-wrap"
              style={{
                position: 'relative',
                minHeight: 'clamp(560px, 82vh, 760px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `linear-gradient(180deg, rgba(0,43,66,0.55) 0%, rgba(0,43,66,0.62) 45%, rgba(0,43,66,0.88) 100%), url(${r.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Top-left heading */}
              <div style={{
                position: 'absolute',
                top: 'clamp(40px, 6vw, 72px)',
                left: 'clamp(24px, 6vw, 100px)',
                right: 'clamp(24px, 6vw, 100px)',
              }}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="section-label"
                  style={{ marginBottom: 22, color: '#FFC670' }}
                >
                  Client Testimonials
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  style={{
                    fontFamily: 'Source Serif 4, serif',
                    fontWeight: 600,
                    fontSize: 'clamp(30px, 4.2vw, 54px)',
                    lineHeight: 1.15,
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em',
                  }}
                >
                  What People Say<br />About Us
                </motion.h2>
              </div>

              {/* Centered quote */}
              <div style={{
                maxWidth: 780,
                margin: '0 auto',
                padding: '0 clamp(56px, 8vw, 120px)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 56, height: 56,
                  margin: '0 auto 28px',
                  borderRadius: '50% 50% 50% 4px',
                  background: 'var(--gold)',
                  transform: 'rotate(-45deg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                }}>
                  <span style={{
                    transform: 'rotate(45deg)',
                    fontFamily: 'Source Serif 4, serif',
                    fontWeight: 700,
                    fontSize: 26,
                    color: '#fff',
                    lineHeight: 1,
                    marginTop: -4,
                  }}>
                    &rdquo;
                  </span>
                </div>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(17px, 2vw, 22px)',
                  lineHeight: 1.65,
                  color: '#F7F8FA',
                  marginBottom: 26,
                }}>
                  {r.quote}
                </p>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 16,
                  color: 'rgba(247,248,250,0.55)',
                }}>
                  {r.name}
                  <span style={{ opacity: 0.6, fontWeight: 400 }}> — {r.type}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
