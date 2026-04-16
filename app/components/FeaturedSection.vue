<template>
  <AsyncSection>
    <FeaturedSectionContent />
    <template #skeleton>
      <div>
        <div class="pt-8 pb-0 mx-4 lg:mx-6 border-b border-on-surface/12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-8">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-on-surface/12">
          <Skeleton v-for="i in 3" :key="i" class="py-7 px-4 lg:px-6" />
        </div>
        <div class="border-t border-on-surface/12 my-0 mx-4 lg:mx-6" />
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:divide-x lg:divide-on-surface/12">
          <Skeleton v-for="i in 5" :key="i" class="py-5 px-4 lg:px-6" />
        </div>
      </div>
    </template>
  </AsyncSection>
</template>
