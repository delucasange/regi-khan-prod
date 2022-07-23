//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [
    './src/components/*.js',
    './src/pages/*.js',
    './src/pages/work/*.js',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'powder': '#FFE6FE',
      'energy': '#D0FF71',
      'agent': '#FFA800',
      'pastoral': '#058B3B',
      'page': '#FDFFE7',
      'color1':'#DCECEF',
      'color2':'#F7F1E5',
      'color3':'#D2C2E3',
      'lilac':'#D2C2E3',
      /*'black':'#363635',*/
      'black':'#000000',
      'paleorange':'#E68B3F',
      'energy':'#E7FA05',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '200px',
      'large': '12px',
    },
    fontFamily: {
      light: 'light',
      folio:'folio',
      times:'times',
    },
    extend: { 
      animation: {
        marquee: 'marquee 105s linear infinite',
        marquee2: 'marquee2 105s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
