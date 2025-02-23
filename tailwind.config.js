/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tupovyazbold: ['tupovyazbold', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],

      },
      colors: {
        green: {
          0: '#9eff00',
          10: '#8ee600',
        },
      }
    },
  },
  plugins: [],
}