import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
          // 依存関係（node_modules）からの警告を非表示にする
          quietDeps: true,
          // 必要に応じて、新しいJS APIを使用する指定（Sassのバージョンによる）
          api: 'modern-compiler'
        },
     },
  },
}