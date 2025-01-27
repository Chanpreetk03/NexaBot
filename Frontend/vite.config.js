import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        'primary': '#178582',
        'secondary': '#0A1828',
        'tertiary': '#BFA181',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
