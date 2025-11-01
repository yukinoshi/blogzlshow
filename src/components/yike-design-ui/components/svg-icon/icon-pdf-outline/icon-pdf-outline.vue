
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconPdfOutline',
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
    const cls = ['yk-icon', 'icon-pdf-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M629.53 51.2a25.6 25.6 0 0 1 18.15 7.526l266.445 267.367a25.6 25.6 0 0 1 7.475 18.073V947.2a25.6 25.6 0 0 1-25.6 25.6H128a25.6 25.6 0 0 1-25.6-25.6V76.8A25.6 25.6 0 0 1 128 51.2zM608.282 128H179.2v768h665.6V365.312zM386.406 708.096h-55.5v116.992h-75.008V493.594h137.984c80.025 1.996 121.523 37.017 124.518 105.01 1.024 72.986-43.008 109.492-131.994 109.492M380.39 552.09h-49.484v99.02h49.484c39.015-1.024 59.008-17.51 60.007-49.51-.999-32-20.992-48.512-60.007-49.51M656 809.6h-39.168v-16c-6.4 12.8-19.482 19.2-39.22 19.2-33.612-2.125-51.2-22.938-52.812-62.413-.512-46.925 18.688-70.144 57.6-69.58 16.538 1.049 28.006 8.268 34.406 21.58v-80H656zm-38.4-62.413v-6.4c-1.05-18.662-9.6-28.518-25.6-29.593-18.125.537-27.443 12.8-27.98 36.812.511 23.45 9.6 35.456 27.186 35.994 17.613 0 26.394-12.288 26.394-36.813m175.104-121.6-11.213 28.007a35.2 35.2 0 0 0-14.387-3.2c-11.213 0-16.794 5.888-16.794 17.612v16h27.981V713.6h-27.955v96.794h-38.4V713.6h-20.813v-29.594h20.813V668.8c-1.075-33.613 14.669-49.613 47.18-48 13.338 0 24.551 1.613 33.614 4.813zM640.154 51.2 921.6 333.568V409.6H563.2V51.2zM640 159.82V332.8h172.39z"></path></svg>
  </template>
