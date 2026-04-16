'use client'

/* ────────────────────────────────────────────
   SVG Brand Logos — inline so we avoid
   external image fetches & get full CSS control
   ──────────────────────────────────────────── */

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.86 4.86 0 01-1-.15z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M15.088 4.372l-.688 4.48h-4.8l-.688-4.48h-4.8L6.64 8.852l-3.392 3.392 4.48.688v4.8l-4.48.688 3.392 3.392 3.392-3.392.688-4.48h4.8l.688 4.48 3.392 3.392 3.392-3.392-4.48-.688v-4.8l4.48-.688-3.392-3.392-3.392 3.392zm-1.584 7.632h-3.008v-3.008h3.008z" />
  </svg>
)

const MakeIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-4.17L7.12 17.21 5.71 15.8 9.59 11.5H5.5v-2h5.5v8zm7.5-6.5h-5.5v-2h4.17L13.29 5.12l1.41-1.41L18.59 7.6V3.5h2V11z" />
  </svg>
)

const GoHighLevelIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12.76 2.06a1.5 1.5 0 00-1.52 0L3.32 6.62a1.5 1.5 0 00-.76 1.3v9.16a1.5 1.5 0 00.76 1.3l7.92 4.56a1.5 1.5 0 001.52 0l7.92-4.56a1.5 1.5 0 00.76-1.3V7.92a1.5 1.5 0 00-.76-1.3L12.76 2.06z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <text x="12" y="14.5" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">n8n</text>
  </svg>
)

const VoiceflowIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 9.5l4 5 4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
  </svg>
)

/* Decorative dot separator */
const DotSeparator = () => (
  <div
    className="flex-shrink-0 mx-2"
    style={{
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      background: 'rgba(99, 102, 241, 0.4)',
    }}
  />
)

/* ──────────────── Component ──────────────── */

const techs = [
  { name: 'Instagram',   Icon: InstagramIcon   },
  { name: 'TikTok',      Icon: TikTokIcon      },
  { name: 'YouTube',     Icon: YouTubeIcon     },
  { name: 'WhatsApp',    Icon: WhatsAppIcon    },
  { name: 'Zapier',      Icon: ZapierIcon      },
  { name: 'Make.com',    Icon: MakeIcon        },
  { name: 'GoHighLevel', Icon: GoHighLevelIcon },
  { name: 'n8n',         Icon: N8nIcon         },
  { name: 'Voiceflow',   Icon: VoiceflowIcon   },
]

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '0', background: 'transparent' }}>
      {/* Top gradient line */}
      <div
        className="w-full"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 20%, rgba(168,85,247,0.5) 50%, rgba(99,102,241,0.5) 80%, transparent 100%)',
        }}
      />

      {/* Main strip */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(11,14,20,0.95) 0%, rgba(15,19,28,0.98) 50%, rgba(11,14,20,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          padding: '20px 0',
        }}
      >
        {/* Subtle ambient glow behind the strip */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            width: '120px',
            background: 'linear-gradient(90deg, rgba(11,14,20,1) 0%, transparent 100%)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            width: '120px',
            background: 'linear-gradient(270deg, rgba(11,14,20,1) 0%, transparent 100%)',
          }}
        />

        {/* Scrolling strip — tripled for seamless loop */}
        <div className="flex items-center tech-marquee-track">
          {[...techs, ...techs, ...techs].map((tech, idx) => (
            <div key={idx} className="flex items-center">
              <div
                className="tech-chip group flex-shrink-0 flex items-center gap-3 cursor-default select-none relative"
                style={{ padding: '8px 20px', borderRadius: '100px' }}
              >
                {/* Hover pill background */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.08) 100%)',
                    border: '1px solid rgba(99,102,241,0.25)',
                  }}
                />

                {/* Icon */}
                <div className="tech-icon relative z-10 transition-all duration-400" style={{ color: 'rgba(148,163,184,0.6)' }}>
                  <tech.Icon />
                </div>

                {/* Name */}
                <span
                  className="tech-name relative z-10 text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors duration-400"
                  style={{
                    color: 'rgba(148,163,184,0.5)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {tech.name}
                </span>
              </div>

              <DotSeparator />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="w-full"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 20%, rgba(168,85,247,0.5) 50%, rgba(99,102,241,0.5) 80%, transparent 100%)',
        }}
      />

      {/* ── Scoped Styles ── */}
      <style jsx>{`
        /* ---- Seamless marquee ---- */
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .tech-marquee-track {
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }

        /* ---- Chip idle: muted ---- */
        .tech-chip {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ---- Chip hover: reveal ---- */
        .tech-chip:hover {
          transform: scale(1.08);
        }

        /* Icon colour on hover */
        .tech-chip:hover .tech-icon {
          color: #818CF8 !important;
          filter: drop-shadow(0 0 8px rgba(129, 140, 248, 0.4));
        }

        /* Name colour on hover */
        .tech-chip:hover .tech-name {
          color: #E0E7FF !important;
        }
      `}</style>
    </section>
  )
}
