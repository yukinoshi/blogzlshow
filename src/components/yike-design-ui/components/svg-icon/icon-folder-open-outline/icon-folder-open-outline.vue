
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconFolderOpenOutline',
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
    const cls = ['yk-icon', 'icon-folder-open-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M368.307 102.4a51.2 51.2 0 0 1 42.445 22.554l53.862 79.846H870.4a51.2 51.2 0 0 1 51.2 51.2v102.4h48.896a25.6 25.6 0 0 1 25.6 25.6l-.102 2.227L951.27 900.43a51.2 51.2 0 0 1-51.02 46.771h-776.5a51.2 51.2 0 0 1-51.02-46.771L28.006 386.227a25.6 25.6 0 0 1 23.296-27.725l1.101-.102H102.4V153.6a51.2 51.2 0 0 1 51.2-51.2zm546.304 332.8H109.363L147.2 870.4h729.574zm-559.923-256H179.2v179.2h665.6v-76.8H423.808z"></path></svg>
  </template>
