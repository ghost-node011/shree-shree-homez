import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: 'By using this website or engaging Sri Sri Homzz for real estate or construction services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.',
  },
  {
    title: 'Our Services',
    body: 'Sri Sri Homzz provides real estate advisory, buying and selling assistance, investment guidance, and construction and project management services across Delhi NCR. All property listings, pricing, and availability are subject to change without notice.',
  },
  {
    title: 'No Guarantee of Outcome',
    body: 'While we provide honest, research-backed guidance, we do not guarantee specific investment returns, property appreciation, project timelines, or transaction outcomes. Any figures shared (such as "500+ families guided") reflect our track record and are not a promise of future results.',
  },
  {
    title: 'Client Responsibilities',
    body: 'You are responsible for providing accurate information when engaging our services, for independently verifying property documents and legal status, and for seeking your own legal or financial advice where appropriate.',
  },
  {
    title: 'Fees & Payments',
    body: 'Any brokerage, advisory, or construction management fees will be communicated and agreed upon separately before work begins. We do not charge hidden fees.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website — including text, images, and branding — belongs to Sri Sri Homzz unless otherwise credited, and may not be reproduced without permission.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Sri Sri Homzz is not liable for indirect or consequential losses arising from the use of this website or from third-party developer, legal, or financial decisions made in connection with our advisory services.',
  },
  {
    title: 'Changes to These Terms',
    body: 'We may update these Terms & Conditions from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated terms.',
  },
  {
    title: 'Contact Us',
    body: 'For any questions about these Terms & Conditions, write to us at info@srisrihomzz.com or call 098100 12254.',
  },
]

export default function Terms() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms &" accent="Conditions" />

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
                fontFamily: 'var(--font-heading)', fontSize: 'var(--heading-card)', fontWeight: 700,
                letterSpacing: 'var(--spacing-heading-card)',
                color: '#002B42', marginBottom: 12,
              }}>
                {s.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', fontWeight: 400,
                lineHeight: 1.8, color: 'rgba(0,43,66,0.75)',
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
