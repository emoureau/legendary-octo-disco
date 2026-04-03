<script setup lang="ts">
interface Props {
  widgetId: string
}
const props = defineProps<Props>()

const { data: widget } = await useAsyncData(
  `slow-topic-request-${props.widgetId}`,
  async () => {
    const mainResult = await fetchMockData(
      { title: `Magical ${props.widgetId}`, subIds: [101, 102, 103, 104, 105] },
      2000,
    )
    const subDetails = await Promise.all(
      mainResult.subIds.map(id =>
        fetchMockData({ id, detail: `Detail for ${id}` }, 2000),
      ),
    )
    return { ...mainResult, subItems: subDetails }
  },
  {
    watch: [() => props.widgetId],
  },
)

function say(message: string) {
  alert(message)
}

const TOPIC_CARDS_AMOUNT = 4
</script>

<template>
  <section>
    <h3 class="mb-3 pb-3 border-b border-white/12">
      <NuxtLink
        v-bind="$attrs"
        class="flex items-center justify-between gap-2 group hover:cursor-pointer"
        @click="say('Go to Topic!')"
      >
        <span class="text-xs font-semibold tracking-wider uppercase text-white/75 group-hover:text-blue-300 transition-colors duration-fast">{{ widget?.title }}</span>
        <span class="text-xs text-white/75 group-hover:text-blue-300 transition-colors duration-fast" aria-hidden="true">More →</span>
      </NuxtLink>
    </h3>
    <div class="grid grid-cols-1 gap-1 divide-y divide-white/12">
      <Card
        :key="`md-${widgetId}`"
        variant="md"
        class="py-2"
      />
      <Card
        v-for="(_, i) in TOPIC_CARDS_AMOUNT"
        :key="`sm-${widgetId}-${i}`"
        variant="sm"
        class="py-2"
      />
    </div>
  </section>
</template>
