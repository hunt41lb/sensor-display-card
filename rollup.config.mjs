import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";

const dev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/sensor-display-card.ts",
  output: {
    file: "dist/sensor-display-card.js",
    format: "es",
    sourcemap: dev,
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
    !dev &&
      terser({
        format: {
          comments: false,
        },
      }),
    dev &&
      serve({
        contentBase: ["dist"],
        port: 5000,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }),
  ].filter(Boolean),
};
