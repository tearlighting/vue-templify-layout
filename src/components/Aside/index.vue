<script setup lang="ts">
import { useMenuStore, useRouteStore } from "@/store"
import { ElMenu, type MenuInstance } from "element-plus"
import MenuItem from "./MenuItem.vue"
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const { displayRoutes, currentRoute } = storeToRefs(useRouteStore())
const { push } = useRouter()
const { isCollapse, isHidden } = storeToRefs(useMenuStore())

const menuRef = ref<MenuInstance>()
onMounted(() => {
  currentRoute.value.name && menuRef.value?.updateActiveIndex(currentRoute.value.name)
})
</script>

<template>
  <div class="h-full transition-all duration-300" :class="!isCollapse && !isHidden ? '' : ''">
    <el-menu ref="menuRef" class="h-full bg-bg! md:w-60 border-r-border!" :collapse="isCollapse" :hidden="isHidden" @select="(name) => push({ name })" :default-active="currentRoute.name!">
      <template v-for="item in displayRoutes">
        <menu-item :routeItem="<any>item" />
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped></style>
