
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconLocationOutline',
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
    const cls = ['yk-icon', 'icon-location-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2c197.94 0 358.4 160.46 358.4 358.4 0 131.968-119.475 319.693-358.4 563.2l-22.4-23.04c-224-232.294-336-412.365-336-540.16 0-197.94 160.46-358.4 358.4-358.4m0 76.8c-155.52 0-281.6 126.08-281.6 281.6 0 95.155 90.42 246.426 274.15 444.237l7.424 7.987 7.476-7.987 19.328-20.992C706.38 648.78 790.45 506.7 793.498 414.745l.102-5.145C793.6 254.08 667.52 128 512 128m0 102.4a179.2 179.2 0 1 1 0 358.4 179.2 179.2 0 0 1 0-358.4m0 76.8a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8"></path></svg>
  </template>
