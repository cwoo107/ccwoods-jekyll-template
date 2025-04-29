module.exports = {
  content: [
    "./**/*.{html,md,js,liquid}",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.md",
    "./assets/js/**/*.js",
    "./asset/**/*.html",
  ],
  exclude: [
    './_site/**/*',
    './node_modules/**/*',
    './vendor/**/*',
  ],
  theme: { extend: {} },
  plugins: [],
}