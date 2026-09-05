import { motion } from 'framer-motion'
import { Users, FileCheck2, HardHat, HeadphonesIcon, Megaphone } from 'lucide-react'
import Founder from '../components/Founder'
import PageHero from '../components/PageHero'

const DEPARTMENTS = [
  {
    Icon: Users,
    title: 'Sales & Advisory',
    desc: 'The client-facing team that understands your budget, goals, and timeline, and matches you to the right residential, commercial, or investment opportunity across Delhi NCR.',
  },
  {
    Icon: FileCheck2,
    title: 'Legal & Documentation',
    desc: 'Handles due diligence, RERA verification, agreements, and registration — so every transaction is transparent and legally sound from day one.',
  },
  {
    Icon: HardHat,
    title: 'Construction & Project Management',
    desc: 'Oversees on-ground execution for independent houses, builder floors, and redevelopment projects — tracking quality, timelines, and cost at every stage.',
  },
  {
    Icon: Megaphone,
    title: 'Marketing & Partnerships',
    desc: 'Builds and maintains our relationships with premier developers — SOBHA, Godrej, Prestige, and Civitech among them — to bring clients early access to the best opportunities.',
  },
  {
    Icon: HeadphonesIcon,
    title: 'Client Support',
    desc: 'Stays involved well after the deal closes or the keys are handed over, so you always have someone to call.',
  },
]

export default function Team() {
  return (
    <div>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind"
        accent="Sri Sri Homz"
        subtitle="A small, hands-on team spanning sales, legal, construction, and client support — every one of them working toward the same founding principle: honest guidance, first."
      />

      {/* Founder */}
      <Founder />

      {/* Departments grid */}
      <div style={{ background: '#F7F8FA', padding: '0 clamp(24px,6vw,120px) 130px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-label"
              style={{ justifyContent: 'center', marginBottom: 22 }}
            >
              Growing Every Day
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 }}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(30px, 3.5vw, 46px)',
                fontWeight: 400, color: '#002B42',
              }}
            >
              Teams <span style={{ fontStyle: 'italic', color: '#F9A819' }}>Behind Every Deal</span>
            </motion.h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {DEPARTMENTS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22,1,0.36,1] }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(249,168,25,0.22)',
                  padding: '36px 32px',
                }}
              >
                <div style={{
                  width: 50, height: 50, borderRadius: '50%',
                  background: 'rgba(249,168,25,0.08)',
                  border: '1px solid rgba(249,168,25,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22,
                }}>
                  <d.Icon size={21} color="#F9A819" strokeWidth={1.6} />
                </div>
                <h3 style={{ fontFamily: 'Source Serif 4, serif', fontSize: 21, fontWeight: 500, color: '#002B42', marginBottom: 12 }}>
                  {d.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: '#5D7A93' }}>
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
