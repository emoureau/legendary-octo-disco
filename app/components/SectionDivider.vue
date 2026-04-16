<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="flex items-center gap-3.5 py-5">
    <div class="flex-1 h-px bg-outline-variant" />
    <span class="font-mono text-xs font-medium tracking-[0.32em] uppercase text-primary whitespace-nowrap px-[0.65rem] py-[0.2rem] border border-primary/30">{{ label }}</span>
    <div class="flex-1 h-px bg-outline-variant" />
  </div>
</template>
