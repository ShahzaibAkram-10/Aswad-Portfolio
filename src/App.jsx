import React from 'react'
import Hero from './pages/hero/Hero'
import Intro from './pages/intro/Intro'
import Skills from './pages/skills/Skills'
import Intro2 from './pages/intro/Intro2'
import CertificatesPage from './pages/certificates/CertificatesPage'
import Work from './pages/work/Work'
import About from './pages/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Intro2 />
      <Skills />
      <CertificatesPage />
      <Work />
      <About />
      <Footer />
    </div>
  )
}

export default App