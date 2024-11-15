# Path 管理ツール

## 概要
このプロジェクトは、ファイルパスを登録・表示・削除できるPath 管理ツールです。

## 機能一覧
- Path の登録
- Path の一覧表示
- Path の削除

## インストール手順

### 前提条件
- Node.js 
- PostgreSQL

### 手順
1. リポジトリをクローンします：
   git clone https://github.com/ユーザー名/リポジトリ名.git

2. 環境変数の設定：
   backendの.env.local
   - DB_USER=postgres
   - DB_PASSWORD=yourpassword
   - DB_NAME=path_app
   - PORT=3000

   frontendの.env.local
   - VITE_API_BASE_URL=/api

3. 必要なパッケージをインストール：
   - cd backend
   - npm install

   - cd ../frontend
   - npm install

4. データベースのマイグレーションを実行：
   - cd backend
   - npm run migrate
   - npm run seed

## 使用方法
1. サーバーを起動：
   - cd backend
   - npm start

2. フロントエンドを起動：
   - cd frontend
   - npm run dev

3. URLにアクセス：
　　http://localhost:5173


## 今後の改善点
- Path の編集機能の追加
- エラーハンドリングの改善
- UI デザインの向上

