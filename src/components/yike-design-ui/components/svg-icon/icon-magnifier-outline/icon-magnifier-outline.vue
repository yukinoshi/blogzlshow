
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconMagnifierOutline',
    })

    const props = withDefaults(
      defineProps<{
        size?: string | number
        strokeWidth?: number
        strokeLinecap?: 'butt' | 'round' | 'square'
        // strokeLinejoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'
        rotate?: number
        spin?: boolean
      }>(),
      {
        strokeWidth: 0,
        strokeLinecap: 'butt',
        // strokeLinejoin: 'arcs',
        size: 'inherit',
        rotate: undefined,
        spin: false,
      },
    )
    const cls = ['yk-icon', 'icon-magnifier-outline']
    const innerStyle = computed(() => {
      const styles: CSSProperties = { fill: "currentColor" }
      if (props.size) {
        styles.fontSize =
          typeof props.size === 'number' ? `${props.size}px` : props.size
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`
      }
      return styles
    })
  </script>

  <template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M435.2 76.8c197.94 0 358.4 160.46 358.4 358.4a356.86 356.86 0 0 1-78.029 223.258l253.107 253.081-54.297 54.272-252.8-252.749A356.9 356.9 0 0 1 435.2 793.6c-197.94 0-358.4-160.46-358.4-358.4S237.26 76.8 435.2 76.8m0 76.8c-155.52 0-281.6 126.08-281.6 281.6s126.08 281.6 281.6 281.6 281.6-126.08 281.6-281.6c0-153.062-122.112-277.58-274.227-281.498zm38.4 128v115.2h115.2v76.8H473.6v115.2h-76.8V473.6H281.6v-76.8h115.2V281.6z"></path></svg>
  </template>
