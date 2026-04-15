import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#0B0E14',
        'slate': '#1E293B',
        'indigo': '#6366F1',
        'violet': '#A855F7',
        'teal': '#2DD4BF',
        'signal': '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'glow-indigo': 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
        'glow-indigo-strong': 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
        'gradient-to-violet': 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
