import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
