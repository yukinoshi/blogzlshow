
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconExcelOutline',
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
    const cls = ['yk-icon', 'icon-excel-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M921.6 947.2a25.6 25.6 0 0 1-25.6 25.6H128a25.6 25.6 0 0 1-25.6-25.6V76.8A25.6 25.6 0 0 1 128 51.2h512.154L921.6 333.568zM563.2 128h-384v768h665.6V409.6H563.2zM428.8 493.594l55.5 100.505 9.012 13.491c2.995 6.016 5.478 10.496 7.5 13.517 3.994-7.014 8.986-16.512 14.977-28.518l54.016-98.995h88.499L548.813 660.096 670.31 825.088h-93.03l-65.997-104.986a287 287 0 0 1-9.011-15.001 73 73 0 0 1-4.506-7.501q-8.986 18.01-11.98 22.502l-66.023 104.986H332.8l116.992-164.992L338.79 493.594zM640 159.82V332.8h172.39z"></path></svg>
  </template>
