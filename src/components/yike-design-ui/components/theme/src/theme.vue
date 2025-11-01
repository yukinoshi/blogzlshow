<template>
  <div v-show="control" class="yk-theme" @click="toggleDark()">
    <IconMoonFill :class="{moon:isDark}"/>
    <IconSunFill :class="{sun:!isDark}"/>
  </div>
</template>

<script lang="ts" setup>
import { ThemeProps } from './theme'
import { IconMoonFill, IconSunFill } from '../../svg-icon'
import { useDark, useToggle } from '@vueuse/core'

const props = withDefaults(defineProps<ThemeProps>(), {
  skin: 'auto',
  control: true,
  disableTransition: true,
  storageKey: 'YIKE_THEME',
})

const isDark = useDark({
  attribute: 'data-theme',
  disableTransition: props.disableTransition,
  storageKey: props.storageKey,
})
const toggleDark = useToggle(isDark)
</script>
