<script setup lang="ts">
/**
 * The key difference from useFetch is that you provide the key manually:
 *
 *
 * useAsyncData('use-async-data', () => fetchMockData(...))
 * //            ^^^^^^^^^^^^^^^ this is how Nuxt deduplicates
 * That string key is how Nuxt matches server payload data to client requests. If you use the same key on two different
 * pages, they'll share cached data — WHICH CAN BE A GOTCHA. <<<=========
 *
 * Why use useAsyncData over useFetch?
 *
 * When your data source isn't a URL (e.g. a DB query in a server composable, calling a Pinia action, combining multiple fetches)
 * When you need more control over the fetching logic
 *
 * // things useFetch can't do as cleanly:
 * useAsyncData('combined', async () => {
 *   const [user, posts] = await Promise.all([getUser(), getPosts()])
 *   return { user, posts }
 * })
 */
console.log('/play')
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 grid grid-cols-3 gap-10">
    <div class="rounded-md bg-purple-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <NuxtLink to="/play/async-data" class="text-lg font-bold text-purple-400 hover:underline">
        useAsyncData
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-purple-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <NuxtLink to="/play/await-async-data" class="text-lg font-bold text-purple-400 hover:underline">
        await useAsyncData
      </NuxtLink>
      <small>(blocking)</small>
    </div>
    <div class="rounded-md bg-lime-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <NuxtLink to="/play/fetch" class="text-lg font-bold text-lime-400 hover:underline">
        useFetch
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-lime-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <NuxtLink to="/play/await-fetch" class="text-lg font-bold text-lime-400 hover:underline">
        await useFetch
      </NuxtLink>
      <small>(blocking)</small>
    </div>
    <div class="rounded-md bg-orange-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <NuxtLink to="/play/await-lazy-fetch" class="text-lg font-bold text-orange-400 hover:underline">
        await useLazyFetch
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-pink-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <NuxtLink to="/play/suspense" class="text-lg font-bold text-pink-400 hover:underline">
        Suspense
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="col-span-3 mt-900 mx-auto max-w-lg rounded-sm bg-purple-300/12 p-6 aspect-square flex flex-col gap-1 items-center justify-center">
      <img
        src="https://random.danielpetrica.com/api/random?size=small"
        alt="A random image different from the others"
        loading="lazy"
        class="w-full aspect-square object-cover rounded-sm bg-container-primary"
      >
      <code>lazy images won't load until they come into the viewport</code>
    </div>
  </div>
</template>
