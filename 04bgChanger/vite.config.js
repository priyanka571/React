import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

// https://vite.dev/config/
// Export Default Defineconfig Plugins React  