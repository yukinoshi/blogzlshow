
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconShopBagFill',
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
    const cls = ['yk-icon', 'icon-shop-bag-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2A204.8 204.8 0 0 1 716.8 256v25.6h129.818a25.6 25.6 0 0 1 25.548 23.706l47.386 640a25.6 25.6 0 0 1-25.523 27.494H129.97a25.6 25.6 0 0 1-25.523-27.494l47.386-640a25.6 25.6 0 0 1 25.574-23.706H307.2V256A204.8 204.8 0 0 1 512 51.2M345.6 384a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4m332.8 0a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4M512 128a128 128 0 0 0-128 128v25.6h256V256a128 128 0 0 0-128-128"></path></svg>
  </template>
