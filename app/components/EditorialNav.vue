<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{ showLogo: boolean }>()

// null while SSR / before onMounted — toggle is hidden via v-if
// to avoid hydration mismatches (same pattern as DevNav).
const isDark = ref<boolean | null>(null)
const activeMenu = ref<string | null>(null)
const navRef = ref<HTMLElement | null>(null)

interface Link {
  label: string
  description?: string
  primary?: boolean
}

interface Group {
  label?: string
  links: Link[]
}

interface FeaturedItem {
  tag: string
  label: string
  description: string
}

interface MenuConfig {
  featured?: FeaturedItem
  groups: Group[]
}

const menus: Record<string, MenuConfig> = {
  Analysis: {
    featured: {
      tag: 'The Long Read',
      label: 'The Architecture of Collapse',
      description: 'Deep investigations into the systems quietly failing beneath our feet.',
    },
    groups: [
      {
        label: 'Topics',
        links: [
          { label: 'Politics', description: 'Electoral systems, policy debates, governance', primary: true },
          { label: 'Economy', description: 'Markets, trade, and fiscal policy', primary: true },
          { label: 'Technology', description: 'AI, Big Tech, and digital society', primary: true },
          { label: 'Science', description: 'Research, discovery, the natural world', primary: true },
          { label: 'Health', description: 'Public health, medicine, wellbeing', primary: true },
          { label: 'Environment', description: 'Climate, conservation, energy transition', primary: true },
        ],
      },
      {
        label: 'Policy',
        links: [
          { label: 'Foreign Policy' },
          { label: 'National Security' },
          { label: 'Immigration' },
          { label: 'Trade' },
          { label: 'Infrastructure' },
          { label: 'Housing' },
          { label: 'Labor' },
        ],
      },
      {
        label: 'Global',
        links: [
          { label: 'Geopolitics' },
          { label: 'Demographics' },
          { label: 'Military' },
          { label: 'Education' },
          { label: 'Finance' },
          { label: 'Energy' },
          { label: 'Law' },
        ],
      },
    ],
  },
  Opinion: {
    featured: {
      tag: 'Editor\'s Pick',
      label: 'We Built the Internet Wrong',
      description: 'This week\'s standout commentary from our writers and contributors.',
    },
    groups: [
      {
        links: [
          { label: 'Editorials', description: 'The board\'s positions on the issues that matter', primary: true },
          { label: 'Columns', description: 'Regular voices from our contributing writers', primary: true },
          { label: 'Essays', description: 'Long-form argument and reflection', primary: true },
          { label: 'Letters', description: 'Reader responses and correspondence' },
          { label: 'Commentary', description: 'Short takes on the day\'s events' },
        ],
      },
    ],
  },
  Culture: {
    featured: {
      tag: 'Critics\' Picks',
      label: 'This Week in Art and Ideas',
      description: 'Essential recommendations across film, music, and literature.',
    },
    groups: [
      {
        label: 'Arts',
        links: [
          { label: 'Film', description: 'Reviews, profiles, and festival coverage', primary: true },
          { label: 'Music', description: 'Albums, concerts, and artist features', primary: true },
          { label: 'Books', description: 'Fiction, nonfiction, and essay collections', primary: true },
          { label: 'Theater', description: 'Stage, performance, and production' },
          { label: 'Art', description: 'Galleries, exhibitions, and visual culture' },
        ],
      },
      {
        label: 'Life',
        links: [
          { label: 'Television', description: 'Series, documentaries, and streaming' },
          { label: 'Architecture', description: 'Buildings, cities, and design' },
          { label: 'Fashion', description: 'Style, industry, and identity' },
          { label: 'Food', description: 'Restaurants, recipes, and food culture' },
          { label: 'Travel', description: 'Destinations, journeys, and dispatches' },
          { label: 'Sports', description: 'Competition, athletes, and the games we play' },
          { label: 'Gaming', description: 'Interactive media and play culture' },
        ],
      },
    ],
  },
  World: {
    featured: {
      tag: 'Global Dispatch',
      label: 'The Week in International Affairs',
      description: 'The most consequential stories from beyond your borders, in context.',
    },
    groups: [
      {
        label: 'Regions',
        links: [
          { label: 'Americas', description: 'North and South America in focus', primary: true },
          { label: 'Europe', description: 'The continent at a crossroads', primary: true },
          { label: 'Asia-Pacific', description: 'The world\'s fastest-moving region', primary: true },
          { label: 'Middle East', description: 'Conflict, diplomacy, and transition' },
          { label: 'Africa', description: 'Growth, governance, and global stakes' },
          { label: 'South Asia', description: 'A region of one billion stories' },
        ],
      },
      {
        label: 'Themes',
        links: [
          { label: 'Diplomacy' },
          { label: 'Conflict' },
          { label: 'Development' },
          { label: 'Human Rights' },
          { label: 'Migration' },
          { label: 'Global Economy' },
          { label: 'Environment' },
        ],
      },
    ],
  },
  Business: {
    featured: {
      tag: 'Market Watch',
      label: 'Who Wins the Next Industrial Era',
      description: 'Tracking capital, power, and disruption across the global economy.',
    },
    groups: [
      {
        label: 'Markets',
        links: [
          { label: 'Equities', description: 'Stocks, indices, and public markets', primary: true },
          { label: 'Fixed Income', description: 'Bonds, rates, and credit markets', primary: true },
          { label: 'Commodities', description: 'Energy, metals, and agricultural markets' },
          { label: 'Currencies', description: 'FX, monetary policy, and exchange rates' },
          { label: 'Crypto', description: 'Digital assets and blockchain developments' },
        ],
      },
      {
        label: 'Industry',
        links: [
          { label: 'Big Tech', description: 'Platforms, AI, and digital infrastructure', primary: true },
          { label: 'Finance', description: 'Banking, investment, and insurance' },
          { label: 'Healthcare', description: 'Pharmaceuticals, insurance, and delivery' },
          { label: 'Energy', description: 'Fossil fuels, renewables, and transition' },
          { label: 'Real Estate', description: 'Property, development, and REITs' },
        ],
      },
    ],
  },
  Science: {
    featured: {
      tag: 'Discovery',
      label: 'The Race to Understand the Human Brain',
      description: 'Breakthroughs, debates, and the quiet revolutions reshaping knowledge.',
    },
    groups: [
      {
        label: 'Fields',
        links: [
          { label: 'Space', description: 'Astronomy, exploration, and the cosmos', primary: true },
          { label: 'Biology', description: 'Life, genetics, and evolution', primary: true },
          { label: 'Physics', description: 'Particles, forces, and the fabric of reality', primary: true },
          { label: 'Climate Science', description: 'Earth systems, data, and projections' },
          { label: 'Medicine', description: 'Research, trials, and clinical breakthroughs' },
          { label: 'AI & Computing', description: 'Machine intelligence and its implications' },
          { label: 'Archaeology', description: 'Unearthing the human past' },
          { label: 'Neuroscience', description: 'The brain, behavior, and consciousness' },
        ],
      },
    ],
  },
  Lifestyle: {
    featured: {
      tag: 'Weekend Guide',
      label: 'How to Reclaim Your Attention',
      description: 'Ideas for living well in a distracted, demanding world.',
    },
    groups: [
      {
        label: 'Wellness',
        links: [
          { label: 'Health', description: 'Body, mind, and everyday wellbeing', primary: true },
          { label: 'Fitness', description: 'Movement, sport, and physical culture', primary: true },
          { label: 'Mental Health', description: 'Psychology, therapy, and resilience' },
          { label: 'Food & Drink', description: 'Eating well, cooking, and nutrition' },
        ],
      },
      {
        label: 'Living',
        links: [
          { label: 'Home', description: 'Design, interiors, and domestic life' },
          { label: 'Family', description: 'Parenting, relationships, and community' },
          { label: 'Career', description: 'Work, ambition, and professional life' },
          { label: 'Travel', description: 'Where to go and how to get there' },
          { label: 'Finance', description: 'Personal money, savings, and planning' },
          { label: 'Relationships', description: 'Love, connection, and social bonds' },
        ],
      },
    ],
  },
}

