

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",

  ],
  theme: {
    extend: {
      spacing: {
        '120':  '28rem',
        '128':  '32rem',
        '400':  '100rem',
        '500': '125rem',
      },
      colors: {
        blueShade: "#1c2434",
        grayShade: "#c5c5c5",
        violetShade: "#332754",
        grayDark: "#333a48",
        dashboardBlue: "#f1f5f9"
      }        

    },
  },
  plugins: [],
}
