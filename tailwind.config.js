/** @type {import('tailwindcss').Config} */
const { nextui } = require ("@nextui-org/react");

export default {
  content: [
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '5000': '5000ms', // Puedes ajustar esto según tus necesidades
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

