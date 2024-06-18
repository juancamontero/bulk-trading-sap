/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#243f9c',
        'primary-200': '#5e69ce',
        'primary-300': '#c6c8ff',
        'accent-100': '#00BFFF',
        'accent-200': '#00619a',
        'text-100': '#333333',
        'text-200': '#5c5c5c',
        'bg-100': '#FFFFFF',
        'bg-200': '#f5f5f5',
        'bg-300': '#cccccc',
      },
    },
  },
  plugins: [],
}
