import { motion } from 'framer-motion'
import { PenLine, Zap, Compass } from 'lucide-react'

const cards = [
  {
    icon: PenLine,
    iconBg: '#E0BC78',
    title: 'Write Faster, Better',
    text: 'How to write better and faster using AI, for emails, reports, and presentations.',
  },
  {
    icon: Zap,
    iconBg: '#F4A0A4',
    title: 'Automate the Boring Stuff',
    text: 'How to automate repetitive tasks without touching a single line of code.',
  },
  {
    icon: Compass,
    iconBg: '#9747FF',
    title: 'Think Smarter, Decide Faster',
    text: 'How to research, plan, and decide smarter with AI as your thinking partner.',
  },
]

export default function WhatYoullLearn() {
  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <p
            className="text-[#F94F00] text-xs uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            What you gain
          </p>
          <h2
            className="text-[#141414] leading-tight"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            What You'll Walk Away With
          </h2>
          <p
            className="text-[#141414]/45 text-sm sm:text-base mt-3"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Practical skills you can use from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.10)' }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0ece6] cursor-default"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: card.iconBg + '33' }}
              >
                <card.icon size={20} strokeWidth={1.8} style={{ color: card.iconBg === '#9747FF' ? '#9747FF' : '#141414' }} />
              </div>
              <h3
                className="text-[#141414] mb-3"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '1.2rem',
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[#141414]/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
