<script setup lang="ts">
import { useTagViewStore } from "@/store"
import Tag from "./Tag.vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { getMeta } from "@/utils"
import { routes } from "@/router"
import { EIcons } from "@/constants"
const tagViewStore = useTagViewStore()
const { allTags } = storeToRefs(tagViewStore)
const { push } = useRouter()
</script>

<template>
  <div role="tag-views" class="w-full flex items-center justify-start gap-2">
    <Tag v-for="name of allTags" :key="name" :class="tagViewStore.isCurrent(name) ? 'bg-primary!' : ''" @click="() => push({ name })">
      {{ getMeta(routes, name)?.title }}
      <template #footer>
        <SvgIcon :name="EIcons.Close" @click="() => tagViewStore.deleteTag(name)" />
      </template>
    </Tag>
  </div>
</template>
