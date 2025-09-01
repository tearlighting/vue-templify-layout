import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import DefaultLayout from "@/layout/DefaultLayout.vue"

import { EPemission } from "@/constants"
import { EIcons } from "@/constants/icons"
import Dashboard from "@/views/dashboard/index.vue"
import Menu12 from "@/views/menu/menu12/index.vue"
import Menu111 from "@/views/menu/menu111/index.vue"

/**
 * 设计的就是具名路由
 */
const path = "https://element-plus-admin-doc.cn/"
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: "Dashboard",
    },
    name: "Home",
    meta: {
      hidden: true,
      roles: [EPemission.visitor],
    },
  },
  {
    path: "/login",
    component: DefaultLayout,
    children: [
      {
        name: "Login1",
        path,
        components: Dashboard,
        meta: {
          roles: [EPemission.visitor],
          hidden: true,
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: "/dashboard",
    component: DefaultLayout,
    meta: {
      hidden: true,
      roles: [EPemission.visitor],
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,

        meta: {
          title: "Dashboard",
          roles: [EPemission.visitor],
          icon: EIcons.Dashboard,
        },
      },
    ],
  },
  {
    path: "/level",
    component: DefaultLayout,
    redirect: "/level/menu1/menu1-1/menu1-1-1",
    name: "Level",
    meta: {
      title: "router.level",
      icon: EIcons.Home,
      roles: [EPemission.visitor],
    },
    children: [
      {
        path: "Menu1",
        name: "Menu1",
        redirect: "/level/menu1/menu1-1/menu1-1-1",
        meta: {
          title: "router.menu1",
          roles: [EPemission.visitor],
          icon: EIcons.MenuOpen,
        },
        children: [
          {
            path: "menu1-1",
            name: "Menu11",
            redirect: "/level/menu1/menu1-1/menu1-1-1",
            meta: {
              title: "router.menu11",
              alwaysShow: true,
              roles: [EPemission.visitor],
            },
            children: [
              {
                path: "menu1-1-1",
                name: "Menu111",
                component: Menu111,
                meta: {
                  title: "router.menu111",
                  roles: [EPemission.visitor],
                },
              },
            ],
          },
          {
            path: "menu1-2",
            name: "Menu12",
            component: Menu12,
            meta: {
              title: "router.menu12",
              roles: [EPemission.visitor],
            },
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
