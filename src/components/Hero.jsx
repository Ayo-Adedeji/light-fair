import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ScrambleText from './ScrambleText'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

// Tech event photography — warm, community-feeling
const IMAGE_1 = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80'
const IMAGE_2 = 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80'

// Countdown target: Saturday July 18 2026 11:00 AM (WAT = UTC+1)
const EVENT_DATE = new Date('2026-07-18T10:00:00Z')

function useCountdown() {
  const calc = () => {
    const diff = EVENT_DATE - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const days = Math.floor(diff / 86400000)
    const hours = Math.floor((diff % 86400000) / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)
    return { days, hours, minutes, seconds }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function CountUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[56px] sm:min-w-[72px]">
      <span
        className="text-white tabular-nums leading-none"
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 700,
          fontSize: 'clamp(2.4rem, 8vw, 3.75rem)',
        }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span
        className="text-white/45 text-[9px] sm:text-[11px] uppercase tracking-[0.18em] mt-2"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {label}
      </span>
    </div>
  )
}

function CountdownSeparator() {
  return (
    <span
      className="text-white/25 self-start"
      style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1, marginTop: '0.1em' }}
    >
      :
    </span>
  )
}

function SlidePanel({ src, direction, reduced }) {
  if (reduced) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <img src={src} alt="" className="w-full h-full object-cover" loading="eager" />
      </div>
    )
  }

  const startX = direction === 'left' ? '-3%' : '3%'
  const endX = direction === 'left' ? '0%' : '0%'

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 8,
        delay: direction === 'right' ? 8 : 0,
      }}
    >
      <motion.img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
        animate={{ scale: [1.05, 1] }}
        transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
      />
    </motion.div>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()
  const countdown = useCountdown()
  const [subVisible, setSubVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const t = setTimeout(() => setSubVisible(true), 1600)
    return () => clearTimeout(t)
  }, [reduced])

  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0e0e0e]">
      {/* Full-screen crossfading background images */}
      <div className="absolute inset-0">
        <SlidePanel src={IMAGE_1} direction="left" reduced={reduced} />
        <SlidePanel src={IMAGE_2} direction="right" reduced={reduced} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/70 via-[#0e0e0e]/55 to-[#0e0e0e]/80 z-10" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">

        {/* Date badge — distinct from countdown */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 text-white text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-10"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            letterSpacing: '0.12em',
            background: 'rgba(249, 79, 0, 0.25)',
            border: '1px solid rgba(249, 79, 0, 0.5)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
          Saturday, July 18 · 11:00 AM
        </motion.div>

        {/* Title — ONLY element with scramble */}
        <h1
          className="text-white leading-[1] tracking-tight mb-3"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 900, fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          {reduced ? (
            <>
              <span className="block">The <span className="text-white">Unfair</span></span>
              <span className="block text-[#F94F00]">Advantage</span>
            </>
          ) : (
            <>
              <span className="block">
                The{' '}
                <ScrambleText text="Unfair" className="text-white" delay={200} />
              </span>
              <span className="block text-[#F94F00]">
                <ScrambleText text="Advantage" delay={500} />
              </span>
            </>
          )}
        </h1>

        {/* Subtext under title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/50 text-base sm:text-lg italic mb-10 tracking-wide"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300 }}
        >
          AI for non-techies
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: subVisible ? 1 : 0, y: subVisible ? 0 : 12 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          onClick={scrollToForm}
          className="btn-sweep bg-[#F94F00] text-white font-semibold text-base sm:text-lg px-10 py-4 rounded-full min-h-[54px] cursor-pointer tracking-wide"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Secure My Spot
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="mt-14 flex justify-center"
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-9 border border-white/25 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-1.5 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Countdown — separate distinct element below hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: subVisible ? 1 : 0, y: subVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 w-full max-w-lg mx-auto px-4 pb-16"
      >
        <div className="rounded-2xl px-6 sm:px-10 py-7 sm:py-8" style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}>
          <p
            className="text-white/35 text-[10px] uppercase tracking-[0.2em] text-center mb-5"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Event starts in
          </p>
          <div className="flex items-start justify-center gap-2 sm:gap-4">
            <CountUnit value={countdown.days} label="Days" />
            <CountdownSeparator />
            <CountUnit value={countdown.hours} label="Hours" />
            <CountdownSeparator />
            <CountUnit value={countdown.minutes} label="Mins" />
            <CountdownSeparator />
            <CountUnit value={countdown.seconds} label="Secs" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
