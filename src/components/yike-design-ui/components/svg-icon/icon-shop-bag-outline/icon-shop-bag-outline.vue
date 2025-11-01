
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconShopBagOutline',
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
    const cls = ['yk-icon', 'icon-shop-bag-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2A204.8 204.8 0 0 1 716.8 256v25.6h129.818a25.6 25.6 0 0 1 25.548 23.706l47.386 640a25.6 25.6 0 0 1-23.629 27.417l-1.894.077H129.97a25.6 25.6 0 0 1-25.6-25.6l.077-1.894 47.386-640a25.6 25.6 0 0 1 25.574-23.706H307.2V256A204.8 204.8 0 0 1 512 51.2m287.053 307.2H716.8v102.4H640V358.4H384v102.4h-76.8V358.4h-82.278L185.088 896h653.798zM512 128a128 128 0 0 0-128 128v25.6h256V256a128 128 0 0 0-128-128"></path></svg>
  </template>
