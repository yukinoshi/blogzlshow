
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconSettingsFill',
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
    const cls = ['yk-icon', 'icon-settings-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M755.2 90.778 998.4 512 755.2 933.222H268.8L25.6 512 268.8 90.778zM512 307.2a204.8 204.8 0 1 0 0 409.6 204.8 204.8 0 0 0 0-409.6m0 76.8a128 128 0 1 1 0 256 128 128 0 0 1 0-256"></path></svg>
  </template>
