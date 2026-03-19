<script setup lang="ts">
const DOMAINS_AMOUNT = 6
</script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mx-4 lg:mx-6">
    <template v-for="(_, i) in DOMAINS_AMOUNT" :key="`domain-${i}`">
      <Topic :widget-id="`topic-${i}`" />
    </template>
  </div>
</template>
