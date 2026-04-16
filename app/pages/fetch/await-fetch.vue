<script setup lang="ts">
let callCount = 0

callCount++
const env = import.meta.server ? '🖥️ SERVER' : '🌐 CLIENT'
console.warn(`[${env}] await useFetch setup call #${callCount}`)

const {
  data,
  pending,
  error,
  refresh,
} = await useFetch('/api/random-number/')
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-4">
    <NuxtLink to="/fetch" class="text-lg font-bold text-secondary hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl font-bold tracking-tight text-on-surface">
      await useFetch()
    </h1>
    <p class="text-xl text-on-surface-variant leading-relaxed">
      This page takes 3 seconds to load on Server and Client.
    </p>
    <p class="border border-outline p-4">
      <code>{{ data?.number || 'It is not possible to see this except on an error.' }}</code>
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
