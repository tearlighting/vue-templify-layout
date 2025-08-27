<script setup lang="ts">
import { Icon } from "@iconify/vue"
const props = defineProps<{
  name: string
  class?: string
}>()
</script>

<template>
  <Icon :icon="props.name" :class="class" />
</template>
