<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-5xl py-24 flex flex-col gap-4">
    <NuxtLink to="/fetch" class="text-lg font-bold text-tertiary hover:underline">
      Back to play
    </NuxtLink>

    <h1 class="text-5xl font-bold tracking-tight text-on-surface">
      Suspense HeavyCard
    </h1>
    <p class="text-xl text-on-surface-variant leading-relaxed">
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
