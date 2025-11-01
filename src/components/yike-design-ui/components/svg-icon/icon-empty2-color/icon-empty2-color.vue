
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconEmpty2Color',
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
    const cls = ['yk-icon', 'icon-empty2-color']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><g fill="none" fill-rule="evenodd"><path fill="#A4A6AA" d="M67.463 53.88c0 4.365-14.206 7.903-31.731 7.903S4 58.245 4 53.88c0-2.016 3.033-3.856 8.024-5.252v2.161c0 2.661 1.004 4.364 3.364 4.364h40.687c2.36 0 3.364-1.703 3.364-4.364l.001-2.161c4.991 1.396 8.023 3.236 8.023 5.252" opacity=".144"></path><path fill="#8D9196" fill-rule="nonzero" d="M48.703 21.615c1.42 0 2.752.691 3.57 1.853l6.984 9.925a1 1 0 0 1 .182.576v16.82c0 2.661-1.003 4.364-3.364 4.364H15.388c-2.36 0-3.364-1.703-3.364-4.364V33.97a1 1 0 0 1 .183-.576l-.052.081.044-.07.008-.01 6.984-9.926a4.36 4.36 0 0 1 3.57-1.853zM25.04 33.97H13.024l.002 17.011c.035 1.77.569 3.173 2.362 3.173h40.687c1.858 0 2.364-1.506 2.364-3.364V33.97H46.424a1.5 1.5 0 0 0-1.492 1.35l-.218 2.181a1.68 1.68 0 0 1-1.674 1.515H28.423l-.086-.002A1.68 1.68 0 0 1 26.75 37.5l-.219-2.18a1.5 1.5 0 0 0-1.492-1.351zm23.664-11.354H22.76a3.36 3.36 0 0 0-2.75 1.428l-6.282 8.925h11.31a2.5 2.5 0 0 1 2.466 2.087l.022.165.219 2.18a.68.68 0 0 0 .618.613l.06.002H43.04c.35 0 .644-.266.679-.614l.218-2.18a2.5 2.5 0 0 1 2.487-2.252h11.31l-6.28-8.926a3.36 3.36 0 0 0-2.546-1.422z" opacity=".283"></path><rect width="1.682" height="8.831" x="34.891" y="9" fill="#8D9196" opacity=".28" rx=".841"></rect><path fill="#8D9196" d="M24.615 11.096a.84.84 0 0 1 1.117.406l3.021 6.48a.841.841 0 1 1-1.524.71l-3.021-6.479a.84.84 0 0 1 .407-1.117m22.234 0a.84.84 0 0 1 .407 1.117l-3.022 6.48a.841.841 0 1 1-1.524-.712l3.021-6.479a.84.84 0 0 1 1.118-.406" opacity=".28"></path><path fill="#888B8E" d="M58.439 33.969v16.82c0 1.858-.506 3.364-2.364 3.364H15.388c-1.857 0-2.364-1.506-2.364-3.364V33.97H25.04a1.5 1.5 0 0 1 1.492 1.35l.219 2.181a1.68 1.68 0 0 0 1.587 1.513l.086.002H43.04c.864 0 1.588-.655 1.674-1.515l.218-2.18a1.5 1.5 0 0 1 1.492-1.351z" opacity=".081"></path></g></svg>
  </template>
