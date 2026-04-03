<script setup lang="ts">
/**
 * Nitro server-side caching with defineCachedEventHandler
 *
 * Both panels fetch the same data. The uncached route hits JSONPlaceholder on
 * every request. The cached route computes the response once, stores it in
 * Nitro's in-memory store, and returns that cached version for 10 seconds.
 *
 * The key observable: requestId. The server generates a new UUID on each real
 * computation. If requestId stays the same across multiple refreshes, Nitro
 * served from cache. Once it flips, the TTL expired and the origin was hit again.
 *
 * Note: Nitro's default cache driver is in-memory in dev and does NOT persist
 * across server restarts. Each `npm run dev` starts with a cold cache.
 */

const {
  data,
  pending,
  refresh,
} = useFetch('/api/photos')

const clientRefreshedAt = ref<string | null>(null)
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-6">
    <NuxtLink to="/fetch" class="text-lg font-bold text-violet-400 hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl">
      My cache
    </h1>
    <p class="text-xl">
      Testing...
    </p>

    <div class="flex gap-4">
      <button
        class="text-xs text-gray-500 underline hover:no-underline"
        @click="refresh()"
      >
        Refresh
      </button>
      <span v-if="clientRefreshedAt" class="text-xs text-gray-500">
        You refreshed at {{ clientRefreshedAt }}
      </span>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <div class="flex flex-col gap-3 border border-rose-500/30 p-6 rounded-md">
        <h2 class="text-lg font-bold text-rose-400">
          /api/photos
        </h2>
        <p class="text-xs text-gray-400">
          defineEventHandler — hits JSONPlaceholder every time
        </p>
        <p :class="[pending ? 'text-rose-300' : 'text-green-300']">
          {{ pending ? 'Loading...' : 'Loaded' }}
        </p>
        <div class="border border-olive-600 p-4 font-mono text-sm flex flex-col gap-1">
          <div>requestId: <span class="text-rose-300">{{ data?.requestId ?? '—' }}</span></div>
          <div>fetchedAt: {{ data?.fetchedAt ?? '—' }}</div>
          <div>photos: {{ data?.photos.length ?? '—' }} items</div>
          <code><pre>{{ data?.photos[0] }}</pre></code>
        </div>
      </div>
    </div>
  </div>
</template>
