
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconFolderOpenFill',
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
    const cls = ['yk-icon', 'icon-folder-open-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M976.589 409.088a25.6 25.6 0 0 1 25.088 30.797l-97.178 466.56a51.2 51.2 0 0 1-50.125 40.755H76.8l103.578-497.382a51.2 51.2 0 0 1 50.124-40.756H976.59zM317.107 102.4a51.2 51.2 0 0 1 42.445 22.554l53.862 79.846H844.8A51.2 51.2 0 0 1 896 256v76.8H169.626a51.2 51.2 0 0 0-49.076 36.634l-1.024 4.121L25.6 824.32V153.6a51.2 51.2 0 0 1 51.2-51.2z"></path></svg>
  </template>
