/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 120000,
    globalSetup: [
      './vite.globalSetup.ts',
    ],
  },
});
