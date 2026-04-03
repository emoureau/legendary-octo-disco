<script setup lang="ts">
let callCount = 0

const {
  data,
  pending,
  error,
  refresh,
} = await useAsyncData('await-use-async-data', () => {
  callCount++
  const env = import.meta.server ? '🖥️ SERVER' : '🌐 CLIENT'
  console.log(`[${env}] fetchMockData call #${callCount}`)
  return fetchMockData({ title: 'Server data!' }, 3000)
})

console.log('await useAsyncData setup ran on:', import.meta.server ? '🖥️ SERVER' : '🌐 CLIENT')
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-4">
    <NuxtLink to="/fetch" class="text-lg font-bold text-blue-400 hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl">
      await useAsyncData()
    </h1>
    <p class="text-xl">
      This page takes 3 seconds to load on Server and Client.
    </p>
    <p class="border border-olive-600 p-4">
      <code>{{ data?.title || 'It is not possible to see this except on an error.' }}</code>
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
