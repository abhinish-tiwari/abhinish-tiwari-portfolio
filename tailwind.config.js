/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'slideUp': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      backfaceVisibility: ['hover', 'focus'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
  darkMode: 'class',
}


