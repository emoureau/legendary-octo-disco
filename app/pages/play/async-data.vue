<script setup lang="ts">
/**
 * Initial page load (SSR):
 *
 * <script setup> runs on the server → your callback fires → result is serialized into the HTML payload under the key you provided ('use-async-data')
 * <script setup> runs on the client → Nuxt finds that key in the payload → skips the callback entirely
 *
 * Client-side navigation:
 *
 * <script setup> runs on the client only → your callback fires on the client
 */
let callCount = 0

const {
  data,
  pending,
  error,
  refresh,
} = useAsyncData('use-async-data', () => {
  callCount++
  const env = import.meta.server ? '🖥️ SERVER' : '🌐 CLIENT'
  console.log(`[${env}] fetchMockData call #${callCount}`)
  return fetchMockData({ title: 'Server data!' }, 3000)
})

console.log('useAsyncData setup ran on:', import.meta.server ? '🖥️ SERVER' : '🌐 CLIENT')
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-4">
    <NuxtLink to="/play" class="text-lg font-bold text-purple-400 hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl">
      useAsyncData()
    </h1>
    <p class="text-xl">
      This page takes 3 seconds to load on Server and will load with data.
      <br>This page will load immediately on Client and take 3 seconds to load data.
    </p>
    <p class="border border-olive-600 p-4">
      <code>{{ data?.title || 'This data comes in after 3 seconds on Client.' }}</code>
    </p>
    <p>
      <code>{{ error }}</code>
    </p>
    <p :class="[pending ? 'text-rose-300' : 'text-green-300']">
      {{ pending ? 'Loading...' : 'Loaded' }}
    </p>
    <p>
      <button class="text-xs text-gray-500 underline hover:no-underline" @click="refresh()">
        Refresh
      </button>
    </p>
  </div>
</template>
