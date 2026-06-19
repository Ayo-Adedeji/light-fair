import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?'

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

export default function ScrambleText({ text, className, delay = 0, highlightWord }) {
  const reduced = useReducedMotion()
  const [displayed, setDisplayed] = useState(reduced ? text : '')
  const frameRef = useRef(null)

  useEffect(() => {
    if (reduced) {
      setDisplayed(text)
      return
    }

    let startTime = null
    const totalDuration = 1500
    const staggerPerChar = totalDuration / text.length

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp + delay
      const elapsed = timestamp - startTime
      if (elapsed < 0) {
        frameRef.current = requestAnimationFrame(tick)
        return
      }

      let result = ''
      let allDone = true
      for (let i = 0; i < text.length; i++) {
        const charDeadline = i * staggerPerChar + 400
        if (elapsed >= charDeadline) {
          result += text[i]
        } else {
          allDone = false
          result += elapsed > i * (staggerPerChar * 0.4)
            ? CHARS[Math.floor(Math.random() * CHARS.length)]
            : ''
        }
      }
      setDisplayed(result)
      if (!allDone) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setDisplayed(text)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [text, delay, reduced])

  if (!highlightWord) {
    return <span className={className}>{displayed}</span>
  }

  const lower = displayed.toLowerCase()
  const idx = lower.indexOf(highlightWord.toLowerCase())
  if (idx === -1) return <span className={className}>{displayed}</span>

  return (
    <span className={className}>
      {displayed.slice(0, idx)}
      <span className="text-[#F94F00]">{displayed.slice(idx, idx + highlightWord.length)}</span>
      {displayed.slice(idx + highlightWord.length)}
    </span>
  )
}
