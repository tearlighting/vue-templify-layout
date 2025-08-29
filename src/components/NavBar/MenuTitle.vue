<script setup lang="ts">
import { routes } from "@/router"
import { useAppStore } from "@/store/app"
import { useRouteStore } from "@/store/route"
import { getMeta } from "@/utils"
import { storeToRefs } from "pinia"

interface IProps {
  class?: string
}
const props = defineProps<IProps>()
const {
  settings: { showTitle },
} = useAppStore()
const routeStore = useRouteStore()
const { currentRouteName } = storeToRefs(routeStore)
</script>

<template>
  <nav v-if="showTitle" v-bind="props" role="menu-title">{{ getMeta(routes, currentRouteName!)?.title }}</nav>
</template>

<style lang="less" scoped></style>
