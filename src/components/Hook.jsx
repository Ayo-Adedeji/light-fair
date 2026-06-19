import { motion } from 'framer-motion'

export default function Hook() {
  return (
    <section className="bg-[#FFF7DC] py-24 sm:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl mx-auto text-center"
      >
        <p
          className="text-[#F94F00] text-xs uppercase tracking-[0.2em] font-semibold mb-5"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Before you scroll
        </p>

        <h2
          className="text-[#141414] leading-[1.1] mb-8"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          }}
        >
          This Is Not a Tech Event
        </h2>

        <p
          className="text-[#141414]/70 text-lg sm:text-xl leading-relaxed"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 400 }}
        >
          You don't need to write code. You don't need to understand machine learning.
          You just need to know what's already in your hands, and how to use it.
          This is for the teacher, the trader, the student, the pastor, the parent.
          If you've ever felt like AI was moving too fast for you to keep up,{' '}
          <em
            className="text-[#141414] not-italic font-semibold"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            this is where you catch up.
          </em>
        </p>
      </motion.div>
    </section>
  )
}
