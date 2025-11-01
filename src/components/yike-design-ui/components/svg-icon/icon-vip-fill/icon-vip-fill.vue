
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconVipFill',
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
    const cls = ['yk-icon', 'icon-vip-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="m819.2 128 144.973 265.754a25.6 25.6 0 0 1-3.38 29.312L531.099 904.602a25.6 25.6 0 0 1-38.196 0L63.206 423.092a25.6 25.6 0 0 1-3.379-29.313L204.8 128zM394.086 435.2l-56.166 52.378 174.515 187.29 174.592-187.214-56.166-52.377-118.656 127.232z"></path></svg>
  </template>
