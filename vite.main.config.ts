import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
    alias: {
      "@app": path.resolve(__dirname, "../app/src"),
    },
  },
});
