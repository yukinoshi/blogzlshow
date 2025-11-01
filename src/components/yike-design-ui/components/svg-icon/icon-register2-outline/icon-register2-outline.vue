
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconRegister2Outline',
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
    const cls = ['yk-icon', 'icon-register2-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2a217.6 217.6 0 1 1 0 435.2 217.6 217.6 0 0 1 0-435.2m0 76.8a140.8 140.8 0 1 0 0 281.6 140.8 140.8 0 0 0 0-281.6m0 409.6c95.488 0 184.218 29.056 257.792 78.797l-44.877 62.413A382.6 382.6 0 0 0 520.5 614.502L512 614.4c-164.915 0-307.149 104.5-361.011 252.672l-1.178 3.328H640v76.8H54.016C79.462 716.8 274.816 537.6 512 537.6m371.2 153.6v89.6h89.6v76.8h-89.6v89.6h-76.8v-89.6h-89.6v-76.8h89.6v-89.6z"></path></svg>
  </template>
