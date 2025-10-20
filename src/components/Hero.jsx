import React from 'react'
import Logo from '../assets/logo.svg'

export default function Hero(){
  return (
    <header className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <img src={Logo} alt="Eucaliptus AR" className="h-12 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-eucalyptus leading-tight">Diseñamos productos y servicios con inteligencia humana y artificial</h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl">Acompañamos organizaciones en la transformación digital: estrategia, diseño de producto, desarrollo e integración de soluciones con IA que impactan en las personas y en el negocio.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-eucalyptus text-white font-medium shadow hover:opacity-95">Contactanos</a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-eucalyptus text-eucalyptus font-medium bg-white">Conocé más</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl shadow-lg overflow-hidden bg-white card-bg flex items-center justify-center">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-eucalyptus">Historias de transformación</h3>
              <p className="mt-3 text-gray-600">Proyectos que combinan investigación, diseño y tecnología para resultados medibles y sostenibles.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}