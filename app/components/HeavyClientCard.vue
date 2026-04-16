<script setup lang="ts">
const {
  data,
  pending,
  error,
  refresh,
} = await useAsyncData(
  `heavy-client-card`, // Keyed by ID so it refreshes if ID changes
  async () => {
    // 1. Initial Call
    const mainResult = await fetchMockData(
      { title: `Mystical`, subIds: [107, 108, 109, 110, 111] },
      1000,
    )

    // 2. Secondary Calls (5 more calls based on the first result)
    // We use .map to create an array of promises and Promise.all to fetch them in parallel
    const subDetails = await Promise.all(
      mainResult.subIds.map(id =>
        fetchMockData({ id, detail: `Detail for ${id}` }, 3000),
      ),
    )

    // 3. Return the combined object
    return {
      ...mainResult,
      subItems: subDetails,
    }
  },
)
</script>

<template>
  <div>
    <p :class="[pending ? 'text-error' : 'text-positive']">
      {{ pending ? 'Loading...' : 'Loaded' }}
    </p>
    <p>
      <code>{{ error }}</code>
    </p>
    <p>
      <button class="text-xs text-on-surface-muted underline hover:no-underline" @click="refresh()">
        Refresh
      </button>
    </p>
    <pre class="text-xs text-tertiary">
{{ data }}
  </pre>
  </div>
</template>
