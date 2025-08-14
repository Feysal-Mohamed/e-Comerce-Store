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

          "0%": { background: "green", opacity: "0.4" },
          "100%": { background: "green", opacity: "0.4" },
        },
      },
      animation: {
        anim: "anim 2s ease-in-out infinite",
        
      },
    },
  },
  plugins: [],
}
