/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bone: '#efe9dd',
        'bone-deep': '#e2dac8',
        'bone-light': '#f6f1e6',
        ink: '#14110f',
        'ink-soft': '#3a3531',
        'ink-mute': '#6b635b',
        bronze: '#a0793f',
        'bronze-deep': '#7a5a2c',
        sage: '#4f5848',
        line: 'var(--line)',
        'line-soft': 'var(--line-soft)',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
