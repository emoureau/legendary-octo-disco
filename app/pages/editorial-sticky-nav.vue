<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

useHead({ title: 'Editorial + Sticky Nav | Layout Lab' })

const titleRef = ref<HTMLElement | null>(null)
const isSticky = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (titleRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isSticky.value = entry?.isIntersecting === false
      },
      { threshold: 0 },
    )
    observer.observe(titleRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})

const sections = [
  {
    label: 'World',
    lead: { title: 'Ceasefire Talks Collapse as Regional Powers Redraw Their Alliances', showSummary: true },
    rest: [
      'European Leaders Convene Emergency Summit on Migration Crisis',
      'South China Sea Tensions Escalate After Naval Incident',
      'Africa\'s Debt Burden Reaches Critical Threshold, IMF Warns',
    ],
    last: 'UN Security Council Deadlocked Over Humanitarian Resolution',
  },
  {
    label: 'Business',
    lead: { title: 'The Second Wave of AI Investment Is Bigger and Stranger Than the First', showSummary: true },
    rest: [
      'Federal Reserve Signals Extended Pause as Inflation Stays Stubborn',
      'Semiconductor Giants Race to Secure Supply Chains After Taiwan Scare',
      'Private Equity Retreats From Commercial Real Estate Amid Rate Pressure',
    ],
    last: 'Antitrust Regulators Take Aim at Platform Bundling Practices',
  },
  {
    label: 'Science',
    lead: { title: 'A New Theory of Consciousness Is Splitting Neuroscience in Two', showSummary: true },
    rest: [
      'James Webb Telescope Finds Unexpected Structure at Edge of Observable Universe',
      'CRISPR Trial Shows Durable Results in Sickle Cell Patients After Three Years',
      'Ocean Temperatures Hit Record High for the Fourth Consecutive Year',
    ],
    last: 'Archaeologists Uncover Pre-Agricultural Settlement Older Than Jericho',
  },
  {
    label: 'Culture',
    lead: { title: 'The Novel Is Not Dead. It Just Stopped Trying to Please Everyone.', showSummary: true },
    rest: [
      'Cannes Dispatch: A Decade of Quiet Cinema Arrives All at Once',
      'The Museum That Decided to Stop Collecting and Start Returning',
      'How Hip-Hop Became the Language of Global Political Protest',
    ],
    last: 'Architecture\'s New Obsession: Buildings That Disappear Into Landscape',
  },
  {
    label: 'Opinion',
    lead: { title: 'Democracy Does Not Die in Darkness. It Dies in Procedural Delays.', showSummary: true },
    rest: [
      'The Case Against Techno-Optimism Has Never Been Stronger',
      'We Keep Calling It a Housing Crisis. It Is a Political Choice.',
      'Nuclear Power Deserved a Better Debate Than the One We Had',
    ],
    last: 'What the West Gets Wrong About Authoritarian Resilience',
  },
  {
    label: 'Lifestyle',
    lead: { title: 'The Science of Rest Is Finally Catching Up to How Exhausted We Are', showSummary: true },
    rest: [
      'A New Generation of Chefs Is Rewriting What Regional Cuisine Means',
      'The Return of the Third Place, and Why It Matters More Than Ever',
      'Solo Travel Is Booming. The Industry Has Not Caught Up.',
    ],
    last: 'How to Build a Reading Life in the Age of Constant Interruption',
  },
]
</script>

