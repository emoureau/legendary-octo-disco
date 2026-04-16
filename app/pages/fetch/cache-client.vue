<script setup lang="ts">
/**
 * getCachedData — client-side cache control for useFetch / useAsyncData
 *
 * By default, useFetch always makes a new network request when you call refresh().
 * getCachedData lets you intercept that and return stale data instead, skipping
 * the network entirely.
 *
 * How it works:
 *   - On each fetch (including refresh), Nuxt calls getCachedData(key, nuxtApp)
 *   - If you return a value, Nuxt uses it and skips the network request
 *   - If you return undefined, Nuxt proceeds with the real fetch
 *
 * Important SSR note: On the very first SSR render, the payload has no prior
 * data for this key, so getCachedData always returns undefined → network fires.
 * The interesting behavior only kicks in on subsequent client-side refreshes.
 *
 * This page stores fetched data in a page-scoped Map with a timestamp.
 * "Refresh (cached)" lets getCachedData decide — if the entry is < 30s old, it
 * returns stale data and fetchCount stays the same.
 * "Refresh (force)" clears the Map entry first, so getCachedData returns undefined
 * and a real network request is made.
 */

interface PostResponse {
  post: { id: number; title: string; body: string }
  fetchedAt: string
  requestId: string
}

const CACHE_TTL_MS = 30_000

// Page-scoped client cache: key → { data, storedAt }
const clientCache = new Map<string, { data: PostResponse; storedAt: number }>()

const fetchCount = ref(0)
const lastFetchType = ref<'NETWORK' | 'CACHE HIT' | null>(null)
const cacheAgeSeconds = ref<number | null>(null)

// Update cache age display every second
const cacheAgeInterval = import.meta.client
  ? setInterval(() => {
      const entry = clientCache.get('cache-client-post-1')
      if (entry) {
        cacheAgeSeconds.value = Math.floor((Date.now() - entry.storedAt) / 1000)
      }
    }, 1000)
  : null

onUnmounted(() => {
  if (cacheAgeInterval) clearInterval(cacheAgeInterval)
})

const { data, pending, refresh } = useFetch<PostResponse>('/api/posts/1', {
  key: 'cache-client-post-1',
  getCachedData(key, nuxtApp) {
    const entry = clientCache.get(key)
    if (entry && Date.now() - entry.storedAt < CACHE_TTL_MS) {
      lastFetchType.value = 'CACHE HIT'
      return entry.data
    }
    return undefined // tells Nuxt to proceed with the real fetch
  },
  onResponse({ response }) {
    if (response.ok) {
      fetchCount.value++
      lastFetchType.value = 'NETWORK'
      clientCache.set('cache-client-post-1', {
        data: response._data,
        storedAt: Date.now(),
      })
      cacheAgeSeconds.value = 0
    }
  },
})

function refreshCached() {
  refresh()
}

function refreshForce() {
  clientCache.delete('cache-client-post-1')
  cacheAgeSeconds.value = null
  refresh()
}
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-6">
    <NuxtLink to="/fetch" class="text-lg font-bold text-primary hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl font-bold tracking-tight text-on-surface">
      getCachedData
    </h1>
    <p class="text-xl text-on-surface-variant leading-relaxed">
      Control whether <code>useFetch</code> makes a real network request or returns stale data.
      <br>30-second client-side TTL stored in a page-scoped <code>Map</code>.
    </p>

    <div class="flex gap-4 items-center">
      <button
        class="text-xs text-on-surface-muted underline hover:no-underline"
        @click="refreshCached()"
      >
        Refresh (cached)
      </button>
      <button
        class="text-xs text-error underline hover:no-underline"
        @click="refreshForce()"
      >
        Refresh (force)
      </button>
    </div>

    <p :class="[pending ? 'text-error' : 'text-positive']">
      {{ pending ? 'Loading...' : 'Loaded' }}
    </p>

    <div class="border border-outline p-6 font-mono text-sm flex flex-col gap-2">
      <div>
        last request:
        <span
          :class="lastFetchType === 'CACHE HIT' ? 'text-primary' : 'text-error'"
          class="font-bold"
        >
          {{ lastFetchType ?? '—' }}
        </span>
      </div>
      <div>fetch count (real network): <span class="text-error">{{ fetchCount }}</span></div>
      <div>
        cache age:
        <span class="text-primary">
          {{ cacheAgeSeconds !== null ? `${cacheAgeSeconds}s` : '—' }}
        </span>
        <span class="text-on-surface-muted text-xs"> (TTL: 30s)</span>
      </div>
      <hr class="border-outline-variant my-1">
      <div>requestId: {{ data?.requestId ?? '—' }}</div>
      <div>fetchedAt: {{ data?.fetchedAt ?? '—' }}</div>
      <div>title: {{ data?.post?.title ?? '—' }}</div>
    </div>

    <p class="text-sm text-on-surface-muted border border-outline p-4 rounded-md">
      SSR note: <code>getCachedData</code> always returns <code>undefined</code> on the first server
      render because the client cache is empty. The interesting behavior starts on client-side
      refreshes after the first load.
    </p>
  </div>
</template>
