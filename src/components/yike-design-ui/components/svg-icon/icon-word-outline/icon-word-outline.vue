
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconWordOutline',
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
    const cls = ['yk-icon', 'icon-word-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M921.6 947.2a25.6 25.6 0 0 1-25.6 25.6H128a25.6 25.6 0 0 1-25.6-25.6V76.8A25.6 25.6 0 0 1 128 51.2h512.154L921.6 333.568zM563.2 128h-384v768h665.6V409.6H563.2zM370.893 493.594l37.504 222.003c.87 4.377 1.74 12.211 2.637 23.475l.358 4.966v-.64c.102-1.536.614 2.202 1.51 11.213h1.485c2.023-15.001 4.02-28.006 6.016-39.014l50.995-222.003h79.514l53.99 225.024c0 .972.512 2.97 1.485 5.99 2.023 11.98 3.021 22.016 3.021 30.003h1.485c1.024-12.032 2.509-24.499 4.505-37.504l35.994-223.488H726.4l-72.013 331.469H570.42L519.4 613.606a196.3 196.3 0 0 1-5.991-37.504c-1.024 16-2.995 28.493-6.016 37.504l-54.016 211.482h-86.989L294.4 493.594zM640 159.82V332.8h172.39z"></path></svg>
  </template>
