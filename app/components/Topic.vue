<script setup lang="ts">
interface Props {
  widgetId: string
}
const props = defineProps<Props>()

const {
  data: widget,
  status: widgetStatus,
  error: widgetError,
  refresh,
} = useAsyncData(
  `slow-topic-request-${props.widgetId}`, // Keyed by ID so it refreshes if ID changes
  async () => {
    // 1. Initial Call
    const mainResult = await fetchMockData(
      { title: `Magical ${props.widgetId}`, subIds: [101, 102, 103, 104, 105] },
      2000,
    )

    // 2. Secondary Calls (5 more calls based on the first result)
    // We use .map to create an array of promises and Promise.all to fetch them in parallel
    const subDetails = await Promise.all(
      mainResult.subIds.map(id =>
        fetchMockData({ id, detail: `Detail for ${id}` }, 2000),
      ),
    )

    // 3. Return the combined object
    return {
      ...mainResult,
      subItems: subDetails,
    }
  },
  {
    server: false,
    lazy: true,
    watch: [() => props.widgetId], // Automatically re-fetch if the widgetId prop changes
  },
)

function say(message: string) {
  alert(message)
}

const TOPIC_CARDS_AMOUNT = 4
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
      <section>
        <h3 class="mb-3 pb-3 border-b border-white/12">
          <NuxtLink
            v-bind="$attrs"
            class="flex items-center justify-between gap-2 group hover:cursor-pointer"
            @click="say('Go to Topic!')"
          >
            <span class="text-xs font-semibold tracking-wider uppercase text-white/75 group-hover:text-purple-300 transition-colors duration-fast">{{ widget?.title }}</span>
            <span class="text-xs text-white/75 group-hover:text-purple-300 transition-colors duration-fast" aria-hidden="true">More →
            </span>
          </NuxtLink>
        </h3>
        <template v-if="widgetStatus === 'pending'">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </template>
        <div v-else class="grid grid-cols-1 gap-1 divide-y divide-white/12">
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
    </div>
  </ClientOnly>
</template>
