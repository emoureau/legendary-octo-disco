<script setup lang="ts">
import { computed, ref } from 'vue'

useHead({ title: 'Search — Faceted Filters | Layout Lab' })

// ── Search ───────────────────────────────────────────────────────
const searchMode = ref<'basic' | 'advanced'>('basic')
const basicQuery = ref('')
const advancedQuery = ref('')

// ── Filters ──────────────────────────────────────────────────────
interface Filter {
  label: string
  options: string[]
}

const filters: Filter[] = [
  { label: 'Section', options: ['World', 'Business', 'Science', 'Culture', 'Opinion', 'Lifestyle', 'Analysis'] },
  { label: 'Content Type', options: ['Article', 'Feature', 'Explainer', 'Interview', 'Photo Essay', 'Podcast', 'Video'] },
  { label: 'Date Published', options: ['Today', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'Last year', 'All time'] },
  { label: 'Author', options: ['Elena Vasquez', 'James Okafor', 'Priya Nair', 'Tom Schreiber', 'Mei-Ling Zhou', 'Daniel Ferris', 'Amara Diallo', 'Sophie Leclerc'] },
  { label: 'Topic', options: ['Politics', 'Economy', 'Technology', 'Health', 'Environment', 'Education', 'Military', 'Law', 'Housing', 'Immigration'] },
  { label: 'Region', options: ['Americas', 'Europe', 'Asia-Pacific', 'Middle East', 'Africa', 'South Asia', 'Global'] },
  { label: 'Reading Time', options: ['Quick (< 5 min)', 'Standard (5–15 min)', 'Long read (15–30 min)', 'Deep dive (30+ min)'] },
  { label: 'Access Level', options: ['Free', 'Subscriber only', 'Premium'] },
  { label: 'Language', options: ['English', 'Spanish', 'French', 'German', 'Mandarin', 'Arabic'] },
  { label: 'Format', options: ['News', 'Analysis', 'Commentary', 'Investigation', 'Review', 'Profile'] },
  { label: 'Country', options: ['United States', 'United Kingdom', 'France', 'Germany', 'China', 'Russia', 'India', 'Brazil'] },
  { label: 'Series', options: ['The Long Read', 'Global Dispatch', 'Market Watch', "Critics' Picks", 'Weekend Guide'] },
  { label: 'Tags', options: ['Climate', 'Artificial Intelligence', 'Elections', 'War & Conflict', 'Healthcare', 'Housing Crisis', 'Immigration', 'Trade', 'Inflation', 'Surveillance'] },
  { label: 'Media Type', options: ['Text only', 'Has images', 'Has video', 'Has audio', 'Interactive'] },
  { label: 'Contributor Type', options: ['Staff writer', 'Senior correspondent', 'Guest contributor', 'Wire service'] },
  { label: 'Awards & Honors', options: ["Editor's pick", "Critics' choice", 'Staff pick', 'Award nominated', 'Award winner'] },
  { label: 'Industry', options: ['Technology', 'Finance', 'Healthcare', 'Energy', 'Real Estate', 'Retail'] },
  { label: 'Organization', options: ['United Nations', 'NATO', 'European Union', 'World Bank', 'IMF', 'WHO'] },
  { label: 'Publication Status', options: ['Published', 'Developing story', 'Archived'] },
  { label: 'Engagement', options: ['Most read', 'Most shared', 'Trending', 'Most commented'] },
]

const openFilters = ref<string[]>(['Section', 'Content Type', 'Date Published'])
const selectedFilters = ref<Record<string, string[]>>({})

function isOpen(label: string) {
  return openFilters.value.includes(label)
}

function toggleAccordion(label: string) {
  const idx = openFilters.value.indexOf(label)
  if (idx >= 0) {
    openFilters.value.splice(idx, 1)
  }
  else {
    openFilters.value.push(label)
  }
}

function isSelected(filterLabel: string, option: string) {
  return selectedFilters.value[filterLabel]?.includes(option) ?? false
}

function toggleOption(filterLabel: string, option: string) {
  if (!selectedFilters.value[filterLabel]) {
    selectedFilters.value[filterLabel] = []
  }
  const idx = selectedFilters.value[filterLabel].indexOf(option)
  if (idx >= 0) {
    selectedFilters.value[filterLabel].splice(idx, 1)
  }
  else {
    selectedFilters.value[filterLabel].push(option)
  }
}

