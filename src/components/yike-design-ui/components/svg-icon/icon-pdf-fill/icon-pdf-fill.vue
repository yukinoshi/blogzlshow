
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconPdfFill',
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
    const cls = ['yk-icon', 'icon-pdf-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M563.2 51.2v358.4h358.4v512a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V102.4a51.2 51.2 0 0 1 51.2-51.2zM393.907 519.194H255.923v331.52h74.983V733.722h55.5c88.986 0 132.992-36.532 131.994-109.517-2.995-67.994-44.493-103.015-124.493-105.011M656 648.013h-39.168v80c-6.4-13.338-17.894-20.557-34.432-21.607q-58.368-.806-57.6 69.581c1.613 39.475 19.2 60.288 52.813 62.413 19.712 0 32.793-6.4 39.193-19.2v16H656V647.987zm103.091-1.613c-32.512-1.613-48.256 14.413-47.18 48v15.206h-20.813V739.2h20.812v96.794h38.4V739.2h27.981v-29.594h-27.955v-16c0-11.75 5.58-17.612 16.794-17.612 4.787 0 9.6 1.075 14.387 3.2l11.213-27.981c-9.063-3.2-20.276-4.813-33.613-4.813zM592 736.794c16 1.075 24.55 10.93 25.6 29.619v6.4c0 24.525-8.78 36.787-26.368 36.787-17.613-.512-26.675-12.544-27.213-35.994.512-24.012 9.856-36.275 27.981-36.812M380.39 577.69c39.015 1.024 59.008 17.51 60.007 49.51-.999 32-20.992 48.512-60.007 49.51h-49.484v-99.02zM640.154 51.2l280.678 281.6H640V51.2z"></path></svg>
  </template>
