<script setup lang="ts">
import { ElMenuItem, ElSubMenu, ElMenuItemGroup } from "element-plus"
import SvgIcon from "@/components/SvgIcon/index.vue"
import type { RouteRecordRaw } from "vue-router"
defineProps<{
  routes: RouteRecordRaw
}>()
</script>

<template>
  <!-- 有子菜单 -->
  <el-sub-menu v-if="routes.children?.length" :index="String(routes.name)">
    <template #title>
      <SvgIcon v-if="routes.meta?.icon" :name="routes.meta?.icon" />
      <span>{{ routes.meta?.title }}</span>
    </template>
    <el-menu-item-group>
      <!-- 递归渲染子菜单 -->
      <MenuItem v-for="child in routes.children" :key="child.name" :routes="child" />
    </el-menu-item-group>
  </el-sub-menu>

  <!-- 没有子菜单 -->
  <el-menu-item v-else :index="String(routes.name)">
    {{ routes.meta?.title }}
  </el-menu-item>
</template>
