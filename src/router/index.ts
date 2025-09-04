import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import DefaultLayout from "@/layout/DefaultLayout.vue"
import { EPemission } from "@/constants"
import { EIcons } from "@/constants/icons"
import Dashboard from "@/views/dashboard/index.vue"
import Menu12 from "@/views/menu/menu12/index.vue"
import Menu111 from "@/views/menu/menu111/index.vue"
import { useLanguage } from "@/hooks/useLanguage"

const { t } = useLanguage()
/**
 * 设计的就是具名路由
 */

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
        name: "Login",
        path: "",
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
          title: t("router.dashboard"),
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
      title: t("router.level"),
      icon: EIcons.Home,
      roles: [EPemission.visitor],
    },
    children: [
      {
        path: "Menu1",
        name: "Menu1",
        redirect: "/level/menu1/menu1-1/menu1-1-1",
        meta: {
          title: t("router.level.menu1"),
          roles: [EPemission.visitor],
          icon: EIcons.MenuOpen,
        },
        children: [
          {
            path: "menu1-1",
            name: "Menu11",
            redirect: "/level/menu1/menu1-1/menu1-1-1",
            meta: {
              title: t("router.level.menu1.menu11"),
              alwaysShow: true,
              roles: [EPemission.visitor],
            },
            children: [
              {
                path: "menu1-1-1",
                name: "Menu111",
                component: Menu111,
                meta: {
                  title: t("router.level.menu1.menu11.menu111"),
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
              title: t("router.level.menu1.menu12"),
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
