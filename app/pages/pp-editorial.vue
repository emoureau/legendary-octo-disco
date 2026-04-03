<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-steel-950">
    <!-- Body -->
    <div class="max-w-9xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-white/12">
        <!-- Main content -->
        <main class="lg:col-span-3 lg:pr-10">
          <!-- ── TOP STORY ──────────────────────────────── -->
          <section class="py-10 border-b border-white/12 px-5">
            <Card
              variant="hero"
              show-summary
              title="The Architecture of Collapse: How Democratic Institutions Quietly Erode From Within"
            />
          </section>

          <!-- ── TOP 3 ───────────────────────────────────── -->
          <section class="grid grid-cols-1 lg:grid-cols-3 items-start divide-y lg:divide-y-0 lg:divide-x divide-white/12">
            <Card variant="md" show-summary class="py-7 px-5" title="Silicon Valley's New Obsession With the Physics of Consciousness" />
            <Card variant="md" show-summary class="py-7 px-5" title="Why the Mediterranean Diet Became the World's Most Political Meal" />
            <Card variant="md" show-summary class="py-7 px-5" title="The Last Librarians: Fighting Digital Erasure in a Streaming Age" />
          </section>

          <!-- ── SECTION: Analysis ──────────────────────── -->
          <div class="flex items-center gap-4 py-5">
            <span class="font-mono text-xs font-medium tracking-wide uppercase text-blue-300 whitespace-nowrap">Analysis</span>
          </div>

          <!-- River layout -->
          <section class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/12 border-b border-white/12">
            <div class="lg:col-span-2 py-8 lg:pr-8">
              <p class="font-mono text-[0.58rem] font-medium tracking-[0.28em] uppercase text-white/30 mb-[0.875rem]">
                Longform
              </p>
              <Card
                variant="md"
                show-summary
                title="After the Algorithm: How Human Editors Are Reclaiming the Curator's Role in the Age of Infinite Feeds"
              />
            </div>
            <div class="lg:col-span-1 py-8 lg:pl-8 flex flex-col divide-y divide-white/12">
              <Card variant="sm" class="pb-5" title="Ceasefire Talks Stall as Both Sides Claim Victory" />
              <Card variant="sm" class="py-5" title="European Leaders Convene for Emergency Climate Summit" />
              <Card variant="sm" class="py-5" title="Markets React to Surprise Federal Reserve Decision" />
              <Card variant="sm" class="pt-5" title="Scientists Identify Key Protein in Alzheimer's Progression" />
            </div>
          </section>

          <!-- ── SECTION: Technology ────────────────────── -->
          <div class="flex items-center gap-[0.875rem] py-5">
            <div class="flex-1 h-px bg-blue-50" />
            <span class="font-mono text-xs font-medium tracking-[0.32em] uppercase text-blue-300 whitespace-nowrap px-[0.65rem] py-[0.2rem] border border-blue-50">Technology</span>
            <div class="flex-1 h-px bg-blue-50" />
          </div>

          <section class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/12 border-t border-b border-white/12">
            <Card variant="sm" class="p-6" title="The Chip War Enters Its Most Dangerous Phase Yet" />
            <Card variant="sm" class="p-6" title="Open Source AI Models Are Upending the Industry's Power Structure" />
            <Card variant="sm" class="p-6" title="Your Next Doctor Will Be Partially Artificial" />
            <Card variant="sm" class="p-6" title="Inside the Communities That Chose to Live Offline" />
          </section>

          <!-- ── SECTION: Opinion ───────────────────────── -->
          <div class="flex items-center gap-[0.875rem] py-5">
            <div class="flex-1 h-px bg-blue-50" />
            <span class="font-mono text-xs font-medium tracking-[0.32em] uppercase text-blue-300 whitespace-nowrap px-[0.65rem] py-[0.2rem] border border-blue-50">Opinion</span>
            <div class="flex-1 h-px bg-blue-50" />
          </div>

          <section class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/12 border-b border-white/12">
            <div class="py-8 lg:pr-8">
              <p class="font-mono text-[0.58rem] font-medium tracking-[0.28em] uppercase text-white/30 mb-[0.875rem]">
                Essay
              </p>
              <Card variant="md" show-summary title="The Case for Radical Boredom in an Age of Infinite Content" />
            </div>
            <div class="py-8 lg:pl-8">
              <p class="font-mono text-[0.58rem] font-medium tracking-[0.28em] uppercase text-white/30 mb-[0.875rem]">
                Commentary
              </p>
              <Card variant="md" show-summary title="We Built the Internet Wrong. Here's How We Might Start Over." />
            </div>
          </section>

          <!-- ── SECTION: Culture ───────────────────────── -->
          <div class="flex items-center gap-[0.875rem] py-5">
            <div class="flex-1 h-px bg-blue-50" />
            <span class="font-mono text-xs font-medium tracking-[0.32em] uppercase text-blue-300 whitespace-nowrap px-[0.65rem] py-[0.2rem] border border-blue-50">Culture</span>
            <div class="flex-1 h-px bg-blue-50" />
          </div>

          <section class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/12 border-b border-white/12">
            <Card variant="md" show-summary class="py-6 lg:pr-6" title="The Revival of the American Short Story, in Three Debut Collections" />
            <Card variant="md" class="py-6 lg:px-6" title="Film Review: A Portrait of Grief That Refuses Easy Consolation" />
            <Card variant="md" class="py-6 lg:pl-6" title="Architecture Awards Celebrate Bold Civic Ambition Across Five Cities" />
          </section>
        </main>

        <!-- Latest news sidebar -->
        <aside class="lg:col-span-1 lg:pl-8 pt-8 pb-10">
          <div class="flex items-center gap-[0.875rem] pb-5">
            <div class="flex-1 h-px bg-blue-50" />
            <span class="font-mono text-xs font-medium tracking-[0.32em] uppercase text-blue-300 whitespace-nowrap px-[0.65rem] py-[0.2rem] border border-blue-50">Latest</span>
            <div class="flex-1 h-px bg-blue-50" />
          </div>
          <div class="flex flex-col divide-y divide-white/12">
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
          <div class="pt-4 border-t border-white/12">
            <NuxtLink to="/" class="font-mono text-[0.6rem] tracking-widest uppercase text-white/40 hover:text-white transition-colors">
              All latest →
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
