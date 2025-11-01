
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconReadOutline',
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
    const cls = ['yk-icon', 'icon-read-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M344.653 128c56.32 0 112.077 17.075 167.347 51.2l9.754-5.837C573.824 143.104 626.355 128 679.347 128H972.8v742.4H676.762c-58.01 0-112.922 17.075-164.762 51.2-51.84-34.125-106.752-51.2-164.762-51.2H51.2V128zm0 76.8H128v588.8h219.238c43.572 0 85.812 7.629 126.388 22.707L473.6 245.76l-1.971-1.229c-43.52-26.88-85.504-39.731-126.976-39.731m551.347 0H679.347c-36.173 0-72.704 9.754-109.568 29.67l-8.55 4.762-10.829 6.477v570.573a360.5 360.5 0 0 1 115.405-22.528l10.957-.154H896zm-76.8 332.8v76.8h-192v-76.8zm-422.4 0v76.8h-192v-76.8zm422.4-179.2v76.8h-192v-76.8zm-422.4 0v76.8h-192v-76.8z"></path></svg>
  </template>
