
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconTrophyOutline',
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
    const cls = ['yk-icon', 'icon-trophy-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M230.4 947.2v-76.8h243.2V739.814C344.422 722.202 243.123 616.986 231.5 485.99A166.4 166.4 0 0 1 76.8 320V128h153.6V76.8h563.2V128h153.6v192a166.4 166.4 0 0 1-154.752 165.99c-11.571 130.97-112.87 236.186-242.022 253.799L550.4 870.4h243.2v76.8zm486.4-793.6H307.2v307.2a204.8 204.8 0 0 0 198.4 204.698l6.4.102a204.8 204.8 0 0 0 204.8-204.8zm-486.4 51.2h-76.8V320a89.6 89.6 0 0 0 76.8 88.704zm640 0h-76.8v203.878A89.6 89.6 0 0 0 870.4 320z"></path></svg>
  </template>
