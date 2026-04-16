<template>
  <ClientOnly>
    <Suspense>
      <slot />
      <template #fallback><slot name="skeleton" /></template>
    </Suspense>
    <template #fallback><slot name="skeleton" /></template>
  </ClientOnly>
</template>
