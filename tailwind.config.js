export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#a4bfff',
          400: '#799cff',
          500: '#4f74ff',
          600: '#2f4ff7',
          700: '#2438e5',
          800: '#2231c0',
          900: '#212b94',
        },
      },
    },
  },
  plugins: [],
}