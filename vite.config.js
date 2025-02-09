import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'
import tailwindcss from '@tailwindcss/vite'    
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),  tailwindcss(), // Keep only the React plugin
  ],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },

  base: "/React-Ecommerance-web/", // Base URL for deployment
})
