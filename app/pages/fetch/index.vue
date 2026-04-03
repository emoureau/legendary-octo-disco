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
console.log('/fetch')
</script>

<template>
  <div class="mx-auto max-w-5xl py-24 grid grid-cols-4 gap-10">
    <div class="rounded-md bg-blue-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/async-data" class="text-lg font-bold text-blue-400 hover:underline">
        useAsyncData
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-blue-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/await-async-data" class="text-lg font-bold text-blue-400 hover:underline">
        await useAsyncData
      </NuxtLink>
      <small>(blocking)</small>
    </div>
    <div class="rounded-md bg-lime-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/fetch" class="text-lg font-bold text-lime-400 hover:underline">
        useFetch
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-lime-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/await-fetch" class="text-lg font-bold text-lime-400 hover:underline">
        await useFetch
      </NuxtLink>
      <small>(blocking)</small>
    </div>
    <div class="rounded-md bg-orange-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/await-lazy-fetch" class="text-lg font-bold text-orange-400 hover:underline">
        await useLazyFetch
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-pink-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/suspense" class="text-lg font-bold text-pink-400 hover:underline">
        Suspense
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="rounded-md bg-violet-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/cache-nitro" class="text-lg font-bold text-violet-400 hover:underline">
        Nitro cache
      </NuxtLink>
      <small>(defineCachedEventHandler)</small>
    </div>
    <div class="rounded-md bg-violet-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/cache-key-dedup" class="text-lg font-bold text-violet-400 hover:underline">
        Key deduplication
      </NuxtLink>
      <small>(useAsyncData key gotcha)</small>
    </div>
    <div class="rounded-md bg-violet-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/cache-client" class="text-lg font-bold text-violet-400 hover:underline">
        getCachedData
      </NuxtLink>
      <small>(client-side cache control)</small>
    </div>
    <div class="rounded-md bg-violet-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/cache-headers" class="text-lg font-bold text-violet-400 hover:underline">
        Cache headers
      </NuxtLink>
      <small>(HTTP response headers)</small>
    </div>
    <div class="rounded-md bg-violet-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
      <NuxtLink to="/fetch/my-cache" class="text-lg font-bold text-violet-400 hover:underline">
        My cache
      </NuxtLink>
      <small>(non-blocking)</small>
    </div>
    <div class="col-span-3 mt-900 mx-auto max-w-lg rounded-sm bg-blue-300/12 p-6 aspect-square flex flex-col gap-1 justify-center">
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
