import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #060D18 0%, #0A1628 100%)',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left — Photo frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'min(360px, 100%)' }}>
              {/* Decorative frame */}
              <div style={{
                position: 'absolute', top: -16, left: -16, right: 16, bottom: 16,
                border: '1px solid rgba(201,168,76,0.2)',
                pointerEvents: 'none',
              }} />

              {/* Photo placeholder */}
              <div style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(160deg, #0F2040 0%, #0A1628 100%)',
                border: '1px solid rgba(201,168,76,0.15)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 16, position: 'relative',
              }}>
                {/* Avatar silhouette */}
                <div style={{
                  width: 90, height: 90, borderRadius: '50%',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 36,
                }}>
                  👤
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 22, fontWeight: 500,
                    color: '#F5F0E8', marginBottom: 6,
                  }}>
                    Yashank Arora
                  </p>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.7)',
                  }}>
                    Founder, Sri Sri Homz
                  </p>
                </div>
              </div>

              {/* Bottom label */}
              <div style={{
                position: 'absolute', bottom: -20, right: -20,
                background: '#C9A84C',
                padding: '12px 20px',
              }}>
                <p style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#060D18',
                }}>
                  Delhi NCR
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-label"
              style={{ marginBottom: 24 }}
            >
              Founder's Message
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 400, lineHeight: 1.15,
                color: '#F5F0E8', marginBottom: 8,
              }}
            >
              A Message From
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 300, fontStyle: 'italic',
                color: '#C9A84C', marginBottom: 36,
              }}
            >
              Yashank Arora
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                width: 60, height: 1,
                background: 'linear-gradient(90deg, #C9A84C, transparent)',
                transformOrigin: 'left',
                marginBottom: 32,
              }}
            />

            {[
              'Real estate and construction are not just businesses for me — they are about helping people build a better future.',
              'I started Sri Sri Homz with the belief that people deserve honest guidance while making some of the biggest financial and emotional decisions of their lives.',
              'Our goal is not just to sell properties or construct buildings. Our goal is to create trust, deliver value, and help people build long-term wealth and meaningful spaces.',
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 16, fontWeight: 300,
                  lineHeight: 1.85,
                  color: 'rgba(245,240,232,0.62)',
                  marginBottom: 20,
                }}
              >
                {i === 0 ? <em>{para}</em> : para}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 20, fontStyle: 'italic',
                color: '#C9A84C', marginTop: 32,
                borderLeft: '2px solid rgba(201,168,76,0.4)',
                paddingLeft: 20,
              }}
            >
              "At Sri Sri Homz, every relationship matters."
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
