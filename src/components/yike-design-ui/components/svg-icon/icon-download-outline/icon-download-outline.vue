
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconDownloadOutline',
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
    const cls = ['yk-icon', 'icon-download-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M550.4 384v463.898l88.32-88.32 54.298 54.323L512 994.918 330.982 813.901l54.298-54.298 88.32 88.32V384zm-64-332.8a332.8 332.8 0 0 1 296.09 180.736C903.962 245.478 998.4 348.493 998.4 473.6c0 130.022-102.042 236.211-230.4 242.867v.333h-51.2V640h42.752l4.48-.23a166.4 166.4 0 0 0 157.44-160.154l.128-6.016a166.4 166.4 0 0 0-147.61-165.35l-40.934-4.557-18.842-36.608a255.95 255.95 0 0 0-219.75-138.957L486.4 128c-136.14 0-248.294 106.573-255.59 241.818l-2.97 54.195-52.07 15.334A102.4 102.4 0 0 0 204.8 640h102.4v76.8H204.8a179.2 179.2 0 0 1-50.688-351.13C163.584 190.413 308.736 51.2 486.4 51.2"></path></svg>
  </template>
