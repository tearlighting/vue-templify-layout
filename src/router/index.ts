import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import DefaultLayout from "@/layout/DefaultLayout.vue"
export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: DefaultLayout,
    children: [
      {
        name: "Login1",
        path: "https://element-plus-admin-doc.cn/",
        redirect: {
          name: "Login1",
        },
        meta: {
          hidden: true,
          keepAlive: true,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
