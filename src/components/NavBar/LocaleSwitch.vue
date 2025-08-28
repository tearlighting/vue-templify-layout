<script setup lang="ts">
import { useAppStore } from "@/store/app"
import SvgIcon from "@/components/SvgIcon/index.vue"
import { EIcons } from "@/constants/icons"
import ControllerContainer from "./ControllerContainer.vue"

const appStore = useAppStore()
const {
  settings: { showLocaleSwitch },
} = appStore

interface IProps {
  svgClass?: string
}

defineProps<IProps>()
</script>

<template>
  <ControllerContainer v-if="showLocaleSwitch">
    <SvgIcon :name="EIcons.Locale" :class="svgClass"></SvgIcon>
  </ControllerContainer>
</template>

<style lang="less" scoped></style>
