<script setup lang="ts">
const SMALL_CARDS_AMOUNT = 8
</script>

<template>
  <section class="flex flex-col gap-6">
    <div class="flex items-center gap-4 mx-1 lg:mx-6">
      <div class="flex-1 h-px bg-white/12" />
      <h2 id="latest-heading" class="text-sm font-semibold tracking-wider uppercase text-on-surface-muted px-2">
        <NuxtLink to="/" class="ml-auto text-link flex items-center gap-1 group hover:link-hover hover:underline">
          Latest  →
        </NuxtLink>
      </h2>
      <div class="flex-1 h-px bg-white/12" />
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-white/12 mx-4 lg:mx-6"
    >
      <div>
        <Card
          v-for="(_, i) in SMALL_CARDS_AMOUNT / 2"
          :key="`sm-${i}`"
          variant="sm"
          class="py-3 lg:pe-6"
        />
      </div>
      <div>
        <Card
          v-for="(_, i) in SMALL_CARDS_AMOUNT / 2"
          :key="`sm-${i}`"
          variant="sm"
          class="py-3 lg:ps-6"
        />
      </div>
    </div>
  </section>
</template>
