<script setup lang="ts">
/**
 * useAsyncData key deduplication
 *
 * The key you pass to useAsyncData is how Nuxt deduplicates requests — it's also
 * the GOTCHA flagged in /fetch/index.vue.
 *
 * This page has three useAsyncData calls:
 *   - A and B share the key 'post-1'  → same reactive state, callback fires ONCE
 *   - C uses a distinct key 'post-1-b' → independent reactive state, fires separately
 *
 * Watch fetchCount for each: A and B will both show 1, but that 1 is the SAME call.
 * Changing the data in A will immediately update B because they're the same ref.
 *
 * The practical gotcha: if you navigate away and back, or use the same key on two
 * different pages, you may get stale data from the previous page's payload.
 */

const fetchCountA = ref(0)
const fetchCountB = ref(0)
const fetchCountC = ref(0)

// A and B share the same key — Nuxt treats them as one fetch
const { data: dataA, pending: pendingA, refresh: refreshA } = useAsyncData('post-1', async () => {
  fetchCountA.value++
  return await $fetch<PostResponse>('/api/posts/1')
})

const { data: dataB, pending: pendingB } = useAsyncData('post-1', async () => {
  // This callback will NOT fire — Nuxt deduplicates on the key 'post-1'.
  // fetchCountB stays at 0 to make this obvious.
  fetchCountB.value++
  return await $fetch<PostResponse>('/api/posts/1')
})

// C uses a different key — fully independent
const { data: dataC, pending: pendingC, refresh: refreshC } = useAsyncData('post-1-b', async () => {
  fetchCountC.value++
  return await $fetch<PostResponse>('/api/posts/1')
})

interface PostResponse {
  post: { id: number, title: string }
  fetchedAt: string
  requestId: string
}
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-6">
    <NuxtLink to="/fetch" class="text-lg font-bold text-violet-400 hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl">
      Key deduplication
    </h1>
    <p class="text-xl">
      Two <code>useAsyncData</code> calls with the same key share a single request and reactive state.
      <br>A third with a different key is independent.
    </p>

    <div class="grid grid-cols-3 gap-6">
      <!-- A -->
      <div class="flex flex-col gap-3 border border-violet-500/30 p-6 rounded-md">
        <h2 class="text-lg font-bold text-violet-400">
          A — key: <code>'post-1'</code>
        </h2>
        <p :class="[pendingA ? 'text-rose-300' : 'text-green-300']">
          {{ pendingA ? 'Loading...' : 'Loaded' }}
        </p>
        <div class="border border-olive-600 p-4 font-mono text-sm flex flex-col gap-1">
          <div>fetchCount: <ClientOnly><span class="text-violet-300">{{ fetchCountA }}</span></ClientOnly></div>
          <div>requestId: {{ dataA?.requestId ?? '—' }}</div>
          <div>fetchedAt: {{ dataA?.fetchedAt ?? '—' }}</div>
        </div>
        <button class="text-xs text-gray-500 underline hover:no-underline self-start" @click="refreshA()">
          Refresh A
        </button>
      </div>

      <!-- B -->
      <div class="flex flex-col gap-3 border border-violet-500/30 p-6 rounded-md">
        <h2 class="text-lg font-bold text-violet-400">
          B — key: <code>'post-1'</code> (same)
        </h2>
        <p :class="[pendingB ? 'text-rose-300' : 'text-green-300']">
          {{ pendingB ? 'Loading...' : 'Loaded' }}
        </p>
        <div class="border border-olive-600 p-4 font-mono text-sm flex flex-col gap-1">
          <div>fetchCount: <ClientOnly><span class="text-violet-300">{{ fetchCountB }}</span> ← stays 0</ClientOnly></div>
          <div>requestId: {{ dataB?.requestId ?? '—' }}</div>
          <div>fetchedAt: {{ dataB?.fetchedAt ?? '—' }}</div>
        </div>
        <p class="text-xs text-gray-500">
          B's callback never fires. It piggybacks on A's result.
          <br>Refresh A → B's data updates too.
        </p>
      </div>

      <!-- C -->
      <div class="flex flex-col gap-3 border border-blue-500/30 p-6 rounded-md">
        <h2 class="text-lg font-bold text-blue-400">
          C — key: <code>'post-1-b'</code> (different)
        </h2>
        <p :class="[pendingC ? 'text-rose-300' : 'text-green-300']">
          {{ pendingC ? 'Loading...' : 'Loaded' }}
        </p>
        <div class="border border-olive-600 p-4 font-mono text-sm flex flex-col gap-1">
          <div>fetchCount: <ClientOnly><span class="text-blue-300">{{ fetchCountC }}</span></ClientOnly></div>
          <div>requestId: {{ dataC?.requestId ?? '—' }}</div>
          <div>fetchedAt: {{ dataC?.fetchedAt ?? '—' }}</div>
        </div>
        <button class="text-xs text-gray-500 underline hover:no-underline self-start" @click="refreshC()">
          Refresh C
        </button>
      </div>
    </div>

    <p class="text-sm text-gray-500 border border-yellow-500/30 p-4 rounded-md">
      Gotcha: using the same key on different pages means the second page inherits the first page's
      cached payload — even if the data should be different. Always use unique, descriptive keys.
    </p>
  </div>
</template>
