import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Is this event really free?', a: 'Yes, completely free. No tickets, no hidden costs. Just bring yourself.' },
  { q: 'Do I need any technical knowledge to attend?', a: "None at all. This event is built specifically for people who don't see themselves as \"tech people.\"" },
  { q: 'What should I bring?', a: "Just your phone or laptop if you have one, and your curiosity. We'll provide the rest." },
  { q: 'Is this only for church members?', a: 'Not at all. Everyone is welcome. Bring a friend, a colleague, anyone curious about AI.' },
  { q: 'Will there be a recording or replay?', a: "We're working on it. Check back closer to the event date for updates." },
  { q: 'I registered. What happens next?', a: "You'll get a confirmation email immediately. We'll send a reminder closer to the date. Just show up!" },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#ece8e2] last:border-0">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-6 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F94F00] rounded-lg min-h-[56px] cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="text-[#141414] text-base sm:text-lg leading-snug"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="shrink-0 mt-0.5"
        >
          <ChevronDown size={18} color="#F94F00" strokeWidth={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p
              className="text-[#141414]/60 text-sm sm:text-base leading-relaxed pb-6 pr-8"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-14">
          <p
            className="text-[#F94F00] text-xs uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            FAQs
          </p>
          <h2
            className="text-[#141414] leading-tight"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            Questions? We've Got You
          </h2>
        </div>

        <div className="divide-y-0">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
