import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': {}, // Simula `process.env` en el navegador
    },
})

