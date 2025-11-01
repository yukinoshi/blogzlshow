
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconGiftOutline',
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
    const cls = ['yk-icon', 'icon-gift-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M384 51.2c51.456 0 97.485 23.373 128 60.083A165.97 165.97 0 0 1 640 51.2h12.8a153.6 153.6 0 0 1 133.043 230.426L947.2 281.6a25.6 25.6 0 0 1 25.6 25.6v256H896v358.4a25.6 25.6 0 0 1-25.6 25.6H153.6a25.6 25.6 0 0 1-25.6-25.6V563.2H51.2v-256a25.6 25.6 0 0 1 25.6-25.6l161.357.026A153.6 153.6 0 0 1 371.2 51.2zM204.8 870.4h268.8V563.2H204.8zm614.4-307.2H550.4v307.2h268.8zM473.6 358.4H128v128h345.6zm422.4 0H550.4v128H896zM652.8 128H640a89.6 89.6 0 0 0-89.6 89.6v64h102.4a76.8 76.8 0 0 0 76.672-72.294l.128-4.506a76.8 76.8 0 0 0-72.294-76.672zM384 128h-12.8a76.8 76.8 0 0 0 0 153.6h102.4v-64a89.6 89.6 0 0 0-84.685-89.472z"></path></svg>
  </template>
