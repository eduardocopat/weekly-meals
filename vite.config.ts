import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weekly-meals/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
