/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0F172A",
        electric: "#3B82F6",
        violet: "#7C3AED",
      },
      fontFamily: {
        sans: ["Inter", "Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(59, 130, 246, 0.28)",
        violet: "0 0 56px rgba(124, 58, 237, 0.22)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
