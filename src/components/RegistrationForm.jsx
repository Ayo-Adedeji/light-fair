import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Copy, Check } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.885a.5.5 0 0 0 .611.61l6.101-1.474A11.941 11.941 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.034-1.387l-.36-.214-3.733.902.935-3.63-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
)

const InstagramBrandIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const XBrandIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

// Replace FORM_ID_PLACEHOLDER with your actual Formspree form ID after creating
// an account at formspree.io and connecting it to your email.
// Sign up free at formspree.io, create a new form, verify your email, then copy
// the form endpoint URL from your dashboard and paste it here.
// All submissions will appear in your Formspree dashboard and can be exported as CSV.
const FORMSPREE_URL = 'https://formspree.io/f/mvzneklo'

const EVENT_URL = typeof window !== 'undefined' ? window.location.href : 'https://unfairadvantage.lightnation.org'

function FieldError({ msg }) {
  if (!msg) return null
  return (
    <p className="text-red-500 text-xs mt-1" role="alert" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {msg}
    </p>
  )
}

function inputClass(hasError) {
  return `w-full px-4 py-3 rounded-xl border text-[#141414] text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-[#F94F00]/40 ${
    hasError ? 'border-red-400 bg-red-50' : 'border-[#e0e0e0] bg-white focus:border-[#F94F00]'
  }`
}

function labelClass() {
  return 'block text-[#141414] text-sm font-medium mb-1.5'
}

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = "We need your name so we know who's coming!"
  if (!fields.email.trim()) errors.email = 'Your email helps us send you the confirmation.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "That doesn't look like a valid email address."
  if (!fields.phone.trim()) errors.phone = 'A phone number helps us reach you if anything changes.'
  else if (!/^[\d\s+\-().]{7,}$/.test(fields.phone)) errors.phone = "That doesn't look like a valid phone number."
  if (!fields.occupation.trim()) errors.occupation = "Tell us a bit about what you do. We'd love to know."
  return errors
}

function SuccessState({ firstName }) {
  const [copied, setCopied] = useState(false)
  const shareText = `I just registered for The Unfair Advantage, a free AI event on July 18th. You should come. ${EVENT_URL}`

  const copyLink = () => {
    navigator.clipboard.writeText(EVENT_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank')
  }

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank')
  }

  // Replace href with actual Instagram profile link
  const shareInstagram = () => {
    window.open('https://instagram.com/', '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center py-8 px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        className="flex justify-center mb-6"
      >
        <CheckCircle size={64} color="#F94F00" strokeWidth={1.5} />
      </motion.div>

      <h3
        className="text-[#141414] text-2xl sm:text-3xl mb-2"
        style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700 }}
      >
        You're in, {firstName}! 🎉
      </h3>
      <p
        className="text-[#141414]/70 mb-2"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        See you Saturday, July 18th at 11:00 AM.
      </p>
      <p
        className="text-[#141414]/55 text-sm mb-8"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        A confirmation email is on its way.
      </p>

      <p
        className="text-[#141414]/60 text-sm font-semibold mb-4 uppercase tracking-wider"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        Share this with someone who needs to hear it
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        {/* WhatsApp — primary share */}
        <button
          onClick={shareWhatsApp}
          className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1db954] transition-colors min-h-[44px] cursor-pointer"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon />
          WhatsApp
        </button>

        <button
          onClick={shareTwitter}
          className="w-11 h-11 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#333] transition-colors cursor-pointer"
          aria-label="Share on X / Twitter"
        >
          <XBrandIcon />
        </button>

        <button
          onClick={shareInstagram}
          className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Share on Instagram"
        >
          <InstagramBrandIcon />
        </button>

        <button
          onClick={copyLink}
          className="w-11 h-11 rounded-full border border-[#e0e0e0] flex items-center justify-center hover:border-[#F94F00] transition-colors relative cursor-pointer"
          aria-label="Copy event link"
        >
          {copied ? (
            <Check size={18} color="#F94F00" strokeWidth={2.5} />
          ) : (
            <Copy size={18} color="#141414" strokeWidth={2} />
          )}
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#141414] text-white px-2 py-1 rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </motion.div>
  )
}

