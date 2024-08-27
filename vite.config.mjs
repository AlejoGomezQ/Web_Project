
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",  
  build: {
    outDir: "../dist",  
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../index.html'),
        about: resolve(__dirname, '../signin.html'),
        contact: resolve(__dirname, '../login.html'),
      },
    },
  },
});
