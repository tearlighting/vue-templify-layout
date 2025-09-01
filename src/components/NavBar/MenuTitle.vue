<script setup lang="ts">
import { useAppStore } from "@/store/app"
import { useRouteStore } from "@/store/route"
import { storeToRefs } from "pinia"

interface IProps {
  class?: string
}
const props = defineProps<IProps>()
const {
  settings: { showTitle },
} = useAppStore()
const routeStore = useRouteStore()
const { currentRoute } = storeToRefs(routeStore)
</script>

<template>
  <nav v-if="showTitle" v-bind="props" role="menu-title">{{ currentRoute.meta?.title }}</nav>
</template>

<style lang="less" scoped></style>
