import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/bin/wraptalk.cjs",
            format: "cjs",
            banner: "#!/usr/bin/env node",
        },
        plugins: [resolve(), commonjs(), typescript(), json()],
        external: ["fs", "path", "child_process"],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/bin/wraptalk.mjs",
            format: "esm",
            banner: "#!/usr/bin/env node",
        },
        plugins: [resolve(), commonjs(), typescript(), json()],
        external: ["fs", "path", "child_process"],
    }
];
