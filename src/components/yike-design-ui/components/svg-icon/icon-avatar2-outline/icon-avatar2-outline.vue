
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconAvatar2Outline',
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
    const cls = ['yk-icon', 'icon-avatar2-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2a217.6 217.6 0 1 1 0 435.2 217.6 217.6 0 0 1 0-435.2m0 76.8a140.8 140.8 0 1 0 0 281.6 140.8 140.8 0 0 0 0-281.6m0 409.6c237.184 0 432.538 179.2 457.984 409.6H54.016C79.462 716.8 274.816 537.6 512 537.6m0 76.8c-164.915 0-307.149 104.5-361.011 252.672l-1.178 3.328h724.352l-1.152-3.328C820.071 721.459 681.78 618.01 520.5 614.502z"></path></svg>
  </template>
