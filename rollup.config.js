import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import minifyHTML from "rollup-plugin-minify-html-literals";
import dev from "rollup-plugin-dev";

const isdev = process.env.ROLLUP_WATCH;

const opts_dev = {
  dirs: ["."],
  port: 5000,
  host: "0.0.0.0"
};

const opts_cleanup = {
  comments: "none"
};

export default [
  {
    input: "src/main.js",
    output: {
      file: "colorlog.js",
      format: "cjs"
    },
    plugins: [
      minifyHTML(),
      resolve(),
      terser(),
      cleanup(opts_cleanup),
      isdev && dev(opts_dev)
    ]
  }
];
