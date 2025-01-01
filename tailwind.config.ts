/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-in": "slideIn 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-in-out",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        floating: "floating 3s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
          "80%": { opacity: "0.9", transform: "scale(0.89)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      colors: {
        theme: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          bg: {
            primary: "var(--bg-primary)",
            secondary: "var(--bg-secondary)",
          },
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
      },
    },
  },
  plugins: [],
};
