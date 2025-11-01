
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconBulbOutline',
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
    const cls = ['yk-icon', 'icon-bulb-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M640 896v51.2a25.6 25.6 0 0 1-25.6 25.6H409.6a25.6 25.6 0 0 1-25.6-25.6V896zM512 51.2c190.874 0 345.6 154.726 345.6 345.6 0 135.68-78.182 253.107-192 309.658V832H358.4V706.483c-113.792-56.576-192-174.003-192-309.683 0-188.211 150.451-341.3 337.664-345.523zm0 76.8c-148.454 0-268.8 120.346-268.8 268.8 0 103.168 58.598 195.789 149.376 240.896l42.624 21.197V755.2h153.6l.026-96.333 42.624-21.171A268.77 268.77 0 0 0 780.8 396.8C780.8 248.346 660.454 128 512 128"></path></svg>
  </template>
