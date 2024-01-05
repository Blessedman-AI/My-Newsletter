/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      animation: {
        'fade-in-3': 'fade-in 3s ease-in-out forwards',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',

        title: 'title 3s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-in-3': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25rem',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },
          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
        'fade-bottom': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0%',
          },
          '30%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },
    },

    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '60px',
      8: '78px',
      9: '90px',
      10: '128px',
      11: '150px',
      12: '180px',
      13: '250px',
      14: '320px',
      15: '400px',
      16: '480px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
};
