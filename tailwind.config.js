module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "foundation-blackblack-1": "var(--foundation-blackblack-1)",
        "foundation-blackblack-10": "var(--foundation-blackblack-10)",
        "foundation-blackblack-4": "var(--foundation-blackblack-4)",
        "foundation-blackblack-5": "var(--foundation-blackblack-5)",
        "foundation-blackblack-6": "var(--foundation-blackblack-6)",
        "foundation-blackblack-9": "var(--foundation-blackblack-9)",
        "foundation-redred-1": "var(--foundation-redred-1)",
        "foundation-redred-10": "var(--foundation-redred-10)",
        "foundation-redred-2": "var(--foundation-redred-2)",
        "foundation-redred-3": "var(--foundation-redred-3)",
        "foundation-redred-4": "var(--foundation-redred-4)",
        "foundation-redred-6": "var(--foundation-redred-6)",
        "foundation-redred-11": "var(--foundation-redred-11)",
        "foundationblackblack-11": "var(--foundationblackblack-11)",
        "foundationblackblack-3": "var(--foundationblackblack-3)",
        "foundationredred-13": "var(--foundationredred-13)",
        "foundationredred-8": "var(--foundationredred-8)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        quicksand: ["Quicksand", "sans-serif"],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
