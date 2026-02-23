# mico2

GitHub Pages 公開中の Vite プロジェクトです。

## 公開URL

- https://eireirjp.github.io/mico2/

## ローカル開発

```bash
npm install
npm run dev
```

## 本番ビルド

```bash
npm run build
npm run preview
```

## デプロイ手順（GitHub Pages）

このリポジトリは GitHub Actions で自動デプロイされます。

1. 変更して `git add` / `git commit`
2. `master` ブランチへ `git push`
3. Actions の `Deploy to GitHub Pages` が成功すると公開反映

## 補足

- Pages 設定は `Settings > Pages > Source: GitHub Actions`
- Vite の `base` は `vite.config.js` で `/mico2/` に設定済み
