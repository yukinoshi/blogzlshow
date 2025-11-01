
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconRegisterOutline',
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
    const cls = ['yk-icon', 'icon-register-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M512 51.2a217.6 217.6 0 1 1 0 435.2 217.6 217.6 0 0 1 0-435.2m0 76.8a140.8 140.8 0 1 0 0 281.6 140.8 140.8 0 0 0 0-281.6m0 409.6c96.64 0 186.342 29.747 260.429 80.589l-42.957 63.693a382.1 382.1 0 0 0-209.434-67.405L512 614.4c-193.28 0-353.229 142.797-380.032 328.653l-.589 4.147H54.016C79.462 716.8 274.816 537.6 512 537.6m371.2 153.6v89.6h89.6v76.8h-89.6v89.6h-76.8v-89.6h-89.6v-76.8h89.6v-89.6z"></path></svg>
  </template>
