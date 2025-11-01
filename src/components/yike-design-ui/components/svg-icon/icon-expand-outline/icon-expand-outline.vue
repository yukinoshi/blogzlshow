
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconExpandOutline',
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
    const cls = ['yk-icon', 'icon-expand-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M76.8 153.6h870.4v76.8H76.8zm0 320H640v76.8H76.8zM950.835 512l-54.297 54.298-126.72 126.72-54.298-54.298L842.214 512l-126.72-126.72 54.324-54.298zM76.8 793.6h870.4v76.8H76.8z"></path></svg>
  </template>
