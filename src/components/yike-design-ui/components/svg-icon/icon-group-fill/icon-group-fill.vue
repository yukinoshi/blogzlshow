
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconGroupFill',
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
    const cls = ['yk-icon', 'icon-group-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1331 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 0 1 0-409.6m307.2 0a204.8 204.8 0 1 1-115.226 374.144A254.93 254.93 0 0 0 768 256a255.03 255.03 0 0 0-64-169.344A203.7 203.7 0 0 1 819.2 51.2M512 537.6c237.184 0 432.538 179.2 457.984 409.6H54.016C79.462 716.8 274.816 537.6 512 537.6m307.2 0c237.184 0 432.538 179.2 457.984 409.6H1049.37c-28.237-178.022-142.336-327.475-298.496-404.557 22.246-3.328 45.081-5.043 68.326-5.043"></path></svg>
  </template>
