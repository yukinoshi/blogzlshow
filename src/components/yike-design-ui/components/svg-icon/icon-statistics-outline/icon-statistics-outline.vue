
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconStatisticsOutline',
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
    const cls = ['yk-icon', 'icon-statistics-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M486.4 102.4v435.2h435.2c0 240.358-194.842 435.2-435.2 435.2S51.2 777.958 51.2 537.6s194.842-435.2 435.2-435.2m-76.8 85.043-1.1.256C248.012 223.232 128 366.387 128 537.6 128 735.54 288.46 896 486.4 896c168.346 0 309.58-116.045 348.058-272.512l2.073-9.088H409.6zm153.6-135.5C783.155 64.69 959.309 240.844 972.032 460.8H563.2zm76.774 90.88v241.151h241.152l-2.15-7.065a359.35 359.35 0 0 0-231.885-231.885L640 142.848z"></path></svg>
  </template>
