
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconAlarmFill',
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
    const cls = ['yk-icon', 'icon-alarm-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 230.4c183.808 0 332.8 148.992 332.8 332.8v256H384V588.8h-76.8v230.4h-128v-256c0-183.808 148.992-332.8 332.8-332.8m-350.9-59.597 90.497 90.496-54.272 54.298-90.522-90.496 54.272-54.298zm701.8 0 54.297 54.272-90.496 90.522-54.298-54.272zM550.4 51.2v128h-76.8v-128zM128 896h768v76.8H128z"></path></svg>
  </template>
