import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import TeamPage from './pages/Team'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import AccessibilityStatementPage from './pages/AccessibilityStatement'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <BrowserRouter>
      <Preloader onDone={() => setLoaded(true)} />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease', background: '#060D18' }}>
        <ScrollToTop />
        <Cursor />
        <Navbar />
        <Chatbot />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatementPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
