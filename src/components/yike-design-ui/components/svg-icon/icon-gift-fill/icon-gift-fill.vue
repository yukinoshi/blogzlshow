
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconGiftFill',
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
    const cls = ['yk-icon', 'icon-gift-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M473.6 537.6v409.6h-320a25.6 25.6 0 0 1-25.6-25.6v-384zm422.4 0v384a25.6 25.6 0 0 1-25.6 25.6h-320V537.6zM384 51.2c51.456 0 97.485 23.373 128 60.083A165.97 165.97 0 0 1 640 51.2h12.8a153.6 153.6 0 0 1 133.043 230.426L947.2 281.6a25.6 25.6 0 0 1 25.6 25.6v153.6H550.4V281.6h-76.8v179.2H51.2V307.2a25.6 25.6 0 0 1 25.6-25.6l161.357.026A153.6 153.6 0 0 1 371.2 51.2zM652.8 128H640a89.6 89.6 0 0 0-89.6 89.6v64h102.4a76.8 76.8 0 0 0 76.672-72.294l.128-4.506a76.8 76.8 0 0 0-72.294-76.672zM384 128h-12.8a76.8 76.8 0 0 0 0 153.6h102.4v-64a89.6 89.6 0 0 0-84.685-89.472z"></path></svg>
  </template>
