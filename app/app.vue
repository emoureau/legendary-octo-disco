<script setup lang="ts">
// Inline script runs synchronously in <head> before first paint,
// reading the stored theme preference and setting data-theme on <html>
// to prevent a flash of the wrong color scheme on load.
useHead({
  script: [
    {
      innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}})()`,
      tagPosition: 'head',
      tagPriority: 'critical',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator :height="8" color="yellow" />
  <NuxtPage />
  <DevNav />
</template>
