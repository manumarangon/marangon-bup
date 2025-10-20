import React from 'react'

const quotes = [
  {name: 'Lucía Fernández', role: 'Directora de Producto', text: 'Eucaliptus nos ayudó a redefinir nuestra propuesta: impacto real en 3 meses.'},
  {name: 'Carlos Méndez', role: 'CTO', text: 'Un equipo práctico, con foco en entrega y calidad técnica.'},
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="mt-16 py-12">
      <h2 className="text-2xl font-bold text-eucalyptus">Testimonios</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {quotes.map((q)=> (
          <blockquote key={q.name} className="p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-800">“{q.text}”</p>
            <footer className="mt-3 text-sm text-gray-600">— {q.name}, {q.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}