import { Routes, Route, Navigate } from 'react-router-dom'

import ScrollDriver from './components/ScrollDriver'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import About from './pages/About'
import Consulting from './pages/Consulting'
import Experience from './pages/Experience'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollDriver />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
        {/* Anything else goes home rather than showing an error. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
