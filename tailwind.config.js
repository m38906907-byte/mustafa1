/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 8px)',
        '2xl': 'calc(var(--radius) + 16px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      fontSize: {
        'display-sm': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1' }],
        'display-md': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '0.9' }],
        'display-lg': ['clamp(3rem, 7vw, 8rem)', { lineHeight: '0.85' }],
        'display-xl': ['clamp(4rem, 10vw, 14rem)', { lineHeight: '0.75' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      animation: {
        'header-entrance': 'headerEntrance 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both',
        'slide-in-left': 'slideInLeft 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both',
        'slide-in-right': 'slideInRight 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both',
        'fade-up': 'fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'item-slide': 'itemSlide 0.8s ease-out both',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-red': 'pulseRed 2.5s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s ease-in-out 1s forwards',
      },
      keyframes: {
        headerEntrance: {
          '0%': { opacity: '0', transform: 'translateY(-80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        itemSlide: {
          from: { opacity: '0', transform: 'translateY(-15px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          to: { transform: 'translateX(100%)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(194, 19, 19, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(194, 19, 19, 0.3)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(194, 19, 19, 0.2)' },
          '50%': { borderColor: 'rgba(194, 19, 19, 0.6)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};