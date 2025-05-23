import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        // Base colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Brand colors
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
          dark: 'hsl(var(--brand-dark))',
          darker: 'hsl(var(--brand-darker))',
          muted: 'hsl(var(--brand-muted))',
        },
        
        // Semantic colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Component colors
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        
        // Utility colors
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        info: 'hsl(var(--info))',
        
        // Accent colors
        'accent-yellow-light': 'var(--accent-yellow-light)',
        'accent-yellow-dark': 'var(--accent-yellow-dark)',
        'accent-skyblue-light': 'var(--accent-skyblue-light)',
        'accent-skyblue-dark': 'var(--accent-skyblue-dark)',
        'accent-green': 'var(--accent-green)',
        'accent-red': 'var(--accent-red)',
        'accent-darkgreen-dark': 'var(--accent-darkgreen-dark)',
        'accent-darkgreen-light': 'var(--accent-darkgreen-light)',
        'accent-purple-dark': 'var(--accent-purple-dark)',
        'accent-purple-light': 'var(--accent-purple-light)',
        'accent-pink-dark': 'var(--accent-pink-dark)',
        'accent-pink-light': 'var(--accent-pink-light)',
        'accent-maroon-dark': 'var(--accent-maroon-dark)',
        'accent-maroon-light': 'var(--accent-maroon-light)',
        'dark-accent-skyblue-dark': 'var(--dark-accent-skyblue-dark)',
        'dark-accent-skyblue-light': 'var(--dark-accent-skyblue-light)',
        'dark-accent-maroon-dark': 'var(--dark-accent-maroon-dark)',
        'dark-accent-maroon-light': 'var(--dark-accent-maroon-light)',
        'dark-accent-green-dark': 'var(--dark-accent-green-dark)',
        'dark-accent-green-light': 'var(--dark-accent-green-light)',
        'dark-accent-yellow-dark': 'var(--dark-accent-yellow-dark)',
        'dark-accent-yellow-light': 'var(--dark-accent-yellow-light)',
        'dark-accent-purple-dark': 'var(--dark-accent-purple-dark)',
        'dark-accent-purple-light': 'var(--dark-accent-purple-light)',
        'dark-accent-pink-dark': 'var(--dark-accent-pink-dark)',
        'dark-accent-pink-light': 'var(--dark-accent-pink-light)',
        
        // Gray colors
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-50': 'var(--gray-50)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',
        'gray-950': 'var(--gray-950)',
        black: 'var(--black)',
        white: 'var(--white)',
        
        // Chart colors
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      
      // Border radius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      
      // Keyframes and animation
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;