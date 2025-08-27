import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // 自动识别 <i-xxx-yyy /> 为图标组件
        IconsResolver({
          prefix: "i", // 默认就是 i，可以改成 icon 之类的
        }),
      ],
    }),
    Icons({
      autoInstall: true, // 自动下载对应图标库，不用手动 import
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
