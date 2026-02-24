import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1A2D4A', dark: '#0F1C30', light: '#2C4A6E' },
        gold: { DEFAULT: '#C4892A', light: '#FFF3DC', border: '#E8C87A', dark: '#9E6E1E' },
        teal: { DEFAULT: '#2D6A8A', light: '#E8F4F8' },
        warm: { bg: '#FAFAF7', border: '#E8E3DC', card: '#FFFFFF' },
      },
    },
  },
  plugins: [],
}
export default config
