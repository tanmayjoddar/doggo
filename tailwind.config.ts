import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#FBFBF9',
          50: '#FFFFFF',
          100: '#FBFBF9',
          200: '#F4F4EE',
          300: '#E8E7DF',
        },
        ink: {
          DEFAULT: '#141413',
          light: '#2B2B28',
          muted: '#63635E',
          subtle: '#8E8E88',
        },
        crimson: {
          DEFAULT: '#E63E26',
          hover: '#FF4D36',
          light: '#FFF0EE',
          dark: '#B02613',
        },
        gold: {
          DEFAULT: '#C99839',
          light: '#FFF8EB',
          dark: '#9A7120',
        },
        sky: {
          DEFAULT: '#DCEBFA',
          light: '#EEF6FD',
          deep: '#B0D3F5',
        },
        lavender: {
          DEFAULT: '#E9E4F5',
          light: '#F4F1FB',
          deep: '#C9BEE5',
        },
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(20, 20, 19, 0.08), 0 0 1px 1px rgba(20, 20, 19, 0.04)',
        'luxury-hover': '0 35px 70px -15px rgba(20, 20, 19, 0.14), 0 0 1px 1px rgba(20, 20, 19, 0.08)',
        'glow-crimson': '0 15px 35px -10px rgba(230, 62, 38, 0.35)',
        'float-card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
