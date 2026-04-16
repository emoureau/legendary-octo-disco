<script setup lang="ts">
const route = useRoute()

const pages = [
  { path: '/', label: 'Home' },
  { path: '/editorial', label: 'Editorial' },
  { path: '/editorial-sticky-nav', label: 'Sticky Nav' },
  { path: '/search', label: 'Search' },
  { path: '/sidebar-split', label: 'Sidebar Split' },
  { path: '/layout', label: 'Layout' },
  { path: '/fetch', label: 'Fetch →' },
  { path: '/tokens', label: 'Tokens' },
]

// null while SSR / before onMounted — button is hidden via v-if
// to avoid hydration mismatches.
const theme = ref<'light' | 'dark' | null>(null)

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    theme.value = stored
  }
  else {
    theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
})

const isDark = computed(() => theme.value === 'dark')

function toggleTheme() {
  const next: 'light' | 'dark' = isDark.value ? 'light' : 'dark'
  theme.value = next
  document.documentElement.dataset.theme = next
  try { localStorage.setItem('theme', next) }
  catch (e) {}
}
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-1 px-3 py-2 bg-black/80 backdrop-blur border-t border-white/10 text-xs font-mono">
    <span class="text-white/30 tracking-widest uppercase mr-2 shrink-0">Lab</span>
    <NuxtLink
      v-for="page in pages"
      :key="page.path"
      :to="page.path"
      class="px-2.5 py-1 rounded transition-colors duration-150 whitespace-nowrap"
      :class="route.path === page.path
        ? 'bg-white/15 text-white'
        : 'text-white/45 hover:text-white hover:bg-white/8'"
    >
      {{ page.label }}
    </NuxtLink>

    <button
      v-if="theme !== null"
      class="ml-auto px-2 py-1 rounded text-white/45 hover:text-white hover:bg-white/8 transition-colors duration-150 cursor-pointer"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="text-base" />
    </button>
  </nav>
</template>
