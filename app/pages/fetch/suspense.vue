<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-4">
    <NuxtLink to="/fetch" class="text-lg font-bold text-pink-400 hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl">
      Suspense HeavyCard
    </h1>
    <p class="text-xl">
      This page makes 6 calls.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <Suspense>
        <HeavyCard />
        <template #fallback>
          <Skeleton class="h-500 w-80" />
        </template>
      </Suspense>
      <ClientOnly>
        <Suspense>
          <HeavyClientCard />
          <template #fallback>
            <Skeleton class="h-500 w-80" />
          </template>
        </Suspense>
        <template #fallback>
          <Skeleton class="h-500 w-80" />
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
