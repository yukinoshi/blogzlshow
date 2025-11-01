
  <script setup lang="ts">
    import { CSSProperties, computed } from 'vue'

    defineOptions({
      name: 'IconImageBackupOutline',
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
    const cls = ['yk-icon', 'icon-image-backup-outline']
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap"><path d="M921.6 76.8a25.6 25.6 0 0 1 25.6 25.6v387.917l-76.8 73.933V153.6H153.6v351.334l152.064-108.441 185.088 222.745-1.178.896 73.447 82.125-61.312 50.355-209.536-252.16-138.573 98.79V870.35h419.533L493.235 947.2H102.4a25.6 25.6 0 0 1-25.6-25.6V102.4a25.6 25.6 0 0 1 25.6-25.6zm-256 153.6a128 128 0 1 1 0 256 128 128 0 0 1 0-256m0 76.8a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4m274.637 296.32 54.297 54.323-135.756 135.731 135.756 135.783-54.297 54.323-135.783-135.782L668.698 983.68 614.4 929.357 750.157 793.6 614.4 657.843l54.298-54.323 135.756 135.757z"></path></svg>
  </template>
