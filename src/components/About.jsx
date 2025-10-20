import React from 'react'

export default function About(){
  return (
    <section id="about" className="mt-16 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-eucalyptus">Sobre Eucaliptus AR</h2>
          <p className="mt-4 text-gray-700">Somos un equipo multidisciplinario que fusiona diseño, datos y ética para crear soluciones digitales centradas en las personas. Nuestro enfoque se basa en investigación aplicada, prototipado rápido y despliegue responsable de tecnologías basadas en IA.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>Investigación y estrategia de producto</li>
            <li>Diseño UX/UI y diseño de servicio</li>
            <li>Desarrollo de software y plataformas con IA</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg">Nuestro enfoque</h3>
          <p className="mt-3 text-gray-600">Entendemos el contexto de cada organización y diseñamos soluciones que respetan la privacidad, la equidad y la transparencia.</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <strong>Human-centered</strong>
              <div className="text-sm text-gray-600">Diseñamos para personas</div>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <strong>Data-driven</strong>
              <div className="text-sm text-gray-600">Decisiones basadas en evidencia</div>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <strong>Ethical AI</strong>
              <div className="text-sm text-gray-600">IA responsable y explicable</div>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <strong>Scalable</strong>
              <div className="text-sm text-gray-600">Soluciones listas para crecer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}