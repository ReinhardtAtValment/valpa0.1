import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          // Navy blue scale for additional flexibility
          50: "hsl(220, 70%, 97%)",
          100: "hsl(220, 70%, 92%)",
          200: "hsl(220, 70%, 80%)",
          300: "hsl(220, 70%, 65%)",
          400: "hsl(220, 70%, 50%)",
          500: "hsl(220, 70%, 30%)", // Main primary
          600: "hsl(220, 70%, 25%)",
          700: "hsl(220, 70%, 20%)",
          800: "hsl(220, 70%, 15%)",
          900: "hsl(220, 70%, 10%)",
          950: "hsl(220, 70%, 5%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          // Teal scale
          50: "hsl(185, 75%, 97%)",
          100: "hsl(185, 75%, 90%)",
          200: "hsl(185, 75%, 80%)",
          300: "hsl(185, 75%, 65%)",
          400: "hsl(185, 75%, 55%)",
          500: "hsl(185, 75%, 45%)", // Main secondary
          600: "hsl(185, 75%, 35%)",
          700: "hsl(185, 75%, 28%)",
          800: "hsl(185, 75%, 22%)",
          900: "hsl(185, 75%, 15%)",
          950: "hsl(185, 75%, 10%)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          // Amber scale
          50: "hsl(38, 92%, 97%)",
          100: "hsl(38, 92%, 90%)",
          200: "hsl(38, 92%, 80%)",
          300: "hsl(38, 92%, 70%)",
          400: "hsl(38, 92%, 62%)",
          500: "hsl(38, 92%, 55%)", // Main accent
          600: "hsl(38, 92%, 48%)",
          700: "hsl(38, 92%, 40%)",
          800: "hsl(38, 92%, 32%)",
          900: "hsl(38, 92%, 25%)",
          950: "hsl(38, 92%, 15%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        heading: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "Monaco",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in-from-top 0.5s ease-out",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
