/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Puedes extender el tema si necesitas colores personalizados
      colors: {
        dark: {
          900: '#1a1a1a',
          800: '#2c2c2c',
          700: '#3d3d3d',
        },
      },
    },
  },
  plugins: [],
}

