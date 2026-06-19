import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Gift } from 'lucide-react'

export default function EventDetails() {
  return (
    <section className="bg-[#f9f7f4] py-24 sm:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        {/* Section label + heading */}
        <div className="text-center mb-14">
          <p
            className="text-[#F94F00] text-xs uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Mark your calendar
          </p>
          <h2
            className="text-[#141414] leading-tight"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            The Details
          </h2>
        </div>

        {/* Venue — full-width featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#141414] rounded-3xl p-8 sm:p-10 mb-4 flex items-start gap-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#F94F00] flex items-center justify-center shrink-0 mt-0.5">
            <MapPin size={20} color="white" strokeWidth={1.8} />
          </div>
          <div>
            <p
              className="text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Venue
            </p>
            <p
              className="text-white leading-snug"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              }}
            >
              Light Nation Auditorium
            </p>
            <p
              className="text-white/50 text-sm mt-1"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Former Fun Factory, Osuntokun Avenue, Bodija
            </p>
          </div>
        </motion.div>

        {/* Date / Time / Cost — three compact cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: 'Date', value: 'Saturday', sub: 'July 18, 2026' },
            { icon: Clock, label: 'Time', value: '11:00 AM', sub: 'WAT' },
            { icon: Gift, label: 'Cost', value: 'Free', sub: 'No tickets needed' },
          ].map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-[#ece8e2] p-5 sm:p-6 flex flex-col"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F94F00]/10 flex items-center justify-center mb-4">
                <d.icon size={16} color="#F94F00" strokeWidth={1.8} />
              </div>
              <p
                className="text-[#141414]/35 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase mb-1"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {d.label}
              </p>
              <p
                className="text-[#141414] leading-tight"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                }}
              >
                {d.value}
              </p>
              <p
                className="text-[#141414]/40 text-xs mt-1"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {d.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
