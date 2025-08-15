/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        anim: {
          "0%": {
            // background: "green",
            opacity: "0.4",
            transform: "translateY(0)", // Start at 0px
          },
          "100%": {
            // background: "green",
            opacity: "0.4",
            transform: "translateY(200px)", // End at -10px (move upward)
          },
        },
      },
      animation: {
        anim: "anim 1s  ",
      },
    },
    },
  
  plugins: [],
}
