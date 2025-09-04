<script setup lang="ts">
import { useTagViewStore } from "@/store"
import Tag from "./Tag.vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { getMeta } from "@/utils"
import { routes } from "@/router"
import { EIcons } from "@/constants"
import clsx from "clsx"
const tagViewStore = useTagViewStore()
const { allTags } = storeToRefs(tagViewStore)
const { push } = useRouter()
</script>

<template>
  <div role="tag-views" class="w-full flex items-center justify-start gap-2 border-b-1 border-b-border">
    <Tag v-for="name of allTags" :key="name" class="my-1.5 first:ml-10" :class="clsx(tagViewStore.isCurrent(name) ? 'bg-primary/10! text-primary! border-primary!' : '')" @click="() => push({ name })">
      {{ getMeta(routes, name)?.title }}
      <template #footer>
        <SvgIcon :name="EIcons.Close" @click="() => tagViewStore.deleteTag(name)" />
      </template>
    </Tag>
  </div>
</template>
