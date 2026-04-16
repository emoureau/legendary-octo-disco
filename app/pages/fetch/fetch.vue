<script setup lang="ts">
/**
 * Initial page load (SSR):
 *
 * <script setup> runs on the server → fetch happens → data is serialized into the HTML payload
 * <script setup> runs again on the client for hydration → but Nuxt sees the data already in the payload and skips the actual network request
 * So the script runs twice, but the fetch only fires once (on the server).
 *
 * Client-side navigation (clicking a <NuxtLink>):
 *
 * <script setup> runs on the client only → fetch fires on the client
 */
let callCount = 0

callCount++
const env = import.meta.server ? '🖥️ SERVER' : '🌐 CLIENT'
console.warn(`[${env}] useFetch setup call #${callCount}`)

const {
  data,
  pending,
  error,
  refresh,
} = useFetch('/api/random-number/')
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-4">
    <NuxtLink to="/fetch" class="text-lg font-bold text-secondary hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl font-bold tracking-tight text-on-surface">
      useFetch()
    </h1>
    <p class="text-xl text-on-surface-variant leading-relaxed">
      This page takes 3 seconds to load on Server.
      <br>This page will load immediately on Client and take 3 seconds to load data.
    </p>
    <p class="border border-outline p-4">
      <code>{{ data?.number || 'This data comes in after 3 seconds on Client.' }}</code>
    </p>
    <p>
      <code>{{ error }}</code>
    </p>
    <p :class="[pending ? 'text-error' : 'text-positive']">
      {{ pending ? 'Loading...' : 'Loaded' }}
    </p>
    <p>
      <button class="text-xs text-on-surface-muted underline hover:no-underline" @click="refresh()">
        Refresh
      </button>
    </p>
  </div>
</template>
