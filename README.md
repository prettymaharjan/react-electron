# ⚡ React + Electron Boilerplate

> A modern, beginner-friendly boilerplate for building desktop apps with React + Electron + TypeScript + Webpack.  
> Created by **Pretty**

---

## 🚀 Why This Exists

Most React-Electron boilerplates online are either outdated, broken, or confusing. This one just works.  
No weird configs. Very few deprecated packages. Just a clean setup that launches your app with a single command.

---

## 🧰 Tech Stack

- ⚛️ React 19
- ⚡ Electron 38+
- 🧠 TypeScript
- 🎨 Tailwind CSS (optional, easy to add)
- 🔧 Webpack (main, preload, renderer)
- 📦 ts-loader, style-loader, css-loader, html-webpack-plugin, copy-webpack-plugin

---

## 📁 Project Structure

```
└── 📁react-electron
    └── 📁public
        ├── electron.svg
        ├── react.svg
    └── 📁src
        └── 📁components
            ├── MyComponent.tsx
        └── 📁main
            ├── main.ts
            ├── preload.ts
        ├── App.css
        ├── App.tsx
        ├── global.d.ts
        ├── index.css
        ├── index.html
        ├── index.tsx
    ├── .gitignore
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── webpack.config.js
    ├── webpack.preload.config.js
    └── webpack.renderer.config.js
```

---

## 🛠 Installation

```bash
npm install
npm install --save-dev tsconfig-paths-webpack-plugin
npm install copy-webpack-plugin --save-dev
npm install ts-loader style-loader css-loader html-webpack-plugin copy-webpack-plugin tsconfig-paths-webpack-plugin --save-dev
npm start

```
---

## ✨ Preview

![Electron App Screenshot](https://imgur.com/5KNLnpt.png)

> 💡 This is what your app looks like on launch. Clean, simple, and ready to build on.
