import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Platforms from './components/Platforms'
import Strategy from './components/Strategy'
import Calendar from './components/Calendar'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-light via-white to-pink-pale">
      <Header />
      <Hero />
      <Vision />
      <Platforms />
      <Strategy />
      <Calendar />
      <Metrics />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
