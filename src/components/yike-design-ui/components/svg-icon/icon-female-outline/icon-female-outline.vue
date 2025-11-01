
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconFemaleOutline',
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
    const cls = ['yk-icon', 'icon-female-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M640 76.8c169.651 0 307.2 137.549 307.2 307.2S809.651 691.2 640 691.2c-70.912 0-136.218-24.038-188.211-64.384l-70.938 70.912 118.605 118.63-54.272 54.298-118.656-118.63-165.427 165.452-54.298-54.297L272.23 697.728 155.52 581.043l54.323-54.323 116.685 116.685 70.912-70.912A305.87 305.87 0 0 1 332.8 384c0-169.651 137.549-307.2 307.2-307.2m0 76.8a230.4 230.4 0 1 0 0 460.8 230.4 230.4 0 0 0 0-460.8"></path></svg>
  </template>