function toggle(label: string) {
  activeMenu.value = activeMenu.value === label ? null : label
}

function onOutsideClick(e: MouseEvent) {
  if (navRef.value && !navRef.value.contains(e.target as Node)) {
    activeMenu.value = null
  }
}

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  isDark.value = next === 'dark'
  document.documentElement.dataset.theme = next
  try { localStorage.setItem('theme', next) }
  catch (e) {}
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    isDark.value = stored === 'dark'
  }
  else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.addEventListener('click', onOutsideClick)
})
onUnmounted(() => document.removeEventListener('click', onOutsideClick))
</script>

<template>
  <nav ref="navRef" class="sticky top-0 z-50 bg-surface backdrop-blur-md border-b border-outline-variant">
    <!-- Top bar -->
    <div class="w-full px-6 h-14 flex items-center justify-between">
      <Transition name="fade">
        <LogoMark v-if="props.showLogo" class="text-on-surface h-5 w-auto" />
      </Transition>

      <div class="flex items-center gap-6 ml-auto">
        <button
          v-for="(config, label) in menus"
          :key="label"
          class="flex items-center gap-1 font-mono text-xs tracking-widest uppercase transition-colors"
          :class="activeMenu === label ? 'text-on-surface' : 'text-on-surface-muted hover:text-on-surface'"
          @click="toggle(label)"
        >
          {{ label }}
          <svg
            class="w-2.5 h-2.5 transition-transform duration-200"
            :class="activeMenu === label ? 'rotate-180' : ''"
            fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <!-- Divider -->
        <span class="w-px h-4 bg-outline-variant mx-1" />

        <!-- Search -->
        <div class="flex items-center gap-2 border border-outline-variant rounded px-3 h-8 focus-within:border-outline transition-colors">
          <svg class="w-3 h-3 text-on-surface-variant shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search"
            class="bg-transparent text-xs text-on-surface placeholder-on-surface-muted outline-none w-28 focus:w-40 transition-all duration-300"
          >
        </div>

        <!-- Bell -->
        <button class="relative text-on-surface-muted hover:text-on-surface transition-colors" aria-label="Alerts">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span class="absolute -top-1 -right-1 w-1.5 h-1.5 bg-error rounded-full" />
        </button>

        <!-- Feedback -->
        <a
          href="#"
          class="font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded border border-primary text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors"
        >
          Feedback
        </a>

        <!-- Light/dark toggle — hidden during SSR to avoid hydration mismatch -->
        <button
          v-if="isDark !== null"
          class="text-on-surface-muted hover:text-on-surface transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Megamenu panel -->
    <Transition name="dropdown">
      <div v-if="activeMenu" class="border-t border-primary bg-surface-container">
        <div class="px-6 py-8 flex gap-8">
          <!-- Featured card -->
          <a
            v-if="menus[activeMenu]?.featured"
            href="#"
            class="shrink-0 flex flex-col justify-end rounded-lg overflow-hidden relative group"
            style="min-height: 200px;"
            @click="activeMenu = null"
          >
            <!-- gradient stand-in for image -->
            <div class="absolute inset-0 bg-surface-container-lowest" />
            <div class="relative p-4">
              <p class="font-mono text-xs tracking-widest uppercase text-primary mb-1.5">
                {{ menus[activeMenu]?.featured?.tag }}
              </p>
              <p class="text-sm font-semibold text-on-surface leading-snug group-hover:text-primary transition-colors">
                {{ menus[activeMenu]?.featured?.label }}
              </p>
              <p class="text-xs text-on-surface-muted mt-1 leading-relaxed">
                {{ menus[activeMenu]?.featured?.description }}
              </p>
            </div>
          </a>

          <!-- Groups -->
          <div class="flex flex-1 gap-8 divide-x divide-outline-variant">
            <div
              v-for="group in menus[activeMenu]?.groups"
              :key="group.label"
              class="flex-1"
            >
              <!-- Group label -->
              <p v-if="group.label" class="font-mono text-xs tracking-widest uppercase text-primary px-4 mb-4">
                {{ group.label }}
              </p>

              <ul class="flex flex-col">
                <li v-for="link in group.links" :key="link.label">
                  <a
                    href="#"
                    class="flex flex-col py-2 me-8 px-4 rounded hover:bg-surface-container-high transition-colors group"
                    @click="activeMenu = null"
                  >
                    <span
                      class="text-sm transition-colors"
                      :class="link.primary ? 'font-medium text-on-surface' : 'group-hover:text-on-surface'"
                    >
                      {{ link.label }}
                    </span>
                    <span v-if="link.description" class="text-xs text-on-surface-variant group-hover:text-primary transition-colors mt-0.5 leading-relaxed">
                      {{ link.description }}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
