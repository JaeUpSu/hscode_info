import { resolve as _resolve } from "path";

export const entry = "./src/index.ts";
export const devtool = "inline-source-map";
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  fallback: {
    path: require.resolve("path-browserify"),
    path: false,
  },
};
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist"),
};
