import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build : {
  //   outDir: './dist' //build出力先
  // },
  base: process.env.GITHUB_PAGES
    ? '/stay_with_kome/' // レポジトリ名を設定
    :  process.env.NODE_ENV === 'production'
    ?  '/'  //本番環境('preview')
    :  './', //開発環境('dev')
})
