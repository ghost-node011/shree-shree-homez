import Contact from '../components/Contact'
import PageHero from '../components/PageHero'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're Here to"
        accent="Help"
        subtitle="Whether you're buying, building, or investing — reach out and our team will be in touch shortly."
      />
      <Contact />
    </>
  )
}
