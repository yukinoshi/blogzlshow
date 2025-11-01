
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconLoading1Outline',
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
    const cls = ['yk-icon', 'icon-loading1-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 76.8c240.358 0 435.2 194.842 435.2 435.2 0 107.955-39.296 206.72-104.397 282.778l-94.182-193.101 100.557 32.077C862.925 595.764 870.4 554.752 870.4 512c0-197.94-160.46-358.4-358.4-358.4S153.6 314.06 153.6 512 314.06 870.4 512 870.4c91.392 0 174.797-34.202 238.106-90.522l34.739 71.194A433.38 433.38 0 0 1 512 947.2C271.642 947.2 76.8 752.358 76.8 512S271.642 76.8 512 76.8"></path></svg>
  </template>
