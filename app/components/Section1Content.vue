<script setup lang="ts">
const { data: widget } = await useAsyncData('slow-featured-request', () =>
  fetchMockData({ title: 'Data loaded successfully! India\'s young are more educated than ever. So why are so many jobless?' }, 5000))

const MEDIUM_CARDS_AMOUNT = 3
const SMALL_CARDS_AMOUNT = 5
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="pt-8 pb-0 mx-4 lg:mx-6 border-b border-white/12">
      <Card show-summary variant="hero" class="pb-8" :title="widget?.title" />
    </div>
    <!-- 3 Md -->
    <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/12">
      <Card
        v-for="(_, i) in MEDIUM_CARDS_AMOUNT"
        :key="`md-${i}`"
        show-summary
        variant="md"
        class="py-7 px-4 lg:px-6"
      />
    </div>
    <div class="border-t border-white/12 my-0 mx-4 lg:mx-6" />
    <!-- 5 Sm -->
    <div class="grid grid-cols-1 lg:grid-cols-5 lg:divide-x lg:divide-white/12">
      <Card
        v-for="(_, i) in SMALL_CARDS_AMOUNT"
        :key="`sm-${i}`"
        show-summary
        variant="sm"
        class="py-5 px-4 lg:px-6"
      />
    </div>
  </div>
</template>
