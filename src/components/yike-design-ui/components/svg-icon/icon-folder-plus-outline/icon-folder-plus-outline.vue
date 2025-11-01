
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconFolderPlusOutline',
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
    const cls = ['yk-icon', 'icon-folder-plus-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M342.707 102.4a51.2 51.2 0 0 1 42.445 22.554l53.862 79.846H921.6a51.2 51.2 0 0 1 51.2 51.2v640a51.2 51.2 0 0 1-51.2 51.2H102.4A51.2 51.2 0 0 1 51.2 896V153.6a51.2 51.2 0 0 1 51.2-51.2zM128 870.4h768V281.6H398.208l-69.12-102.4H128zM550.4 384v153.6H704v76.8H550.4V768h-76.8V614.4H320v-76.8h153.6V384z"></path></svg>
  </template>
