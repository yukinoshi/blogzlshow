
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconStarFill',
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
    const cls = ['yk-icon', 'icon-star-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M499.456 801.715 244.685 945.126a25.6 25.6 0 0 1-37.658-27.366l57.677-286.592a25.6 25.6 0 0 0-7.782-23.885L41.805 409.293a25.6 25.6 0 0 1 14.387-44.263l290.406-33.715a25.6 25.6 0 0 0 20.327-14.771l121.779-265.78a25.6 25.6 0 0 1 46.54 0l121.806 265.78a25.6 25.6 0 0 0 20.326 14.771l290.406 33.715a25.6 25.6 0 0 1 14.388 44.288L767.053 607.283a25.6 25.6 0 0 0-7.783 23.885l57.677 286.592a25.6 25.6 0 0 1-37.632 27.366l-254.771-143.41a25.6 25.6 0 0 0-25.14 0z"></path></svg>
  </template>
