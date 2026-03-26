<script setup lang="ts">
const {
  data: widget,
  status: widgetStatus,
  error: widgetError,
  refresh,
} = useAsyncData('slow-featured-request', () =>
  fetchMockData({ title: 'Data loaded successfully! India\'s young are more educated than ever. So why are so many jobless?' }, 5000), {
  server: false, // <--- This is the key for SSR apps
  lazy: true,
})

const MEDIUM_CARDS_AMOUNT = 3
const SMALL_CARDS_AMOUNT = 5
</script>

<template>
  <ClientOnly>
    <div v-if="widgetError && widgetStatus !== 'pending'" class="p-4">
      <p class="text-red-300 mb-2">
        Error loading data: {{ widgetError.message }}
      </p>
      <button class="text-purple-300 hover:text-purple-400 transition-colors duration-200" @click="refresh()">
        Refresh ⟳
      </button>
    </div>
    <div v-else>
      <!-- Hero -->
      <div class="pt-8 pb-0 mx-4 lg:mx-6 border-b border-white/12">
        <div v-if="widgetStatus === 'pending'" class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-8">
          <Skeleton />
          <Skeleton />
        </div>
        <Card v-else show-summary variant="hero" class="pb-8" :title="widget?.title" />
      </div>
      <!-- 3 Md -->
      <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/12">
        <template v-if="widgetStatus === 'pending'">
          <Skeleton v-for="(_, i) in MEDIUM_CARDS_AMOUNT" :key="`md-skel-${i}`" class="py-7 px-4 lg:px-6" />
        </template>
        <Card
          v-for="(_, i) in MEDIUM_CARDS_AMOUNT"
          v-else
          :key="`md-${i}`"
          show-summary
          variant="md"
          class="py-7 px-4 lg:px-6"
        />
      </div>
      <div class="border-t border-white/12 my-0 mx-4 lg:mx-6" />
      <!-- 5 Sm -->
      <div class="grid grid-cols-1 lg:grid-cols-5 lg:divide-x lg:divide-white/12">
        <template v-if="widgetStatus === 'pending'">
          <Skeleton v-for="(_, i) in SMALL_CARDS_AMOUNT" :key="`sm-skel-${i}`" class="py-5 px-4 lg:px-6" />
        </template>
        <Card
          v-for="(_, i) in SMALL_CARDS_AMOUNT"
          v-else
          :key="`sm-${i}`"
          show-summary
          variant="sm"
          class="py-5 px-4 lg:px-6"
        />
      </div>
    </div>
  </ClientOnly>
</template>
