<script setup lang="ts">
const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const navSections = ['World', 'U.S.', 'Politics', 'Opinion', 'Technology', 'Culture', 'Science', 'Arts']

useHead({ title: 'Editorial — Newspaper Layout | Layout Lab' })
</script>

<template>
  <div class="min-h-screen">
    <!-- Breaking news ticker -->
    <!-- <div class="bg-[#b01020] px-6 py-[0.45rem] font-mono text-[0.62rem] tracking-[0.06em] text-white/90 whitespace-nowrap overflow-hidden text-ellipsis">
      <span class="inline-block bg-white text-[#b01020] font-semibold text-[0.58rem] px-[0.45rem] py-[0.1rem] tracking-[0.22em] mr-4 align-middle">DEVELOPING</span>
      Emergency summit yields unexpected framework agreement
      &nbsp;·&nbsp;
      Tech antitrust ruling expected Thursday
      &nbsp;·&nbsp;
      Storm system threatens coastal cities through weekend
    </div> -->

    <!-- Masthead -->
    <header class="border-b border-on-surface/15">
      <!-- Edition line -->
      <div class="flex justify-between items-center px-6 py-2 border-b border-on-surface/10 font-mono text-xs tracking-widest uppercase text-on-surface/35">
        <span>Vol. CLXII · No. 84</span>
        <span>{{ today }}</span>
        <span>Late City Edition</span>
      </div>

      <!-- Nameplate -->
      <div class="max-w-9xl mx-auto px-6">
        <div class="text-center py-7 border-b-2 border-on-surface/80">
          <h1 class="font-thin tracking-tight leading-none text-[clamp(2.75rem,9vw,6.5rem)]">
            NEWSLINK
          </h1>
          <p class="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[rgba(240,232,216,0.35)] mt-[0.6rem]">
            Clarity in an uncertain world
          </p>
        </div>

        <!-- Section nav -->
        <nav class="flex justify-center flex-wrap gap-x-6 gap-y-1 py-3">
          <NuxtLink
            v-for="s in navSections"
            :key="s"
            to="/"
            class="font-mono text-xs tracking-widest uppercase text-on-surface/50 hover:text-on-surface transition-colors duration-150"
          >
            {{ s }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Body -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-on-surface/12">
        <!-- Main content -->
        <main class="lg:col-span-3 lg:pr-10">
          <!-- ── TOP STORY ──────────────────────────────── -->
          <section class="py-10 border-b border-on-surface/12">
            <Card
              variant="hero"
              show-summary
              title="The Architecture of Collapse: How Democratic Institutions Quietly Erode From Within"
            />
          </section>

          <!-- ── TOP 3 ───────────────────────────────────── -->
          <section class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-on-surface/12 border-b border-on-surface/12">
            <Card variant="md" show-summary class="py-6 lg:pr-6" title="Silicon Valley's New Obsession With the Physics of Consciousness" />
            <Card variant="md" show-summary class="py-6 lg:px-6" title="Why the Mediterranean Diet Became the World's Most Political Meal" />
            <Card variant="md" show-summary class="py-6 lg:pl-6" title="The Last Librarians: Fighting Digital Erasure in a Streaming Age" />
          </section>

          <!-- ── SECTION: Analysis ──────────────────────── -->
          <SectionDivider label="Analysis" />

          <!-- River layout -->
          <section class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-on-surface/12 border-b border-on-surface/12">
            <div class="lg:col-span-2 py-8 lg:pr-8">
              <p class="font-mono text-[0.58rem] font-medium tracking-[0.28em] uppercase text-on-surface/30 mb-[0.875rem]">
                Longform
              </p>
              <Card
                variant="md"
                show-summary
                title="After the Algorithm: How Human Editors Are Reclaiming the Curator's Role in the Age of Infinite Feeds"
              />
            </div>
            <div class="lg:col-span-1 py-8 lg:pl-8 flex flex-col divide-y divide-on-surface/12">
              <Card variant="sm" class="pb-5" title="Ceasefire Talks Stall as Both Sides Claim Victory" />
              <Card variant="sm" class="py-5" title="European Leaders Convene for Emergency Climate Summit" />
              <Card variant="sm" class="py-5" title="Markets React to Surprise Federal Reserve Decision" />
              <Card variant="sm" class="pt-5" title="Scientists Identify Key Protein in Alzheimer's Progression" />
            </div>
          </section>

          <!-- ── SECTION: Technology ────────────────────── -->
          <SectionDivider label="Technology" />

          <section class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-on-surface/12 border-t border-b border-on-surface/12">
            <Card variant="sm" class="p-6" title="The Chip War Enters Its Most Dangerous Phase Yet" />
            <Card variant="sm" class="p-6" title="Open Source AI Models Are Upending the Industry's Power Structure" />
            <Card variant="sm" class="p-6" title="Your Next Doctor Will Be Partially Artificial" />
            <Card variant="sm" class="p-6" title="Inside the Communities That Chose to Live Offline" />
          </section>

          <!-- ── SECTION: Opinion ───────────────────────── -->
          <SectionDivider label="Opinion" />

          <section class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-on-surface/12 border-b border-on-surface/12">
            <div class="py-8 lg:pr-8">
              <p class="font-mono text-[0.58rem] font-medium tracking-[0.28em] uppercase text-on-surface/30 mb-[0.875rem]">
                Essay
              </p>
              <Card variant="md" show-summary title="The Case for Radical Boredom in an Age of Infinite Content" />
            </div>
            <div class="py-8 lg:pl-8">
              <p class="font-mono text-[0.58rem] font-medium tracking-[0.28em] uppercase text-on-surface/30 mb-[0.875rem]">
                Commentary
              </p>
              <Card variant="md" show-summary title="We Built the Internet Wrong. Here's How We Might Start Over." />
            </div>
          </section>

          <!-- ── SECTION: Culture ───────────────────────── -->
          <SectionDivider label="Culture" />

          <section class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-on-surface/12 border-b border-on-surface/12">
            <Card variant="md" show-summary class="py-6 lg:pr-6" title="The Revival of the American Short Story, in Three Debut Collections" />
            <Card variant="md" class="py-6 lg:px-6" title="Film Review: A Portrait of Grief That Refuses Easy Consolation" />
            <Card variant="md" class="py-6 lg:pl-6" title="Architecture Awards Celebrate Bold Civic Ambition Across Five Cities" />
          </section>
        </main>

        <!-- Latest news sidebar -->
        <aside class="lg:col-span-1 lg:pl-8 pt-8 pb-10">
          <SectionDivider label="Latest" />
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
          <div class="pt-4 border-t border-on-surface/12">
            <NuxtLink to="/" class="font-mono text-[0.6rem] tracking-widest uppercase text-on-surface/40 hover:text-on-surface transition-colors">
              All latest →
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t-2 border-on-surface/70">
      <div class="max-w-9xl mx-auto px-6 py-10 text-center">
        <p class="font-sans font-thin tracking-tight leading-none text-[clamp(1.5rem,4vw,2.5rem)]">
          NEWSLINK
        </p>
        <p class="font-mono text-[0.6rem] tracking-widest uppercase text-on-surface/25 mt-2">
          © 2026 NEWSLINK Company · All Rights Reserved
        </p>
      </div>
    </footer>
  </div>
</template>
