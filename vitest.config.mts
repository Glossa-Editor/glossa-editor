// eslint-disable-next-line import/no-unresolved
import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.renderer.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/tests/setup.ts",
      includeSource: ["src/**/*.{js,jsx,ts,tsx}"],
    },
    define: {
      "import.meta.vitest": false,
    },
  }),
);
