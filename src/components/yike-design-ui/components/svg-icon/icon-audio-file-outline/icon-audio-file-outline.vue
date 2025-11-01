
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconAudioFileOutline',
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
    const cls = ['yk-icon', 'icon-audio-file-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M921.6 947.2a25.6 25.6 0 0 1-25.6 25.6H128a25.6 25.6 0 0 1-25.6-25.6V76.8A25.6 25.6 0 0 1 128 51.2h512.154L921.6 333.568zM563.2 128h-384v768h665.6V409.6H563.2zm25.6 334.208h-.026l108.647 108.595-47.079 47.079-61.542-61.594V729.6l-.026 1.075.026 13.133h-.87a115.2 115.2 0 1 1-65.69-118.656V462.208zM473.6 680.96a48.64 48.64 0 1 0 48.64 49.28l-.026-1.28-.128-3.149A48.64 48.64 0 0 0 473.6 680.96M640 159.82V332.8h172.39z"></path></svg>
  </template>
