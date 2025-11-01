
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconRefreshOutline',
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
    const cls = ['yk-icon', 'icon-refresh-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="m82.048 564.531 196.864 56.474-21.171 73.805-64.256-18.407a357.22 357.22 0 0 0 201.83 174.464c187.136 64.461 391.117-35.02 455.552-222.182l72.627 25.011c-78.259 227.251-325.913 348.058-553.19 269.798a433.82 433.82 0 0 1-248.576-218.88L99.43 782.566l-73.83-21.17zm769.792 61.235 72.858 24.397-1.178 3.43-72.627-24.96.973-2.867zM103.322 362.522c81.1-222.234 325.683-339.354 550.348-262.016a433.8 433.8 0 0 1 247.68 217.139l21.863-76.211 73.83 21.17L940.57 459.47l-196.864-56.474 21.17-73.805 65.818 18.842a357.2 357.2 0 0 0-202.035-174.9c-187.136-64.46-391.091 35.047-455.552 222.209l-.486 1.433-72.704-24.678z"></path></svg>
  </template>
