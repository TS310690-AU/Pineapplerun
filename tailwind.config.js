/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEFEF0',
          100: '#FEFCE1',
          200: '#FEF7C3',
          300: '#FDEF85',
          400: '#FADA5E', // Main primary
          500: '#F5C842',
          600: '#E5B82B',
          700: '#CA9D1A',
          800: '#A17C17',
          900: '#8A6B19',
        },
        secondary: {
          50: '#E8F5E8',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#388E3C', // Main secondary
          600: '#2E7D32',
          700: '#1B5E20',
          800: '#145A16',
          900: '#0D4F11',
        },
        accent: {
          50: '#FEF2F0',
          100: '#FDE3DF',
          200: '#FBC4BC',
          300: '#F89A8A',
          400: '#F46036', // Main accent
          500: '#E8542E',
          600: '#D1421F',
          700: '#B03517',
          800: '#922B14',
          900: '#7A2616',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
