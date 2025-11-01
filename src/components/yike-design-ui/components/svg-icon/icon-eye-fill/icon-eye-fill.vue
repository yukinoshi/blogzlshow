
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconEyeFill',
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
    const cls = ['yk-icon', 'icon-eye-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M419.149 512a92.851 92.851 0 1 0 185.702 0 92.851 92.851 0 0 0-185.702 0M512 257.229C231.04 257.229 62.003 512 62.003 512S231.04 766.771 512 766.771C792.166 766.771 961.997 512 961.997 512S792.167 257.229 512 257.229m0 433.331c-98.406 0-178.56-80.128-178.56-178.56 0-98.406 80.128-178.56 178.56-178.56 98.406 0 178.56 80.128 178.56 178.56 0 98.406-80.128 178.56-178.56 178.56"></path></svg>
  </template>
