
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconShopCartOutline',
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
    const cls = ['yk-icon', 'icon-shop-cart-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M208.051 76.8a25.6 25.6 0 0 1 25.37 22.118l18.355 134.272h664.653a25.6 25.6 0 0 1 25.165 30.285L861.466 695.86A25.6 25.6 0 0 1 836.3 716.8H263.194a25.6 25.6 0 0 1-25.396-22.374l-6.656-52.378h-.742L168.525 153.6H51.2V76.8zm646.81 233.216H266.573L308.3 640h485.376zM307.2 742.4a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8m0 66.56a35.84 35.84 0 1 0 0 71.68 35.84 35.84 0 0 0 0-71.68m486.4-66.56a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8m0 66.56a35.84 35.84 0 1 0 0 71.68 35.84 35.84 0 0 0 0-71.68"></path></svg>
  </template>
