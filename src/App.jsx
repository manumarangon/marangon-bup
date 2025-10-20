import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import AI from './components/AI'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="font-sans">
      <Hero />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <About />
        <Services />
        <AI />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}