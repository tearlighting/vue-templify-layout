import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import DefaultLayout from "@/layout/DefaultLayout.vue"
import Test from "@/components/test/index.vue"
import { EPemission } from "@/constants"
import { setRouterBehavior } from "./behavior"
import { EIcons } from "@/constants/icons"

/**
 * 设计的就是具名路由
 */
const path = "https://element-plus-admin-doc.cn/"
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: "DashboardContainer",
    },
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
        components: Test,
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
        component: Test,

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
        path: "https://element-plus-admin-doc.cn/",
        name: "Menu1",
        redirect: "/level/menu1/menu1-1/menu1-1-1",
        meta: {
          title: "router.menu1",
          roles: [EPemission.visitor],
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
                redirect: "/level/menu1/menu1-1/menu1-1-1",
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
            redirect: "/level/menu1/menu1-1/menu1-1-1",
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

setRouterBehavior(router, "/")
export default router
