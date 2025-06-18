/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto : ["Roboto"],
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
    flowbite.plugin(),
    require('tailwind-scrollbar'),
  ],
}

