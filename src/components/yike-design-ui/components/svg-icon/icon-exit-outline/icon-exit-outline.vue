
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconExitOutline',
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
    const cls = ['yk-icon', 'icon-exit-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M486.4 76.8c155.75 0 292.378 81.818 369.28 204.8h-94.72a357.63 357.63 0 0 0-274.56-128C288.46 153.6 128 314.06 128 512s160.46 358.4 358.4 358.4a357.63 357.63 0 0 0 274.509-127.974h94.745C778.778 865.408 642.15 947.2 486.4 947.2 246.042 947.2 51.2 752.358 51.2 512S246.042 76.8 486.4 76.8m358.4 290.38L989.62 512 844.8 656.82l-54.298-54.298 52.096-52.122H409.6v-76.8h432.998l-52.096-52.122 54.298-54.272z"></path></svg>
  </template>
