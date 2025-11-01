
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconEyeOutline',
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
    const cls = ['yk-icon', 'icon-eye-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 230.4c199.885 0 373.018 114.534 457.344 281.574C885.044 679.04 711.884 793.6 512 793.6S138.982 679.066 54.656 512.026C138.956 344.96 312.116 230.4 512 230.4m0 76.8a434.9 434.9 0 0 0-366.464 200.346l-2.816 4.48 2.816 4.48a434.94 434.94 0 0 0 357.248 200.192l9.216.102c150.682 0 287.488-77.21 366.464-200.346l2.816-4.48-2.816-4.48a434.94 434.94 0 0 0-357.248-200.192zm0 38.4a166.4 166.4 0 1 1 0 332.8 166.4 166.4 0 0 1 0-332.8m0 76.8a89.6 89.6 0 1 0 0 179.2 89.6 89.6 0 0 0 0-179.2"></path></svg>
  </template>
