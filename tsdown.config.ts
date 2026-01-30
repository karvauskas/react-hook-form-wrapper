import { defineConfig } from "tsdown";

export default defineConfig({
    entry: ["src/index.ts", "src/fields/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: false,
    external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-hook-form"
    ],
});
