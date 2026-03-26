<template>
  <NuxtLoadingIndicator :height="8" color="yellow" />
  <header class="w-full h-9 bg-mauve-900 text-center uppercase tracking-wider px-4 sm:px-6 py-1.5">
    Header // Header
  </header>
  <div class="min-h-[calc(100vh-36px)] flex flex-col justify-between">
    <main id="maincontent" class="w-full">
      <NuxtPage />
    </main>
    <footer class="w-full bg-mauve-950 text-center uppercase tracking-wider px-4 sm:px-6 py-40">
      Footer // Footer
    </footer>
  </div>
</template>
