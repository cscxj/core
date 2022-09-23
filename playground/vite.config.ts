import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  root: __dirname,
  plugins: [vueJsx()]
})
