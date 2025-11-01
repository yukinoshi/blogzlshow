
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconCameraOutline',
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
    const cls = ['yk-icon', 'icon-camera-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M694.451 128a25.6 25.6 0 0 1 25.344 22.144L734.26 256H947.2a25.6 25.6 0 0 1 25.6 25.6v588.8a25.6 25.6 0 0 1-25.6 25.6H76.8a25.6 25.6 0 0 1-25.6-25.6V281.6A25.6 25.6 0 0 1 76.8 256h264.14l14.44-105.856A25.6 25.6 0 0 1 380.722 128zm-44.697 76.8H425.42l-17.434 128H128v486.4h768V332.8H667.187zM512 384a179.2 179.2 0 1 1 0 358.4 179.2 179.2 0 0 1 0-358.4m0 76.8a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8m-230.4-320v76.8H128v-76.8z"></path></svg>
  </template>
