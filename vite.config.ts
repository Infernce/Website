import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkMdxImages from 'remark-mdx-images'
import remarkGfm from 'remark-gfm'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      include: /\.mdx$/,
      remarkPlugins: [remarkMdxImages, remarkGfm]
    }),
    react()
  ],
  base: '/Website/'
})