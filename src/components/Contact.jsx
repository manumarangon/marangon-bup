import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-16 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold text-eucalyptus">Contacto</h2>
          <p className="mt-3 text-gray-700">Hablemos sobre tu proyecto. Proponemos un diagnóstico inicial sin costo para identificar oportunidades de valor.</p>

          <div className="mt-6 space-y-3 text-gray-700">
            <div><strong>Email:</strong> hola@eucalyptus.ar</div>
            <div><strong>Teléfono:</strong> +54 9 11 0000 0000</div>
            <div><strong>Ubicación:</strong> Buenos Aires, Argentina</div>
          </div>
        </div>
        <form className="bg-white p-6 rounded-lg shadow">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input className="mt-1 w-full border rounded px-3 py-2" placeholder="Tu nombre" />
          <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
          <input className="mt-1 w-full border rounded px-3 py-2" placeholder="tu@empresa.com" />
          <label className="block text-sm font-medium text-gray-700 mt-4">Mensaje</label>
          <textarea className="mt-1 w-full border rounded px-3 py-2" rows="4" placeholder="Cuéntanos sobre tu proyecto"></textarea>
          <div className="mt-4">
            <button type="button" className="w-full inline-flex justify-center px-4 py-2 bg-eucalyptus text-white rounded">Enviar consulta</button>
          </div>
        </form>
      </div>
    </section>
  )
}