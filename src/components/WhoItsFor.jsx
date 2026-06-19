import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Church, BookOpen, Palette, ClipboardList } from 'lucide-react'

const personas = [
  { icon: GraduationCap, role: 'Teachers', benefit: 'Create lesson plans and materials in half the time.' },
  { icon: Briefcase, role: 'Business Owners', benefit: 'Automate the busywork eating into your day.' },
  { icon: Church, role: 'Ministry Workers', benefit: 'Prepare sermons, content, and communications faster.' },
  { icon: BookOpen, role: 'Students', benefit: 'Study smarter and research with confidence.' },
  { icon: Palette, role: 'Creatives', benefit: 'Generate ideas and content without the burnout.' },
  { icon: ClipboardList, role: 'Administrators', benefit: 'Handle reports and admin work in a fraction of the time.' },
]

export default function WhoItsFor() {
  return (
    <section className="bg-[#141414] py-24 sm:py-32 px-4 sm:px-6">
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
            Who it's for
          </p>
          <h2
            className="text-white leading-tight"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            Built for People Like You
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {personas.map((p, i) => (
            <motion.div
              key={p.role}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              className="group bg-[#1c1c1c] hover:bg-[#222] border border-white/5 hover:border-[#F94F00]/20 rounded-2xl p-5 sm:p-6 transition-colors duration-300 cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F94F00]/10 flex items-center justify-center mb-4 group-hover:bg-[#F94F00]/20 transition-colors duration-300">
                <p.icon size={18} color="#F94F00" strokeWidth={1.8} />
              </div>
              <h3
                className="text-white mb-1.5"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
              >
                {p.role}
              </h3>
              <p
                className="text-white/45 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {p.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
