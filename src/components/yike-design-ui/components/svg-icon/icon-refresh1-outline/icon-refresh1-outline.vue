
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconRefresh1Outline',
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
    const cls = ['yk-icon', 'icon-refresh1-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="m70.58 508.544 185.6 93.235-79.284 37.376a357.48 357.48 0 0 0 218.42 211.712c187.135 64.461 391.116-35.02 455.551-222.182l72.627 25.011c-78.259 227.251-325.913 348.058-553.19 269.798A434.23 434.23 0 0 1 107.264 672l-83.149 39.22zm781.286 117.248 72.832 24.371-1.178 3.43-72.627-24.96.973-2.867zM103.27 362.496c81.178-222.208 325.786-339.328 550.4-261.99a434.23 434.23 0 0 1 262.887 251.033l78.95-37.222-46.438 202.675-185.6-93.26 83.456-39.374a357.48 357.48 0 0 0-218.24-211.225c-187.162-64.461-391.117 35.046-455.578 222.208l-.486 1.433-72.704-24.678z"></path></svg>
  </template>
