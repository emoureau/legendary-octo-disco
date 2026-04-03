<template>
  <ClientOnly>
    <Suspense>
      <Section1Content />
      <template #fallback>
        <div>
          <div class="pt-8 pb-0 mx-4 lg:mx-6 border-b border-white/12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-8">
              <Skeleton />
              <Skeleton />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/12">
            <Skeleton v-for="i in 3" :key="i" class="py-7 px-4 lg:px-6" />
          </div>
          <div class="border-t border-white/12 my-0 mx-4 lg:mx-6" />
          <div class="grid grid-cols-1 lg:grid-cols-5 lg:divide-x lg:divide-white/12">
            <Skeleton v-for="i in 5" :key="i" class="py-5 px-4 lg:px-6" />
          </div>
        </div>
      </template>
    </Suspense>
    <template #fallback>
      <div>
        <div class="pt-8 pb-0 mx-4 lg:mx-6 border-b border-white/12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-8">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/12">
          <Skeleton v-for="i in 3" :key="i" class="py-7 px-4 lg:px-6" />
        </div>
        <div class="border-t border-white/12 my-0 mx-4 lg:mx-6" />
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:divide-x lg:divide-white/12">
          <Skeleton v-for="i in 5" :key="i" class="py-5 px-4 lg:px-6" />
        </div>
      </div>
    </template>
  </ClientOnly>
</template>
