<script setup lang="js">
</script>

<template>
  <div>
    <h1 class="sr-only">
      Home Page
    </h1>
    <!-- Featured -->
    <div class="w-full bg-black/16 border-b border-white/12">
      <h2 class="sr-only">
        Featured
      </h2>
      <NuxtLink to="/test" class="text-xs text-gray-500 underline hover:no-underline">
        Test page
      </NuxtLink>
      <section class="mx-auto max-w-7xl py-24">
        <Section1 />
      </section>
    </div>

    <!-- Latest -->
    <div class="w-full border-b border-white/12">
      <section class="mx-auto max-w-7xl py-24">
        <Section2 />
      </section>
    </div>

    <!-- Domains -->
    <div class="w-full border-b border-white/12">
      <section class="mx-auto max-w-7xl py-24">
        <Section3 />
      </section>
    </div>

    <!-- More -->
    <div class="w-full bg-amber-950 border-b border-amber-500">
      <section class="mx-auto max-w-7xl bg-white/12 py-24">
        <Section4 />
      </section>
    </div>
  </div>
</template>
