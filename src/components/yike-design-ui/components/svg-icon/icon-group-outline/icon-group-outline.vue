
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconGroupOutline',
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
    const cls = ['yk-icon', 'icon-group-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1331 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 76.8a217.6 217.6 0 1 1 0 435.2 217.6 217.6 0 0 1 0-435.2m307.2 0a217.6 217.6 0 1 1-101.658 410.035 281.1 281.1 0 0 0 44.903-63.59 140.8 140.8 0 1 0 0-257.741 282 282 0 0 0-44.851-63.54A216.2 216.2 0 0 1 819.2 76.8M512 153.6a140.8 140.8 0 1 0 0 281.6 140.8 140.8 0 0 0 0-281.6m0 409.6c237.184 0 432.538 179.2 457.984 409.6h-77.389l-.563-4.147c-26.445-183.27-182.323-324.685-371.994-328.576L512 640c-193.28 0-353.229 142.797-380.032 328.653l-.589 4.147H54.016C79.462 742.4 274.816 563.2 512 563.2m307.2 0c237.184 0 432.538 179.2 457.984 409.6h-77.389l-.563-4.147c-23.962-166.016-154.112-297.677-319.386-323.891a538.8 538.8 0 0 0-108.672-79.104A465 465 0 0 1 819.2 563.2"></path></svg>
  </template>
