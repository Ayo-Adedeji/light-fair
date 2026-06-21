import { useEffect, useState } from 'react'
// LN Community Group logo — coloured version on scrolled bg, white version on dark/transparent bg
import logoColoured from '../assets/LN Community Logo Coloured.png'
import logoWhite from '../assets/LN Community Logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="The Unfair Advantage home" className="cursor-pointer">
          <img
            src={scrolled ? logoColoured : logoWhite}
            alt="LN Community"
            className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-200"
          />
        </a>

        <button
          onClick={scrollToForm}
          className="btn-sweep relative bg-[#F94F00] text-white text-sm font-semibold px-6 py-2.5 rounded-full min-h-[44px] whitespace-nowrap cursor-pointer tracking-wide"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Secure My Spot
        </button>
      </div>
    </header>
  )
}
