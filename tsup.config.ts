import type { Options } from "tsup";

export const tsup: Options = {
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  outDir: "dist",
  treeshake: true,
};
