module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-advanced-variables")({
      variables: { cssenv: process.env.NODE_ENV },
    }),
    require("tailwindcss")("./tailwind.js"),
    require("autoprefixer"),
  ],
}
