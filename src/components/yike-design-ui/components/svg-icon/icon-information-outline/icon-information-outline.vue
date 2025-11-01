
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconInformationOutline',
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
    const cls = ['yk-icon', 'icon-information-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 76.8c254.49 0 460.8 183.373 460.8 409.6S766.49 896 512 896c-42.42 0-83.507-5.094-122.522-14.643L215.04 957.235a25.6 25.6 0 0 1-35.84-23.475V769.715c-79.283-73.574-128-173.389-128-283.315C51.2 260.173 257.51 76.8 512 76.8m0 76.8c-213.965 0-384 151.142-384 332.8 0 85.043 37.069 165.427 103.424 227.02L256 736.206v119.45l126.592-55.04 25.14 6.143C441.343 814.976 476.313 819.2 512 819.2c213.965 0 384-151.142 384-332.8S725.965 153.6 512 153.6m0 409.6V640H281.6v-76.8zm230.4-204.8v76.8H281.6v-76.8z"></path></svg>
  </template>
