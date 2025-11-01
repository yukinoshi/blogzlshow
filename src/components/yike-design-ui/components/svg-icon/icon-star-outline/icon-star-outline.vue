
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconStarOutline',
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
    const cls = ['yk-icon', 'icon-star-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M523.264 38.298c5.888 2.713 10.624 7.424 13.312 13.312l121.088 264.192a27.11 27.11 0 0 0 21.453 15.59l288.665 33.51a27.034 27.034 0 0 1 15.181 46.772L769.152 608.435a27.02 27.02 0 0 0-8.192 25.242l57.318 284.902a27.034 27.034 0 0 1-39.782 28.877l-253.235-142.54a27.03 27.03 0 0 0-26.522 0l-253.235 142.54a27.034 27.034 0 0 1-39.782-28.877l57.344-284.902a27.03 27.03 0 0 0-8.192-25.242L41.037 411.674a27.034 27.034 0 0 1 15.18-46.772l288.666-33.536c9.37-1.075 17.51-6.988 21.453-15.564L487.424 51.61c6.22-13.568 22.272-19.533 35.84-13.312M512 192.69l-71.91 156.903a108.16 108.16 0 0 1-85.863 62.387l-171.443 19.891 127.002 116.89a108.19 108.19 0 0 1 33.868 94.72l-1.075 6.195-34.048 169.165 150.4-84.634a108.19 108.19 0 0 1 100.25-3.072l5.888 3.072 150.374 84.634-34.048-169.165a108.19 108.19 0 0 1 28.314-96.538l4.505-4.377 126.976-116.89-171.417-19.891a108.19 108.19 0 0 1-83.251-57.063l-2.612-5.324z"></path></svg>
  </template>