<template>
  <div class="min-h-screen">
    <EditorialNav :show-logo="isSticky" />

    <!-- Large page title -->
    <div class="max-w-9xl mx-auto px-6">
      <header ref="titleRef" class="py-16 border-b border-outline">
        <p class="font-mono text-xs font-medium tracking-widest uppercase text-on-surface-muted mb-4">
          Independent · Uncompromising
        </p>
        <h1>
          <LogoMark class="h-16 lg:h-24 w-auto" />
        </h1>
      </header>
    </div>

    <div class="max-w-9xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-on-surface/12 pt-4">
        <!-- Main content -->
        <main class="lg:col-span-3 lg:pr-10">
          <!-- ── FEATURED (9 articles) ──────────────────────────────── -->
          <section class="py-10">
            <!-- Hero -->
            <div class="border-b border-outline pb-8 mb-8">
              <Card
                variant="hero"
                show-summary
                title="The Architecture of Collapse: How Democratic Institutions Quietly Erode From Within"
              />
            </div>

            <!-- 4 md cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-outline pb-8 mb-8">
              <Card variant="md" title="Silicon Valley's New Obsession With the Physics of Consciousness" />
              <Card variant="md" title="Why the Mediterranean Diet Became the World's Most Political Meal" />
              <Card variant="md" title="The Last Librarians: Fighting Digital Erasure in a Streaming Age" />
              <Card variant="md" title="Inside the Quiet Collapse of the Global Fishing Industry" />
            </div>

            <!-- 4 sm cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-on-surface/12">
              <Card variant="sm" class="px-5 first:pl-0 last:pr-0 py-2 lg:py-0" title="The Chip War Enters Its Most Dangerous Phase Yet" />
              <Card variant="sm" class="px-5 first:pl-0 last:pr-0 py-2 lg:py-0" title="Open Source AI Is Upending the Industry's Power Structure" />
              <Card variant="sm" class="px-5 first:pl-0 last:pr-0 py-2 lg:py-0" title="Your Next Doctor Will Be Partially Artificial" />
              <Card variant="sm" class="px-5 first:pl-0 last:pr-0 py-2 lg:py-0" title="Inside the Communities That Chose to Live Offline" />
            </div>
          </section>

          <!-- ── 6 DOMAIN SECTIONS (5 articles each) ───────────────── -->
          <section
            v-for="section in sections"
            :key="section.label"
            class="py-10"
          >
            <div class="flex items-center gap-4 mb-6 pb-3 border-t-3 border-outline-variant">
              <span class="text-lg font-bold tracking-widest uppercase text-on-surface-variant">{{ section.label }}</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-on-surface/12">
              <div class="lg:col-span-2 lg:pr-8">
                <Card variant="md" show-summary :title="section.lead.title" />
              </div>
              <div class="lg:col-span-1 lg:pl-8 flex flex-col divide-y divide-on-surface/12">
                <Card
                  v-for="title in section.rest"
                  :key="title"
                  variant="sm"
                  class="py-4 first:pt-0"
                  :title="title"
                />
                <Card variant="sm" class="py-4" :title="section.last" />
              </div>
            </div>
          </section>
        </main>

        <!-- ── LATEST SIDEBAR ─────────────────────────────────────── -->
        <aside class="lg:col-span-1 lg:pl-8 pt-8 pb-10">
          <div class="flex items-center gap-4 py-3 border-t-3 border-outline-variant">
            <span class="text-lg font-bold tracking-widest uppercase text-on-surface-variant whitespace-nowrap">Latest</span>
          </div>
          <div class="flex flex-col divide-y divide-on-surface/12">
            <Card variant="sm" class="py-4" title="UN Security Council Votes on Emergency Resolution Amid Rising Tensions" />
            <Card variant="sm" class="py-4" title="Federal Reserve Signals Pause as Inflation Data Surprises Forecasters" />
            <Card variant="sm" class="py-4" title="Wildfire Season Begins Early Across Three Western States" />
            <Card variant="sm" class="py-4" title="Prime Minister Faces Confidence Vote After Budget Defeat" />
            <Card variant="sm" class="py-4" title="Breakthrough Trial Shows Promise for Early-Stage Pancreatic Cancer" />
            <Card variant="sm" class="py-4" title="Major Airline Grounds Fleet After Inspections Reveal Structural Fault" />
            <Card variant="sm" class="py-4" title="Prosecutors File New Charges in Landmark Antitrust Case" />
            <Card variant="sm" class="py-4" title="Astronomers Detect Unusual Signal From Nearby Star System" />
            <Card variant="sm" class="py-4" title="Labor Negotiations Collapse, Strike Looms at Nation's Ports" />
          </div>
          <div class="pt-4 border-t border-outline">
            <NuxtLink to="/" class="font-mono text-xs tracking-widest uppercase text-on-surface/40 hover:text-on-surface transition-colors">
              All latest →
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
