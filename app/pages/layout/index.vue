<script setup lang="ts">
useHead({ title: 'Layout — Sidebar + Article | Layout Lab' })
</script>

<template>
  <header class="w-full h-9 bg-inverse-surface text-inverse-on-surface text-center uppercase tracking-wider px-4 sm:px-6 py-1.5 flex gap-1 items-center justify-center">
    <Icon name="ui:sunglasses-fill" class="text-2xl text-primary" />
    Header // Header
    <Icon name="ui:sunglasses" class="text-2xl text-primary" />
  </header>
  <div class="min-h-[calc(100vh-36px)] flex flex-col justify-between bg-surface">
    <main id="maincontent" class="mx-auto max-w-7xl">
      <h1 class="sr-only">
        Layout Testing Page
      </h1>
      <div class="flex flex-col lg:flex-row w-full gap-10">
        <!-- sidebar -->
        <div class="w-full lg:w-sm lg:shrink-0 bg-surface-container-low">
          <section class="mx-auto">
            <img
              src="https://random.danielpetrica.com/api/random?size=small"
              lt="A random image different from the others"
              loading="lazy"
              class="w-full object-cover rounded-none bg-primary-container mb-8"
            >
            <ArticleSidebar />
          </section>
        </div>

        <!-- content -->
        <div class="w-full grow">
          <ArticleBody />
        </div>
      </div>
    </main>
    <footer class="w-full bg-surface-container-highest text-on-surface-variant text-center uppercase tracking-wider px-4 sm:px-6 py-40">
      Footer // Footer
    </footer>
  </div>
</template>
