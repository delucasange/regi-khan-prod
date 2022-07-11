//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '200px',
      'large': '12px',
    },
    fontFamily: {
      favorit: 'favorit',
      goodsans:'goodsans',
      times:'times',
    },
    extend: { }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
