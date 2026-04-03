<template>
  <ClientOnly>
    <article class="w-full mx-auto py-8 space-y-10">
      <!-- Header + Abstract -->
      <Suspense>
        <ArticleHeader />
        <template #fallback>
          <div class="space-y-4 animate-pulse pb-8 border-b border-white/10">
            <div class="h-4 bg-white/8 rounded w-48" />
            <div class="h-8 bg-white/8 rounded w-full" />
            <div class="h-6 bg-white/8 rounded w-3/4" />
            <div class="flex gap-2">
              <div v-for="i in 4" :key="i" class="h-5 bg-white/8 rounded-full w-20" />
            </div>
            <div class="h-32 bg-white/6 rounded-lg" />
          </div>
        </template>
      </Suspense>

      <!-- Introduction -->
      <Suspense>
        <ArticleIntroduction />
        <template #fallback>
          <div class="space-y-3 animate-pulse">
            <div class="h-4 bg-white/8 rounded w-32" />
            <div v-for="i in 4" :key="i" class="space-y-1.5">
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-5/6" />
            </div>
          </div>
        </template>
      </Suspense>

      <!-- Methods -->
      <Suspense>
        <ArticleMethodology />
        <template #fallback>
          <div class="space-y-5 animate-pulse">
            <div class="h-4 bg-white/8 rounded w-48" />
            <div v-for="i in 3" :key="i" class="space-y-2">
              <div class="h-3 bg-white/8 rounded w-40" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-4/5" />
            </div>
          </div>
        </template>
      </Suspense>

      <!-- Results -->
      <Suspense>
        <ArticleResults />
        <template #fallback>
          <div class="space-y-6 animate-pulse">
            <div class="h-4 bg-white/8 rounded w-24" />
            <div v-for="i in 2" :key="i" class="space-y-2">
              <div class="h-3 bg-white/8 rounded w-56" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-3/4" />
            </div>
            <div v-for="i in 2" :key="`fig-${i}`" class="border border-white/10 rounded-lg overflow-hidden">
              <div class="bg-white/5 aspect-[16/7]" />
              <div class="h-12 bg-white/4 border-t border-white/8" />
            </div>
          </div>
        </template>
      </Suspense>

      <!-- Discussion -->
      <Suspense>
        <ArticleDiscussion />
        <template #fallback>
          <div class="space-y-3 animate-pulse">
            <div class="h-4 bg-white/8 rounded w-32" />
            <div v-for="i in 3" :key="i" class="space-y-1.5">
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-4/5" />
            </div>
          </div>
        </template>
      </Suspense>

      <!-- Conclusion + References -->
      <Suspense>
        <ArticleConclusion />
        <template #fallback>
          <div class="space-y-6 animate-pulse">
            <div class="h-4 bg-white/8 rounded w-28" />
            <div class="space-y-1.5">
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-full" />
              <div class="h-3 bg-white/6 rounded w-2/3" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="h-20 bg-white/4 rounded-lg" />
              <div class="h-20 bg-white/4 rounded-lg" />
            </div>
            <div class="space-y-1.5">
              <div v-for="i in 5" :key="i" class="h-3 bg-white/5 rounded w-full" />
            </div>
          </div>
        </template>
      </Suspense>
    </article>

    <!-- SSR fallback skeleton -->
    <template #fallback>
      <div class="mx-auto max-w-3xl px-4 lg:px-6 py-8 space-y-10 animate-pulse">
        <div class="space-y-4 pb-8 border-b border-white/10">
          <div class="h-4 bg-white/8 rounded w-48" />
          <div class="h-8 bg-white/8 rounded w-full" />
          <div class="h-6 bg-white/8 rounded w-3/4" />
          <div class="h-32 bg-white/6 rounded-lg" />
        </div>
        <div v-for="i in 4" :key="i" class="space-y-3">
          <div class="h-4 bg-white/8 rounded w-32" />
          <div class="h-3 bg-white/6 rounded w-full" />
          <div class="h-3 bg-white/6 rounded w-full" />
          <div class="h-3 bg-white/6 rounded w-3/4" />
        </div>
      </div>
    </template>
  </ClientOnly>
</template>
