<script setup lang="ts">
useHead({ title: 'Home — Skeleton & ClientOnly | Layout Lab' })
</script>

<template>
  <header class="w-full h-9 bg-inverse-surface text-inverse-on-surface text-center uppercase tracking-wider px-4 sm:px-6 py-1.5 flex gap-1 items-center justify-center">
    <Icon name="ui:sunglasses-fill" class="text-2xl text-primary" />
    Header // Header
    <Icon name="ui:sunglasses" class="text-2xl text-primary" />
  </header>
  <div class="min-h-[calc(100vh-36px)] flex flex-col justify-between">
    <main id="maincontent" class="w-full">
      <div>
        <h1 class="sr-only">
          Home Page
        </h1>
        <!-- Featured -->
        <div class="w-full bg-on-surface/8 border-b border-on-surface/12">
          <h2 class="sr-only">
            Featured
          </h2>
          <section class="mx-auto max-w-7xl py-24">
            <FeaturedSection />
          </section>
        </div>

        <!-- Latest -->
        <div class="w-full border-b border-on-surface/12">
          <section class="mx-auto max-w-7xl py-24">
            <LatestSection />
          </section>
        </div>

        <!-- Domains -->
        <div class="w-full border-b border-on-surface/12">
          <section class="mx-auto max-w-7xl py-24">
            <TopicsSection />
          </section>
        </div>

        <!-- More -->
        <div class="w-full bg-surface-container-high border-b border-outline">
          <section class="mx-auto max-w-7xl py-24">
            <ArticleSidebar />
          </section>
        </div>
      </div>
    </main>
    <footer class="w-full bg-surface-container-highest text-on-surface-variant text-center uppercase tracking-wider px-4 sm:px-6 py-40">
      Footer // Footer
    </footer>
  </div>
</template>
