import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/helloWorld.js",
      format: "umd",
      name: "myLibrary",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
  ],
};
