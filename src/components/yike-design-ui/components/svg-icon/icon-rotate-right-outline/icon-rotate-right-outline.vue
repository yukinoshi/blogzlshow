
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconRotateRightOutline',
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
    const cls = ['yk-icon', 'icon-rotate-right-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M870.4 384a51.2 51.2 0 0 1 51.2 51.2V896a51.2 51.2 0 0 1-51.2 51.2H281.6a51.2 51.2 0 0 1-51.2-51.2V435.2a51.2 51.2 0 0 1 51.2-51.2zm-25.6 76.8H307.2v409.6h537.6zM491.11 53.58l90.496 90.497 54.298 54.323-54.272 54.272-90.522 90.522-54.272-54.324 53.786-53.836a397.06 397.06 0 0 0-354.79 267.238l-72.602-25.011a473.86 473.86 0 0 1 424.013-318.95l-50.432-50.433z"></path></svg>
  </template>