const activeFilterCount = computed(() =>
  Object.values(selectedFilters.value).reduce((sum, arr) => sum + arr.length, 0)
)

function clearAll() {
  selectedFilters.value = {}
}

// ── Results ──────────────────────────────────────────────────────
const results = [
  { title: 'The Architecture of Collapse: How Democratic Institutions Quietly Erode From Within', summary: true },
  { title: 'Silicon Valley\'s New Obsession With the Physics of Consciousness', summary: true },
  { title: 'A New Theory of Consciousness Is Splitting Neuroscience in Two', summary: true },
  { title: 'The Novel Is Not Dead. It Just Stopped Trying to Please Everyone.', summary: true },
  { title: 'Ceasefire Talks Collapse as Regional Powers Redraw Their Alliances', summary: true },
  { title: 'The Second Wave of AI Investment Is Bigger and Stranger Than the First', summary: true },
  { title: 'Democracy Does Not Die in Darkness. It Dies in Procedural Delays.', summary: true },
  { title: 'The Science of Rest Is Finally Catching Up to How Exhausted We Are', summary: true },
  { title: 'Why the Mediterranean Diet Became the World\'s Most Political Meal', summary: false },
  { title: 'James Webb Telescope Finds Unexpected Structure at Edge of Observable Universe', summary: false },
  { title: 'Federal Reserve Signals Extended Pause as Inflation Stays Stubborn', summary: false },
  { title: 'Cannes Dispatch: A Decade of Quiet Cinema Arrives All at Once', summary: false },
  { title: 'What the West Gets Wrong About Authoritarian Resilience', summary: false },
  { title: "Africa's Debt Burden Reaches Critical Threshold, IMF Warns", summary: false },
  { title: 'Ocean Temperatures Hit Record High for the Fourth Consecutive Year', summary: false },
  { title: 'A New Generation of Chefs Is Rewriting What Regional Cuisine Means', summary: false },
  { title: 'Private Equity Retreats From Commercial Real Estate Amid Rate Pressure', summary: false },
  { title: 'How Hip-Hop Became the Language of Global Political Protest', summary: false },
  { title: "Architecture's New Obsession: Buildings That Disappear Into Landscape", summary: false },
  { title: 'The Return of the Third Place, and Why It Matters More Than Ever', summary: false },
]
</script>

