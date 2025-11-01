
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconYike1Fill',
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
    const cls = ['yk-icon', 'icon-yike1-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M1260.166 105.6a20 20 0 0 1 17.248 30.08L868.39 850.4a132.54 132.54 0 0 1-114.944 66.944H488.262a20 20 0 0 1-17.248-30.112L880.07 172.544A132.54 132.54 0 0 1 995.014 105.6zm-974.976 0c47.392 0 91.2 25.504 114.912 66.88l6.144 10.688 6.144-10.688a132.54 132.54 0 0 1 114.912-66.88h264.576a20 20 0 0 1 17.248 30.08L400.07 850.4a132.54 132.54 0 0 1-114.976 66.944H20.006a20 20 0 0 1-17.248-30.112L217.99 511.648 2.726 135.712a20.2 20.2 0 0 1-2.592-8.544l-.064-1.504c0-11.072 8.928-20.064 19.904-20.064zm833.28 502.24a20.03 20.03 0 0 1 7.232 7.456l151.744 271.552a20.67 20.67 0 0 1-7.232 27.744 19.23 19.23 0 0 1-9.856 2.72h-304a20 20 0 0 1-19.712-20.32 20.8 20.8 0 0 1 2.656-10.176l152.288-271.552a19.36 19.36 0 0 1 26.88-7.424"></path></svg>
  </template>
