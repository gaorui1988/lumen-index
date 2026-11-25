/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0b0a',
        panel: '#111311',
        raised: '#171a17',
        line: '#232723',
        'line-strong': '#2f342f',
        bone: '#ecefe8',
        ash: '#9aa197',
        smoke: '#6b7268',
        acid: '#c6f432',
        'acid-dim': '#9fc426',
        'syntax-teal': '#7fb8a8',
        'syntax-sand': '#d8c08a',
      },
      fontFamily: {
        display: ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif'],
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
