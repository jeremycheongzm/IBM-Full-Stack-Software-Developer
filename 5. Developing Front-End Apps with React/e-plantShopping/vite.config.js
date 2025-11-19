import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://github.com/jeremycheongzm/IBM-Full-Stack-Software-Developer/tree/main/5.%20Developing%20Front-End%20Apps%20with%20React/e-plantShopping",
  plugins: [react()],
});
