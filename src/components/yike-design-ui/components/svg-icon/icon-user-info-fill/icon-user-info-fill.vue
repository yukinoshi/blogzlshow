
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconUserInfoFill',
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
    const cls = ['yk-icon', 'icon-user-info-fill']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M998.4 140.8v742.4H25.6V140.8zM345.6 320a115.2 115.2 0 0 0-59.136 214.067A192.13 192.13 0 0 0 154.01 704h66.816a125.44 125.44 0 0 1 249.574 0h66.79a192.08 192.08 0 0 0-132.48-169.907A115.2 115.2 0 0 0 345.6 320m499.2 230.4h-256v66.56h256zM345.6 386.56a48.64 48.64 0 1 1 0 97.28 48.64 48.64 0 0 1 0-97.28m396.8 10.24H588.8v66.56h153.6z"></path></svg>
  </template>
