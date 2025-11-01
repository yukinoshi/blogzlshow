
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconMoonOutline',
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
    const cls = ['yk-icon', 'icon-moon-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M624.896 65.126C824.781 115.456 972.8 296.448 972.8 512c0 254.49-206.31 460.8-460.8 460.8-228.3 0-417.818-166.016-454.4-383.923 45.952 16.512 95.514 25.523 147.2 25.523 240.358 0 435.2-194.842 435.2-435.2 0-38.656-5.043-76.186-14.515-111.872l-.615-2.202zm96.154 124.621-4.352-2.765.025 1.024C712.013 466.714 484.633 691.2 204.8 691.2c-9.19 0-18.33-.256-27.443-.717l-5.735-.41 2.381 4.48a384.44 384.44 0 0 0 329.319 201.345L512 896c212.07 0 384-171.93 384-384 0-133.453-68.66-253.184-174.95-322.253"></path></svg>
  </template>
