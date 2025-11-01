
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconUpload1Outline',
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
    const cls = ['yk-icon', 'icon-upload1-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="m831.258 537.6 181.017 181.018-54.297 54.297-87.578-87.552v258.355h-76.8V683.853l-89.062 89.088-54.298-54.349zM537.6 102.4c183.808 0 332.8 148.992 332.8 332.8 0 8.627-.333 17.152-.973 25.6h-77.081a265 265 0 0 0 1.254-25.6c0-141.389-114.611-256-256-256l-7.066.102c-131.686 3.584-239.488 106.932-248.345 238.362l-4.122 61.312-60.723 9.42A166.45 166.45 0 0 0 76.8 652.8l.102 6.016A166.4 166.4 0 0 0 234.368 818.97l4.48.23H588.8V896H230.4v-.333C102.042 889.011 0 782.822 0 652.8c0-121.498 89.088-222.208 205.568-240.282C217.216 239.283 361.421 102.4 537.6 102.4"></path></svg>
  </template>
