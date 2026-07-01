/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e1a',
          800: '#0d1221',
          700: '#111827',
          600: '#1a2235',
        },
        neon: {
          blue: '#00d4ff',
          green: '#00ff88',
          orange: '#ff6b00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-orange': '0 0 20px rgba(255, 107, 0, 0.3)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
