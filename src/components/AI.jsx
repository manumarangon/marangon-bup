import React from 'react'

const items = [
  {title: 'Automatización inteligente', desc: 'Flujos automáticos que liberan tiempo y reducen errores operativos.'},
  {title: 'Modelos conversacionales', desc: 'Asistentes y chatbots que mejoran la experiencia de usuario.'},
  {title: 'Análisis predictivo', desc: 'Predicciones que informan decisiones estratégicas.'},
]

export default function AI(){
  return (
    <section id="ai" className="mt-16 py-12">
      <div className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-eucalyptus">Soluciones con IA</h2>
        <p className="mt-3 text-gray-700">Aplicamos inteligencia artificial de forma pragmática y responsable para resolver problemas concretos del negocio.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map(i=> (
            <div key={i.title} className="p-4 border rounded-lg">
              <h4 className="font-semibold">{i.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-4">
          <a href="#contact" className="px-5 py-3 rounded-md bg-eucalyptus text-white">Solicitar demo</a>
          <a href="#services" className="px-5 py-3 rounded-md border border-eucalyptus text-eucalyptus">Ver servicios</a>
        </div>
      </div>
    </section>
  )
}