<script setup lang="ts">
import PanelContainer from "@/components/PanelContainer/index.vue"
import Aside from "@/components/Aside/index.vue"
import NavBar from "@/components/NavBar/index.vue"
import TagViews from "@/components/TagViews/index.vue"
import { useRouteStore } from "@/store"
import { usePageHostStore } from "@/store/pageHost"
import { storeToRefs } from "pinia"

const { currentRoute } = useRouteStore()
const { hostRef } = storeToRefs(usePageHostStore())
</script>

<template>
  <PanelContainer>
    <template v-slot:left>
      <Aside></Aside>
    </template>
    <template v-slot:centerLine1>
      <NavBar></NavBar>
    </template>
    <template v-slot:centerLine2>
      <TagViews></TagViews>
    </template>
    <div role="page-host " class="size-full overflow-auto bg-bg" ref="hostRef">
      <RouterView v-slot="{ Component }">
        <KeepAlive v-if="currentRoute.meta?.keepAlive">
          <component :is="Component" />
        </KeepAlive>
        <component v-else :is="Component" />
      </RouterView>
    </div>
  </PanelContainer>
</template>

<style lang="less" scoped></style>
