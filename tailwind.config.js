/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./modules/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'weather-image': "url('https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__480.jpg')",
      }
    },
  },
  plugins: [],
}
