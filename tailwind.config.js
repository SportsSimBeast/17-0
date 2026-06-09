/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        charcoal: {
          DEFAULT: '#0a0a0a',
          light: '#141414',
          mid: '#1e1e1e',
        },
        'field-green': {
          DEFAULT: '#1a5c2e',
          bright: '#22c55e',
        },
        gold: {
          DEFAULT: '#d4af37',
          bright: '#f5d160',
        },
      },
      backgroundImage: {
        'field-stripes': 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(26,92,46,0.04) 60px, rgba(26,92,46,0.04) 120px)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'score-reveal': 'score-reveal 0.8s cubic-bezier(0.175,0.885,0.32,1.275) forwards',
      },
      keyframes: {
        ticker: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(212,175,55,0.6), 0 0 50px rgba(212,175,55,0.2)' },
        },
        'score-reveal': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
