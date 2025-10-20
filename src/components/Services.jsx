import React from 'react'

const services = [
  {title: 'Estrategia y producto', desc: 'Mapeamos oportunidades, validamos hipótesis y diseñamos la hoja de ruta de producto.'},
  {title: 'UX/UI y Diseño de Servicio', desc: 'Investigación, prototipos y diseños que conectan con usuarios reales.'},
  {title: 'Desarrollo a medida', desc: 'Plataformas web y móviles, APIs y arquitecturas escalables.'},
  {title: 'Data & ML Ops', desc: 'Pipelines, modelos y operaciones para llevar IA a producción.'},
]

export default function Services(){
  return (
    <section id="services" className="mt-16 py-12">
      <h2 className="text-2xl font-bold text-eucalyptus">Servicios</h2>
      <p className="mt-3 text-gray-700 max-w-2xl">Ofrecemos un servicio completo, desde la investigación hasta la entrega y el acompañamiento en producción.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s)=> (
          <article key={s.title} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-eucalyptus">{s.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}