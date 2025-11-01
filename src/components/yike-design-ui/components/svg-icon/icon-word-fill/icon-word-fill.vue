
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconWordFill',
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
    const cls = ['yk-icon', 'icon-word-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M563.2 51.2v358.4h358.4v512a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V102.4a51.2 51.2 0 0 1 51.2-51.2zM370.893 519.194H294.4l72.013 331.52h86.989l54.016-211.508c2.97-9.01 4.992-21.504 5.99-37.504.998 14.004 2.995 26.496 5.99 37.504l50.996 211.482h84.019L726.4 519.194h-75.008l-35.994 223.488c-1.996 13.03-3.507 25.523-4.505 37.53h-1.485c0-8.014-1.024-18.023-2.995-30.004a24.6 24.6 0 0 1-1.536-6.016l-53.965-224.998h-79.514l-50.995 222.003c-1.997 11.008-3.993 24.013-6.016 39.014h-1.485c-1.024-10.01-1.51-13.517-1.51-10.496v-.077l-.358-4.966c-.768-9.677-1.51-16.794-2.253-21.376l-.384-2.1zM640.153 51.2l280.679 281.6H640V51.2z"></path></svg>
  </template>
