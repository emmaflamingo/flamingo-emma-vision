import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-soft/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-soft to-flamingo rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦩</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-deep to-flamingo bg-clip-text text-transparent">
              Flamingo Emma
            </span>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-pink-pale rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`hidden md:flex gap-8 ${isOpen ? 'flex' : 'hidden'}`}>
            <a href="#vision" className="text-gray-700 hover:text-flamingo transition font-medium">Vision</a>
            <a href="#platforms" className="text-gray-700 hover:text-flamingo transition font-medium">Plateformes</a>
            <a href="#strategy" className="text-gray-700 hover:text-flamingo transition font-medium">Stratégie</a>
            <a href="#calendar" className="text-gray-700 hover:text-flamingo transition font-medium">Calendrier</a>
            <a href="#metrics" className="text-gray-700 hover:text-flamingo transition font-medium">Métriques</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
