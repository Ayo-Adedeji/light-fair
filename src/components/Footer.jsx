import logoLight from '../assets/Logo-light.webp'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" fill="url(#ig-g)" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.6" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z" />
    <polygon fill="white" points="9.75,15.5 15.75,12 9.75,8.5" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] pt-16 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 pb-12 border-b border-white/[0.08]">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <img src={logoLight} alt="Light Nation" className="h-8 w-auto object-contain opacity-90" />
            <p className="text-white/35 text-sm text-center sm:text-left max-w-xs leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Organised by The Tech Community,{' '}
              <br className="hidden sm:block" />
              Light Nation, Ibadan
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {/* Replace href with actual Instagram link */}
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center" aria-label="Instagram">
              <InstagramIcon />
            </div>
            {/* Replace href with actual YouTube link */}
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center" aria-label="YouTube">
              <YouTubeIcon />
            </div>
            {/* Replace href with actual X/Twitter link */}
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50" aria-label="X / Twitter">
              <XIcon />
            </div>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-white/20 text-xs" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            © 2026 The Unfair Advantage
          </p>
        </div>
      </div>
    </footer>
  )
}