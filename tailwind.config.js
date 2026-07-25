/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        civic: {
          50: '#eef7f5',
          100: '#d7ebe6',
          200: '#afd7ce',
          300: '#7cb9ac',
          400: '#4d9788',
          500: '#32796c',
          600: '#275f56',
          700: '#214d47',
          800: '#1d403b',
          900: '#0b2b26'
        },
        amberx: '#f1b74a'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11,43,38,.12)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
