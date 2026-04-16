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
  data: uncached,
  pending: uncachedPending,
  refresh: refreshUncached,
} = useFetch('/api/posts')

const {
  data: cached,
  pending: cachedPending,
  refresh: refreshCached,
} = useFetch('/api/posts.cached')

const clientRefreshedAt = ref<string | null>(null)

function refreshBoth() {
  clientRefreshedAt.value = new Date().toLocaleTimeString()
  refreshUncached()
  refreshCached()
}
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-6">
    <NuxtLink to="/fetch" class="text-lg font-bold text-primary hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl font-bold tracking-tight text-on-surface">
      Nitro cache
    </h1>
    <p class="text-xl text-on-surface-variant leading-relaxed">
      Side-by-side: uncached vs <code>defineCachedEventHandler</code> (10s TTL).
      <br>Refresh repeatedly — the cached panel's <code>requestId</code> freezes until the TTL expires.
    </p>

    <div class="flex gap-4">
      <button
        class="text-xs text-on-surface-muted underline hover:no-underline"
        @click="refreshBoth()"
      >
        Refresh both
      </button>
      <span v-if="clientRefreshedAt" class="text-xs text-on-surface-muted">
        You refreshed at {{ clientRefreshedAt }}
      </span>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <!-- Uncached -->
      <div class="flex flex-col gap-3 border border-error/30 p-6 rounded-md">
        <h2 class="text-lg font-bold text-error">
          /api/posts <span class="font-normal text-sm">(uncached)</span>
        </h2>
        <p class="text-xs text-on-surface-muted">
          defineEventHandler — hits JSONPlaceholder every time
        </p>
        <p :class="[uncachedPending ? 'text-error' : 'text-positive']">
          {{ uncachedPending ? 'Loading...' : 'Loaded' }}
        </p>
        <div class="border border-outline p-4 font-mono text-sm flex flex-col gap-1">
          <div>requestId: <span class="text-error">{{ uncached?.requestId ?? '—' }}</span></div>
          <div>fetchedAt: {{ uncached?.fetchedAt ?? '—' }}</div>
          <div>posts: {{ uncached?.posts?.length ?? '—' }} items</div>
        </div>
      </div>

      <!-- Cached -->
      <div class="flex flex-col gap-3 border border-primary/30 p-6 rounded-md">
        <h2 class="text-lg font-bold text-primary">
          /api/posts.cached <span class="font-normal text-sm">(10s TTL)</span>
        </h2>
        <p class="text-xs text-on-surface-muted">
          defineCachedEventHandler — same requestId for up to 10 seconds
        </p>
        <p :class="[cachedPending ? 'text-error' : 'text-positive']">
          {{ cachedPending ? 'Loading...' : 'Loaded' }}
        </p>
        <div class="border border-outline p-4 font-mono text-sm flex flex-col gap-1">
          <div>requestId: <span class="text-primary">{{ cached?.requestId ?? '—' }}</span></div>
          <div>fetchedAt: {{ cached?.fetchedAt ?? '—' }}</div>
          <div>posts: {{ cached?.posts?.length ?? '—' }} items</div>
        </div>
      </div>
    </div>
  </div>
</template>
