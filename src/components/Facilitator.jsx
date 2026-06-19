import { motion } from 'framer-motion'
import { User } from 'lucide-react'

// Replace with actual facilitator data
const facilitators = [
  {
    photo: null,           // Replace with actual facilitator photo URL
    name: 'Facilitator Name',        // Replace with actual facilitator name
    title: 'AI Educator & Tech Community Lead',
    bio: "Passionate about making AI accessible to everyone, not just developers. This facilitator has spent years helping non-technical people use AI tools to work smarter and move faster. Expect clarity, energy, and zero jargon.", // Replace with actual facilitator bio
  },
]

function FacilitatorCard({ facilitator, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
      className="bg-white rounded-3xl p-8 sm:p-10 border border-[#ece8e2] flex flex-col items-center text-center max-w-sm mx-auto"
    >
      {facilitator.photo ? (
        <img
          src={facilitator.photo}
          alt={facilitator.name}
          className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-[#F94F00]/10"
          loading="lazy"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F94F00]/15 to-[#E0BC78]/30 flex items-center justify-center mb-6">
          <User size={34} color="#F94F00" strokeWidth={1.4} />
        </div>
      )}

      <h3
        className="text-[#141414] mb-1"
        style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '1.25rem' }}
      >
        {facilitator.name}
      </h3>
      <p
        className="text-[#F94F00] text-xs font-semibold uppercase tracking-widest mb-5"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {facilitator.title}
      </p>
      <p
        className="text-[#141414]/60 text-sm leading-relaxed"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {facilitator.bio}
      </p>
    </motion.div>
  )
}

export default function Facilitator() {
  return (
    <section className="bg-[#FFF7DC] py-24 sm:py-32 px-4 sm:px-6">
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
            Your guide
          </p>
          <h2
            className="text-[#141414] leading-tight"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            Meet Your Guide
          </h2>
        </div>

        {/* Grid supports 1–3 facilitators — add more objects to the array above */}
        <div className={`grid gap-6 justify-center ${
          facilitators.length === 1
            ? 'grid-cols-1 max-w-sm mx-auto'
            : facilitators.length === 2
            ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
            : 'grid-cols-1 sm:grid-cols-3'
        }`}>
          {facilitators.map((f, i) => (
            <FacilitatorCard key={f.name} facilitator={f} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
