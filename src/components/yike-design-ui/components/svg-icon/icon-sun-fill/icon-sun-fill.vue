
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconSunFill',
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
    const cls = ['yk-icon', 'icon-sun-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M550.4 842.598V998.4h-76.8V842.598a336.3 336.3 0 0 0 76.8 0m222.515-123.98 110.183 110.156-54.324 54.324-110.156-110.183a334.8 334.8 0 0 0 54.272-54.272zm-521.83 0a334.8 334.8 0 0 0 54.272 54.272L195.226 883.098l-54.324-54.324zM512 256c141.389 0 256 114.611 256 256S653.389 768 512 768 256 653.389 256 512s114.611-256 256-256m486.4 217.6v76.8H842.598a336.3 336.3 0 0 0 0-76.8zm-816.998 0a336.3 336.3 0 0 0 0 76.8H25.6v-76.8zm13.824-332.698 110.156 110.183a334.8 334.8 0 0 0-54.272 54.272L140.877 195.25l54.323-54.323zm633.548 0 54.324 54.324-110.183 110.156a334.8 334.8 0 0 0-54.272-54.272zM550.4 25.6v155.802a336.3 336.3 0 0 0-76.8 0V25.6z"></path></svg>
  </template>
