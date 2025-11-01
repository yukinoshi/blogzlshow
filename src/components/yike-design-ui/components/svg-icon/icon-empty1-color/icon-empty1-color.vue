
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconEmpty1Color',
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
    const cls = ['yk-icon', 'icon-empty1-color']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><g fill="#A5AAB8" fill-rule="evenodd" transform="translate(16 3)"><path fill-opacity=".258" d="M83.586 57v28.759a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V57h22.275a2 2 0 0 1 2 2v2.483a4 4 0 0 0 3.801 3.995l.2.005H55.31a4 4 0 0 0 4-4V59a2 2 0 0 1 2-2z"></path><path fill-opacity=".339" d="m5.931 57.069 17.103-22.138.017 14.613-2.943 7.525zm77.603 0-17.5-22.096v14.613l3.323 7.483z"></path><path fill-opacity=".22" d="M23.034 34.931h43v14.655h-43z"></path><path fill-opacity=".12" d="m66.034 49.586 3.323 7.483H61.24a2 2 0 0 0-2 2v2.483a4 4 0 0 1-4 4H34.207a4 4 0 0 1-4-4v-2.484a2 2 0 0 0-2-2l-8.099.001 2.926-7.483z"></path><ellipse cx="44.586" cy="102.172" fill-opacity=".16" rx="26.586" ry="5.172"></ellipse><path fill-opacity=".179" d="M60.693 21.724a7.9 7.9 0 1 1 1.142-15.717A10.86 10.86 0 0 1 71.555 0c5.21 0 9.563 3.668 10.618 8.562h.013l.23-.004a6.583 6.583 0 0 1 0 13.166H60.694z"></path><path fill-opacity=".137" d="M5.172 31.483v-.002l-.123-.003C2.241 31.363 0 29.023 0 26.154c0-2.944 2.358-5.33 5.266-5.33q.39.001.763.056c1.187-2.403 3.643-4.052 6.479-4.052 3.473 0 6.376 2.475 7.079 5.777l.162-.004c2.424 0 4.389 1.988 4.389 4.44 0 2.427-1.923 4.399-4.31 4.441H5.172z"></path></g></svg>
  </template>
