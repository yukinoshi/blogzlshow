
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconHeartOutline',
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
    const cls = ['yk-icon', 'icon-heart-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M483.277 190.566 512 219.29l28.723-28.724c98.74-98.764 257.792-100.454 358.58-5.12l5.273 5.12c100.454 100.455 100.454 263.348 0 363.828L550.298 908.672a54.17 54.17 0 0 1-76.596 0L119.424 554.394c-100.454-100.48-100.454-263.373 0-363.828 100.48-100.48 263.373-100.48 363.853 0m360.217 53.914a176.026 176.026 0 0 0-245.324 3.533L512 334.183l-86.17-86.17a176.026 176.026 0 0 0-248.96 248.934L512 832.051l335.155-335.104c67.072-67.072 68.685-174.797 5.632-243.097l-4.838-5.044-4.429-4.326z"></path></svg>
  </template>
