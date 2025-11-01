
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconClosedEyeFill',
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
    const cls = ['yk-icon', 'icon-closed-eye-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="m870.298 144.026 51.2 51.2-122.88 122.88a514.3 514.3 0 0 1 170.726 193.868C885.044 679.04 711.884 793.6 512 793.6c-56.832 0-111.488-9.267-162.56-26.342L197.402 919.296l-51.2-51.2zm-184.32 286.668-60.621 60.672a115.2 115.2 0 0 1-134.016 133.99l-60.621 60.647a192 192 0 0 0 255.258-255.309M512 230.4c49.664 0 97.664 7.066 143.053 20.25l-79.949 79.948a192 192 0 0 0-244.48 244.48l-120.32 120.244A514.25 514.25 0 0 1 54.656 512.026C138.956 344.96 312.116 230.4 512 230.4m-3.2 166.451L396.851 508.826l.077-2.253A115.2 115.2 0 0 1 508.8 396.85"></path></svg>
  </template>
