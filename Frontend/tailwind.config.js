/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#66FCF1", // Bright cyan
          dark: "#45A29E", // Teal
        },
        secondary: {
          DEFAULT: "#1F2833", // Dark slate
          dark: "#0B0C10", // Very dark blue/black
        },
        neutral: "#C5C6C7", // Light gray
        gold: "#FFD700", // Golden color
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb2.jfif-wW9jBDMzLadhhWaZGJ825MKirSjrCp.jpeg')",
        "chat-pattern":
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb4.jpg-Nr6Jxyqu2Y7tFfZ4RCUOPYVuMY4kaw.jpeg')",
        "about-pattern":
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb1-KqnYd74wBaU24tWSTLRdApqGiNW0sy.webp')",
        "features-pattern":
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nb3-MfeQeMNrvMnxDuuUM1naCVlwJphzSK.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

