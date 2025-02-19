
//**@type {import('tailwindcss').Config} 
import withMT from "@material-tailwind/react/utils/withMT";
// eslint-disable-next-line no-undef
module.exports = withMT ({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: "class",
      backgroundImage: {
        bannerImg: "url('/slide-1.jpg')",
        bannerImg2: "url('/slide-2.webp')",
        blackOvrtlay: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(12, 40, 87) 100%)"
      },
    },
  },
  plugins: [],
})
