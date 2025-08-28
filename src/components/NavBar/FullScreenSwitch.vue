<script setup lang="ts">
import { useAppStore } from "@/store/app"
import SvgIcon from "@/components/SvgIcon/index.vue"
import { EIcons } from "@/constants/icons"
import ControllerContainer from "./ControllerContainer.vue"

const appStore = useAppStore()
const {
  settings: { showFullScreenSwitch },
} = appStore

interface IProps {
  svgClass?: string
}

defineProps<IProps>()
</script>

<template>
  <ControllerContainer v-if="showFullScreenSwitch">
    <SvgIcon :name="EIcons.Fullscreen" :class="svgClass"></SvgIcon>
  </ControllerContainer>
</template>

<style lang="less" scoped></style>
