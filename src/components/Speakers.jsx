import { motion } from 'framer-motion'
import speaker1 from '../assets/speaker1.jpeg'
import speaker2 from '../assets/speaker2.jpeg'
import speaker3 from '../assets/speaker3.jpeg'

const speakers = [
  {
    photo: speaker1,
    name: 'Israel Oladejo',
    credentials: 'FCSS',
    role: 'AI Engineer',
    company: 'Turing INC.',
    isFounder: false,
    objectPosition: 'center 8%',
    brightness: 1.02,
  },
  {
    photo: speaker2,
    name: 'Triumph Ogeh',
    credentials: null,
    role: 'Data Engineer',
    company: null,
    isFounder: false,
    objectPosition: 'center 8%',
    brightness: 1.02,
  },
  {
    photo: speaker3,
    name: 'Stephen Adeyemo',
    credentials: null,
    role: 'Founder',
    company: 'Hivvy INC.',
    isFounder: true,
    objectPosition: 'center 2%',
    brightness: 1.25,
  },
]

export default function Speakers() {
  return (
    <section className="bg-[#141414] py-24 sm:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#F94F00] text-xs uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            On the stage
          </p>
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            Meet the Speakers
          </h2>
          <p
            className="text-white/40 text-sm sm:text-base mt-4 max-w-md mx-auto"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Practitioners who live and breathe this stuff, here to break it down for everyone.
          </p>
        </div>

        {/* Speaker cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
              className="flex flex-col"
            >
              {/* Photo with cream/yellow bg — consistent crop across all speakers */}
              <div
                className="relative overflow-hidden rounded-2xl mb-4"
                style={{
                  aspectRatio: '4 / 5',
                  background: '#FFF7DC',
                }}
              >
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                  style={{
                    objectPosition: s.objectPosition,
                    filter: `contrast(1.05) saturate(0.9) brightness(${s.brightness})`,
                  }}
                  loading="lazy"
                />
              </div>

              {/* Info below photo */}
              <div className="text-center">
                <div className="flex items-baseline gap-2 mb-0.5 justify-center">
                  <h3
                    className="text-white leading-tight"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 700,
                      fontSize: '1.05rem',
                    }}
                  >
                    {s.name}
                  </h3>
                  {s.credentials && (
                    <span
                      className="text-[#F94F00] text-xs font-semibold shrink-0"
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      {s.credentials}
                    </span>
                  )}
                </div>

                {/* Role line */}
                <p
                  className="text-white/45 text-sm"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {s.isFounder && s.company
                    ? `Founder, ${s.company}`
                    : s.company
                    ? `${s.role}, ${s.company}`
                    : s.role}
                </p>
              </div>

              <div className="mt-4 h-px bg-white/[0.06]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
