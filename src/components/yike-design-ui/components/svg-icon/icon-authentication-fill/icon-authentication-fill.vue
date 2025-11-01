
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconAuthenticationFill',
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
    const cls = ['yk-icon', 'icon-authentication-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M530.1 59.443 649.83 179.2H819.2a25.6 25.6 0 0 1 25.6 25.6v169.318l119.757 119.783a25.6 25.6 0 0 1 0 36.198L844.774 649.83l.026 169.37a25.6 25.6 0 0 1-25.6 25.6H649.83L530.1 964.557a25.6 25.6 0 0 1-36.2 0L374.119 844.774 204.8 844.8a25.6 25.6 0 0 1-25.6-25.6V649.83L59.443 530.1a25.6 25.6 0 0 1 0-36.2L179.2 374.119V204.8a25.6 25.6 0 0 1 25.6-25.6h169.318L493.901 59.443a25.6 25.6 0 0 1 36.198 0m-145 312.679h-87.295L512 730.522l213.888-358.35h-86.989L512.077 584.449z"></path></svg>
  </template>
