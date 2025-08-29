<script setup lang="ts">
interface ITagEmits {
  click: [e: MouseEvent]
}
const emit = defineEmits<ITagEmits>()

interface ITagSlots {
  header: string
  footer: string
  default: string
}
defineSlots<ITagSlots>()

interface ITagProps {
  class?: string
}
defineProps<ITagProps>()
</script>

<template>
  <div
    role="tag-container"
    @click="emit('click', $event)"
    class="flex items-center justify-center gap-2 border border-card-border rounded-lg bg-card-bg text-text py-1.5 px-3 shadow-sm hover:shadow-md hover:bg-surface transition-all duration-200 ease-in-out cursor-pointer sm:py-2 sm:px-4 sm:gap-3"
    :class="class"
  >
    <div role="tag-header" class="w-fit text-sm sm:text-base font-medium text-muted">
      <slot name="header"></slot>
    </div>
    <div role="tag-content" class="flex-1 text-sm sm:text-base">
      <slot>tag content</slot>
    </div>
    <div role="tag-footer" class="w-fit text-xs sm:text-sm text-primary">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