export default function RegistrationForm() {
  const [fields, setFields] = useState({
    name: '', email: '', phone: '', occupation: '', hearAbout: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [submitError, setSubmitError] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstKey = Object.keys(validationErrors)[0]
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }

    setSubmitting(true)
    setSubmitError(false)

    try {
      const formData = new FormData(e.target)
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitted(true)
        setFirstName(fields.name.split(' ')[0])
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const sharedLabelStyle = { fontFamily: "'Inter', system-ui, sans-serif" }
  const sharedInputStyle = { fontFamily: "'Inter', system-ui, sans-serif" }

  return (
    <section id="register" className="bg-[#F94F00] py-20 sm:py-28 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Secure Your Spot
          </h2>
          <p
            className="text-[#FFF7DC]/80 text-base"
            style={sharedLabelStyle}
          >
            Takes less than 60 seconds.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-7 sm:p-9">
          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessState key="success" firstName={firstName} />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                noValidate
                action={FORMSPREE_URL}
                method="POST"
              >
                {/* Honeypot spam protection */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden="true" />
                <input type="hidden" name="_subject" value="New Registration: The Unfair Advantage" />

                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="field-name" className={labelClass()} style={sharedLabelStyle}>
                      Full Name
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      type="text"
                      value={fields.name}
                      onChange={onChange}
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClass(!!errors.name)}
                      style={sharedInputStyle}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                    />
                    <FieldError msg={errors.name} />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="field-email" className={labelClass()} style={sharedLabelStyle}>
                      Email Address
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={onChange}
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass(!!errors.email)}
                      style={sharedInputStyle}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                    />
                    <FieldError msg={errors.email} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="field-phone" className={labelClass()} style={sharedLabelStyle}>
                      Phone Number
                    </label>
                    <input
                      id="field-phone"
                      name="phone"
                      type="tel"
                      value={fields.phone}
                      onChange={onChange}
                      required
                      autoComplete="tel"
                      placeholder="+234 000 0000 000"
                      className={inputClass(!!errors.phone)}
                      style={sharedInputStyle}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                    />
                    <FieldError msg={errors.phone} />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label htmlFor="field-occupation" className={labelClass()} style={sharedLabelStyle}>
                      Occupation / What do you do?
                    </label>
                    <input
                      id="field-occupation"
                      name="occupation"
                      type="text"
                      value={fields.occupation}
                      onChange={onChange}
                      required
                      placeholder="Teacher, student, business owner..."
                      className={inputClass(!!errors.occupation)}
                      style={sharedInputStyle}
                      aria-describedby={errors.occupation ? 'error-occupation' : undefined}
                    />
                    <FieldError msg={errors.occupation} />
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label htmlFor="field-hearAbout" className={labelClass()} style={sharedLabelStyle}>
                      How did you hear about this event?{' '}
                      <span className="text-[#141414]/40 font-normal">(optional)</span>
                    </label>
                    <select
                      id="field-hearAbout"
                      name="hearAbout"
                      value={fields.hearAbout}
                      onChange={onChange}
                      className={`${inputClass(false)} text-${fields.hearAbout ? '[#141414]' : '[#141414]/40'}`}
                      style={sharedInputStyle}
                    >
                      <option value="" disabled>Select one...</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Church Announcement">Church Announcement</option>
                      <option value="Social Media">Social Media</option>
                      <option value="A Friend">A Friend</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {submitError && (
                  <p
                    className="text-red-500 text-sm mt-4 text-center"
                    role="alert"
                    style={sharedLabelStyle}
                  >
                    Something went wrong. Please try again or reach out to us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-7 bg-[#F94F00] text-white font-bold text-base py-4 rounded-full hover:bg-[#d94300] transition-colors duration-200 min-h-[54px] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={sharedLabelStyle}
                >
                  {submitting ? 'Submitting...' : 'Secure My Spot'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
