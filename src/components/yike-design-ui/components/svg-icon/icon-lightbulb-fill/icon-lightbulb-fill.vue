
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconLightbulbFill',
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
    const cls = ['yk-icon', 'icon-lightbulb-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2c190.874 0 345.6 154.726 345.6 345.6 0 135.68-78.182 253.107-192 309.658V832H358.4V706.483c-113.792-56.576-192-174.003-192-309.683 0-190.874 154.726-345.6 345.6-345.6m152.627 156.16-41.753 51.866a176.69 176.69 0 0 1 17.408 259.072l48.332 45.772c79.13-83.379 90.138-213.862 20.148-310.22a243.5 243.5 0 0 0-44.135-46.464zM384 896h256v51.2a25.6 25.6 0 0 1-25.6 25.6H409.6a25.6 25.6 0 0 1-25.6-25.6z"></path></svg>
  </template>
