
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconModifyOutline',
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
    const cls = ['yk-icon', 'icon-modify-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M51.2 896h921.6v76.8H51.2zM765.696 94.106l36.198 36.198a127.82 127.82 0 0 1 4.48 176.307l-4.403 4.634L281.55 830.592l-221.824 5.683 4.608-222.899L584.602 94.029a128.333 128.333 0 0 1 181.094.077m-261.12 188.313L140.467 645.862l-2.304 111.59 110.797-2.84 364.288-363.52zm134.272-134.041-79.923 79.795 108.672 108.672 78.771-78.567 3.098-3.225a51.046 51.046 0 0 0-1.87-70.451l-36.12-36.096a51.507 51.507 0 0 0-72.628-.128"></path></svg>
  </template>
