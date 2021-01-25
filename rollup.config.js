import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import analyze from "rollup-plugin-analyzer";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "umd",
      name: "VofoDesign",
      globals: {
        react: "React",
      },
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      name: "VofoDesign",
    },
    {
      file: "dist/index.esm.js",
      format: "es",
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require("typescript"),
    }),
    analyze(),
    sizeSnapshot(),
  ],
};
