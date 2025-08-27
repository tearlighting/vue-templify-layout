<script setup lang="ts">
import PanelContainer from "@/components/PanelContainer/index.vue"
import Aside from "@/components/Aside/index.vue"
</script>

<template>
  <PanelContainer>
    <template v-slot:left>
      <Aside></Aside>
    </template>
    <RouterView></RouterView>
  </PanelContainer>
</template>

<style lang="less" scoped></style>
