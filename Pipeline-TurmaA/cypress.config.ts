import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173'
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  },
  viewportHeight: 900,
  viewportWidth: 1300
});
