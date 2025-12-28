# Vue 3 + TypeScript + Vite 專案遷移

本專案是從個人的靜態 CV 網頁遷移至 Vue 3 架構的重構版本。

## 技術堆疊

- **框架**: Vue 3 (使用 Composition API 與 `<script setup>`)
- **語言**: TypeScript
- **建置工具**: Vite
- **樣式**: SCSS (利用 Dart Sass)
- **相依性**:
  - `sass`: 用於 SCSS 編譯

## 已完成功能

- **元件化架構**:
  - `AppHeader`: 包含 RWD 漢堡選單與 Sticky 固定效果。
  - `SectionAbout`: 關於我區塊，包含學歷與經歷。
  - `SectionWorks`: 作品集區塊，資料驅動渲染。
- **樣式管理**:
  - 全域變數定義於 `src/assets/scss/_variables.scss`。
  - 重置與全域樣式位於 `src/assets/scss/main.scss`。
- **行動裝置優化**:
  - 修正了 Header 在手機版上的顯示與固定問題。

## 開發指南

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
# 或使用 npm.cmd run dev (若遇到 PowerShell 權限問題)
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 專案結構

```
src/
├── assets/         # 靜態資源 (圖片、字型、SCSS)
├── components/     # Vue 元件 (AppHeader, SectionWorks 等)
├── App.vue         # 主應用程式入口
└── main.ts         # 程式進入點
public/
└── demo/           # 靜態展示頁面 (舊專案的 demo 連結)
```
