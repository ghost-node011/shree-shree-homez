import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'When you reach out through our contact forms, phone, or WhatsApp, we may collect your name, phone number, email address, and details about the property or service you are enquiring about.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information you share solely to respond to your enquiry, provide consultations, and share relevant property or construction updates. We do not sell your personal information to third parties.',
  },
  {
    title: 'Data Sharing',
    body: 'Your details may be shared with developer or partner teams only where necessary to process a specific property enquiry you have made, and only with your knowledge.',
  },
  {
    title: 'Data Security',
    body: 'We take reasonable technical and organisational measures to protect your information from unauthorised access, alteration, or disclosure.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@srisrihomz.com.',
  },
  {
    title: 'Contact Us',
    body: 'For any questions about this Privacy Policy, write to us at info@srisrihomz.com or call 098100 12254.',
  },
]

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy" accent="Policy" />

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
