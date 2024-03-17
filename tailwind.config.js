/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      keyframes: {
        fadein: {
          '0%': {opacity: '0', transform: 'translate(-50px, 0px)'},
          '100%': {opacity: '1', transform: 'translate(0px, 0px)'}
        }
      },
      animation:  {
        fadein: 'fadein 1s ease-in-out'
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
