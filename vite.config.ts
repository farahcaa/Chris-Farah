import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vike()],
});
