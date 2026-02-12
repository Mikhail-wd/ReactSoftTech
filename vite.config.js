import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/ReactSoftTech",
  css: {
    modules: {
      // Если вы используете CSS модули, настройте их здесь
    },
  },
  // Дополнительные настройки
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    strictPort: true,
    allowedHosts: [
      "softtechgroup.ru",
      "софттекгрупп.рф",
      "admin.софттекгрупп.рф",
      "admin.softtechgroup.ru",
      "xn--c1adpoiafdkapf.xn--p1ai",
      "softteck.konan.tw1.ru",
    ],
  },
  preview: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    strictPort: true,
    allowedHosts: [
      "softtechgroup.ru",
      "софттекгрупп.рф",
      "admin.софттекгрупп.рф",
      "admin.softtechgroup.ru",
      "xn--c1adpoiafdkapf.xn--p1ai",
      "softteck.konan.tw1.ru",
    ],
  },
  assetsInclude: [
    "**/*.docx",
    "**/*.pdf",
    "**/*.PDF",
    "**/*.zip",
    "**/*.doc",
    "**/*.rtf",
    "**/*.sig",
    "**/*.xlsx",
    "**/*.xls",
    "**/*.JPG",
    "**/*.jpg",
    "**/*.odt",
    "**/*.rar",
  ],
});
