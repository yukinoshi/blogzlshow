
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconFillOutline',
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
    const cls = ['yk-icon', 'icon-fill-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M863.682 141.287a199.805 199.805 0 0 1 0 282.574L412.297 875.245a99.6 99.6 0 0 1-61.59 28.772l-68.258 5.894-45.58 3.522c-90.587 6.594-138.665 7.068-144.26 1.499-2.572-2.598-3.946-14.336-4.095-35.266v-8.267q.375-63.126 12.737-216.539a99.78 99.78 0 0 1 28.922-62.613l450.96-450.96a199.805 199.805 0 0 1 282.549 0M546.866 281.475l-363.695 363.72a24.88 24.88 0 0 0-7.218 15.66l-5.47 71.605a4173 4173 0 0 0-4.87 76.95l-1.498 33.392 16.733-.824 24.202-1.449c28.497-1.848 62.539-4.495 102.025-7.892l37.014-3.247a24.63 24.63 0 0 0 15.235-7.118l364.144-364.194zm87.24-87.215-34.242 34.217 176.578 176.627 34.266-34.216A124.878 124.878 0 1 0 634.106 194.26"></path></svg>
  </template>
