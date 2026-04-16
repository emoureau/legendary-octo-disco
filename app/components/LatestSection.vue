<script setup lang="ts">
const DOMAINS_AMOUNT = 6
</script>

<template>
  <ClientOnly>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mx-4 lg:mx-6">
      <Suspense v-for="(_, i) in DOMAINS_AMOUNT" :key="`domain-${i}`">
        <Topic :widget-id="`topic-${i}`" />
        <template #fallback>
          <Skeleton class="aspect-video" />
        </template>
      </Suspense>
    </div>
    <template #fallback>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mx-4 lg:mx-6">
        <Skeleton v-for="i in DOMAINS_AMOUNT" :key="i" class="aspect-video" />
      </div>
    </template>
  </ClientOnly>
</template>
