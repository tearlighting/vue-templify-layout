<script setup lang="ts">
import { routes } from "@/router"
import { useAppStore } from "@/store/app"
import { useRouteStore } from "@/store/route"
import { findRoute } from "@/utils/route"
import { storeToRefs } from "pinia"

import type { RouteRecordRaw } from "vue-router"

interface IProps {
  class?: string
}
const props = defineProps<IProps>()

const {
  settings: { showTitle },
} = useAppStore()
const routeStore = useRouteStore()
const { currentRouteName } = storeToRefs(routeStore)
function getMeta() {
  const route = findRoute(routes as any, currentRouteName.value!) as unknown as RouteRecordRaw
  return route.meta
}
</script>

<template>
  <nav v-if="showTitle" v-bind="props" role="menu-title">{{ getMeta()?.title }}</nav>
</template>

<style lang="less" scoped></style>
