/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '45%': '45%',
        '32%': '32%'
      },
      fontSize: {
        'xxs' : '.5rem'
      },
      screens: {
        'xs' : '320px',
        'smh' : '400px'
      },
      fontFamily: {
        'barlow' : ["Barlow", "sans-serif"]
      },
      backgroundImage: {
        'scissors': 'linear-gradient(90deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper': 'linear-gradient(90deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock': 'linear-gradient(90deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'lizard': 'linear-gradient(90deg, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'cyan': 'linear-gradient(90deg, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
        'radial-background': 'radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
      },
      colors: {
        'scissors': {
          DEFAULT: 'hsl(39, 89%, 49%)',
          dark: 'hsl(40, 84%, 53%)',
        },
        'paper': {
          DEFAULT: 'hsl(230, 89%, 62%)',
          dark: 'hsl(230, 89%, 65%)',
        },
        'rock': {
          DEFAULT: 'hsl(349, 71%, 52%)',
          dark: 'hsl(349, 70%, 56%)',
        },
        'lizard': {
          DEFAULT: 'hsl(261, 73%, 60%)',
          dark: 'hsl(261, 72%, 63%)',
        },
        'cyan': {
          DEFAULT: 'hsl(189, 59%, 53%)',
          dark: 'hsl(189, 58%, 57%)',
        },
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
    },
  },
  plugins: [],
}
