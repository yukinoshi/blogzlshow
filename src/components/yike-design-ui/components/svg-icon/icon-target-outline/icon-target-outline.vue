
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconTargetOutline',
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
    const cls = ['yk-icon', 'icon-target-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M550.4 25.6v104.294C731.827 147.917 876.083 292.198 894.106 473.6H998.4v76.8H894.106c-18.023 181.427-162.304 325.683-343.68 343.706L550.4 998.4h-76.8V894.106C292.198 876.083 147.917 731.827 129.894 550.4H25.6v-76.8h104.294C147.917 292.173 292.198 147.917 473.6 129.894V25.6zM512 204.8c-169.651 0-307.2 137.549-307.2 307.2S342.349 819.2 512 819.2 819.2 681.651 819.2 512 681.651 204.8 512 204.8m0 153.6a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2m0 76.8a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 0 0 0-153.6"></path></svg>
  </template>
