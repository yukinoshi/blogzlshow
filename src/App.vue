<script setup lang="ts">
import { onMounted } from 'vue';
import { loadFingerprint } from './utils/loadfingerprint';

// import TopBar from './components/bar/TopBar.vue';
onMounted(() => {
  loadFingerprint();
})
</script>

<template>
  <router-view />
</template>

<style scoped></style>
