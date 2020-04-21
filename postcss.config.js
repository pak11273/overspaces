module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    "postcss-preset-env",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            content: ["./pages/**/*.js", "./components/**/*.js"],
            whitelist: ["html", "body"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
}
