
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconImageOutline',
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
    const cls = ['yk-icon', 'icon-image-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M921.6 76.8a25.6 25.6 0 0 1 25.6 25.6v819.2a25.6 25.6 0 0 1-25.6 25.6H102.4a25.6 25.6 0 0 1-25.6-25.6V102.4a25.6 25.6 0 0 1 25.6-25.6zM292.173 500.429 153.6 599.245V870.4h716.8v-27.187L640.589 638.618 501.709 752.64 292.173 500.48zM870.4 153.6H153.6v351.334l152.064-108.441L512 644.813 642.637 537.6 870.4 740.378zm-204.8 76.8a128 128 0 1 1 0 256 128 128 0 0 1 0-256m0 76.8a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4"></path></svg>
  </template>
