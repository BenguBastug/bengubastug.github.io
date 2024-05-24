module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        // 'title': ['Mona Sans', 'sans-serif'],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
}