<template>
  <div class="min-h-screen bg-mauve-900">
    <EditorialNav :show-logo="true" />

    <!-- Page heading (intersection target) -->
    <div class="max-w-9xl mx-auto px-6 pt-12 pb-8 border-b border-on-surface/12">
      <h1 class="text-4xl font-bold text-white tracking-tight mb-8">Search</h1>

      <!-- Search bar -->
      <div class="flex flex-col gap-3">
        <!-- Mode toggle -->
        <div class="flex items-center gap-1 self-start bg-mauve-800 rounded p-0.5">
          <button
            class="px-3 py-1 rounded text-xs font-mono tracking-widest uppercase transition-colors"
            :class="searchMode === 'basic' ? 'bg-mauve-600 text-white' : 'text-mauve-400 hover:text-white'"
            @click="searchMode = 'basic'"
          >
            Basic
          </button>
          <button
            class="px-3 py-1 rounded text-xs font-mono tracking-widest uppercase transition-colors"
            :class="searchMode === 'advanced' ? 'bg-mauve-600 text-white' : 'text-mauve-400 hover:text-white'"
            @click="searchMode = 'advanced'"
          >
            Advanced
          </button>
        </div>

        <!-- Basic input -->
        <div v-if="searchMode === 'basic'" class="flex items-center gap-3">
          <div class="flex-1 flex items-center gap-3 bg-mauve-800 border border-mauve-600 rounded-lg px-4 h-12 focus-within:border-mauve-400 transition-colors">
            <svg class="w-4 h-4 text-mauve-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              v-model="basicQuery"
              type="search"
              placeholder="Search articles, topics, authors…"
              class="flex-1 bg-transparent text-white placeholder-mauve-500 outline-none text-sm"
            >
          </div>
          <button class="h-12 px-6 bg-mauve-500 hover:bg-mauve-400 text-white text-sm font-medium rounded-lg transition-colors">
            Search
          </button>
        </div>

        <!-- Advanced input -->
        <div v-else class="flex flex-col gap-2">
          <div class="bg-mauve-800 border border-mauve-600 rounded-lg focus-within:border-mauve-400 transition-colors">
            <textarea
              v-model="advancedQuery"
              rows="3"
              placeholder='section:World AND type:feature NOT author:"Tom Schreiber" AND date:>2025-01-01'
              class="w-full bg-transparent text-white placeholder-mauve-500 outline-none text-sm font-mono p-4 resize-none"
            />
            <div class="flex items-center justify-between px-4 py-2 border-t border-mauve-700">
              <p class="text-xs text-mauve-500">
                Operators: <span class="text-mauve-300">AND &nbsp;OR &nbsp;NOT &nbsp;( ) &nbsp;" " &nbsp;field:value &nbsp;date:>YYYY-MM-DD</span>
              </p>
              <button class="h-8 px-4 bg-mauve-500 hover:bg-mauve-400 text-white text-xs font-medium rounded transition-colors">
                Run query
              </button>
            </div>
          </div>
          <p class="text-xs text-mauve-500">
            Fields: <span class="text-mauve-400">section &nbsp;type &nbsp;author &nbsp;topic &nbsp;region &nbsp;tag &nbsp;date &nbsp;access &nbsp;lang &nbsp;format</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Results + Filters -->
    <div class="max-w-9xl mx-auto px-6 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-on-surface/12">

        <!-- Results -->
        <main class="lg:col-span-3 lg:pr-10">
          <!-- Result count + active filters -->
          <div class="flex items-center justify-between mb-6">
            <p class="text-sm text-mauve-400">
              <span class="text-white font-medium">{{ results.length }}</span> results
              <span v-if="activeFilterCount > 0"> &middot; {{ activeFilterCount }} filter{{ activeFilterCount !== 1 ? 's' : '' }} active</span>
            </p>
            <button
              v-if="activeFilterCount > 0"
              class="text-xs font-mono tracking-widest uppercase text-mauve-400 hover:text-white transition-colors"
              @click="clearAll"
            >
              Clear all
            </button>
          </div>

          <!-- Cards -->
          <div class="flex flex-col divide-y divide-on-surface/12">
            <div
              v-for="result in results"
              :key="result.title"
              class="py-6 first:pt-0"
            >
              <Card variant="list" :show-summary="result.summary" :title="result.title" />
            </div>
          </div>
        </main>

        <!-- Faceted filters -->
        <aside class="lg:col-span-1 lg:pl-8">
          <p class="font-mono text-xs tracking-widest uppercase text-mauve-500 mb-4">Filters</p>

          <div class="flex flex-col divide-y divide-on-surface/12">
            <div v-for="filter in filters" :key="filter.label">
              <!-- Accordion header -->
              <button
                class="w-full flex items-center justify-between py-3 text-left group"
                @click="toggleAccordion(filter.label)"
              >
                <span
                  class="text-sm transition-colors"
                  :class="selectedFilters[filter.label]?.length ? 'text-white font-medium' : 'text-mauve-300 group-hover:text-white'"
                >
                  {{ filter.label }}
                  <span v-if="selectedFilters[filter.label]?.length" class="ml-1.5 text-xs text-mauve-400">
                    ({{ selectedFilters[filter.label].length }})
                  </span>
                </span>
                <svg
                  class="w-3.5 h-3.5 text-mauve-500 transition-transform duration-200 shrink-0"
                  :class="isOpen(filter.label) ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <!-- Accordion body -->
              <div v-if="isOpen(filter.label)" class="pb-3 flex flex-col gap-1.5">
                <label
                  v-for="option in filter.options"
                  :key="option"
                  class="flex items-center gap-2.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    class="sr-only"
                    :checked="isSelected(filter.label, option)"
                    @change="toggleOption(filter.label, option)"
                  >
                  <span
                    class="w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors"
                    :class="isSelected(filter.label, option)
                      ? 'bg-mauve-500 border-mauve-500'
                      : 'border-mauve-600 group-hover:border-mauve-400'"
                  >
                    <svg
                      v-if="isSelected(filter.label, option)"
                      class="w-2.5 h-2.5 text-white"
                      fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span
                    class="text-xs transition-colors leading-relaxed"
                    :class="isSelected(filter.label, option) ? 'text-white' : 'text-mauve-400 group-hover:text-mauve-200'"
                  >
                    {{ option }}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>
