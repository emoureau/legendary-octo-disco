<script setup lang="ts">
/**
 * HTTP cache headers from Nitro
 *
 * defineCachedEventHandler sets cache-related response headers automatically.
 * This page captures and displays those raw headers so you can connect the
 * maxAge: 10 setting in posts.cached.ts to what the browser actually receives.
 *
 * Headers to look for:
 *   Cache-Control — tells the browser/CDN how long to cache the response
 *   X-Nitro-Cache  — Nitro's own header: 'HIT' or 'MISS'
 *   Age            — seconds since the cached entry was created (set by some proxies)
 *   Last-Modified  — timestamp of when the cached entry was last computed
 *
 * Note: In Nuxt dev mode, requests go through the Vite dev server which may
 * strip or alter some headers. The most reliable way to see all headers is the
 * browser DevTools → Network tab → response headers for /api/posts.cached.
 * This page captures what survives the client-side useFetch response hook.
 */

interface PostResponse {
  posts: Array<{ id: number; title: string }>
  fetchedAt: string
  requestId: string
}

const capturedHeaders = ref<Record<string, string>>({})

const HEADERS_TO_CAPTURE = [
  'cache-control',
  'x-nitro-cache',
  'age',
  'last-modified',
  'etag',
  'expires',
  'pragma',
]

const { data, pending, refresh } = useFetch<PostResponse>('/api/posts.cached', {
  onResponse({ response }) {
    const captured: Record<string, string> = {}
    for (const header of HEADERS_TO_CAPTURE) {
      const value = response.headers.get(header)
      if (value) captured[header] = value
    }
    capturedHeaders.value = captured
  },
})

const clientRefreshedAt = ref<string | null>(null)

function doRefresh() {
  clientRefreshedAt.value = new Date().toLocaleTimeString()
  capturedHeaders.value = {}
  refresh()
}
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-6">
    <NuxtLink to="/fetch" class="text-lg font-bold text-primary hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl font-bold tracking-tight text-on-surface">
      Cache headers
    </h1>
    <p class="text-xl text-on-surface-variant leading-relaxed">
      Raw HTTP response headers from <code>/api/posts.cached</code> (Nitro <code>maxAge: 10</code>).
      <br>Open DevTools → Network for the full picture — some headers may be stripped in dev.
    </p>

    <div class="flex gap-4 items-center">
      <button class="text-xs text-on-surface-muted underline hover:no-underline" @click="doRefresh()">
        Refresh
      </button>
      <span v-if="clientRefreshedAt" class="text-xs text-on-surface-muted">
        Refreshed at {{ clientRefreshedAt }}
      </span>
    </div>

    <p :class="[pending ? 'text-error' : 'text-positive']">
      {{ pending ? 'Loading...' : 'Loaded' }}
    </p>

    <div class="border border-outline p-6 font-mono text-sm flex flex-col gap-2">
      <div class="text-on-surface-muted mb-2">
        Response headers captured via <code>onResponse</code>:
      </div>
      <template v-if="Object.keys(capturedHeaders).length">
        <div v-for="(value, key) in capturedHeaders" :key="key">
          <span class="text-primary">{{ key }}</span>: {{ value }}
        </div>
      </template>
      <div v-else class="text-on-surface-muted">
        No cache headers captured yet (or they were stripped by the dev proxy).
      </div>
      <hr class="border-outline-variant my-2">
      <div class="text-on-surface-muted">
        Data:
      </div>
      <div>requestId: <span class="text-primary">{{ data?.requestId ?? '—' }}</span></div>
      <div>fetchedAt: {{ data?.fetchedAt ?? '—' }}</div>
      <div>posts: {{ data?.posts?.length ?? '—' }} items</div>
    </div>

    <p class="text-sm text-on-surface-muted border border-outline p-4 rounded-md">
      Tip: In the browser DevTools Network tab, look for <code>x-nitro-cache: HIT</code> on
      subsequent requests within the 10-second window. That header is the clearest signal that
      Nitro's cache layer intercepted the request.
    </p>
  </div>
</template>
