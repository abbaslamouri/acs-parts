import { Config } from 'tailwindcss'
export default <Config>{
  darkMode: 'class',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        secondary: {
          DEFAULT: '#334155',
          light: '#64748b',
          dark: '#0f172a',
        },
        link: {
          DEFAULT: '#c2410c',
          light: '#f97316',
          dark: '#7c2d12',
        },
      },
      container: {
        center: true,
        // padding: '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
