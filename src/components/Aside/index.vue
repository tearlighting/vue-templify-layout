<script setup lang="ts">
import { useRouteStore } from "@/store/route"
import { ElMenu, type MenuInstance } from "element-plus"
import MenuItem from "./MenuItem.vue"
import { storeToRefs } from "pinia"
import { useMenuStore } from "@/store/menu"
import { onMounted, ref } from "vue"

const routeStore = useRouteStore()

const { displayRoutes } = storeToRefs(routeStore)

const { menuController } = useMenuStore()

const menuRef = ref<MenuInstance>()
onMounted(() => {
  const { getcurrentRoute } = routeStore
  const currentRouteName = getcurrentRoute()
  currentRouteName && menuRef.value?.updateActiveIndex(currentRouteName)
})
</script>

<template>
  <div class="md: w-60 h-full">
    <el-menu ref="menuRef" :collapse="menuController.isCollapsed()" :hidden="menuController.isHidden()">
      <template v-for="item in displayRoutes">
        <menu-item :routes="item" />
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped></style>
