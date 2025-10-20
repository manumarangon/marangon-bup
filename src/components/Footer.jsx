import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-16 border-t pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Eucaliptus AR — Diseño y tecnología humana</div>
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-eucalyptus">Privacidad</a>
          <a href="#" className="text-gray-600 hover:text-eucalyptus">Términos</a>
        </div>
      </div>
    </footer>
  )
}