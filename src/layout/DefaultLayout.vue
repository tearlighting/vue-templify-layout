<script setup lang="ts">
import PanelContainer from "@/components/PanelContainer/index.vue"
import Aside from "@/components/Aside/index.vue"
import NavBar from "@/components/NavBar/index.vue"
import TagViews from "@/components/TagViews/index.vue"
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
    <RouterView></RouterView>
  </PanelContainer>
</template>

<style lang="less" scoped></style>
