<script setup lang="ts">
useHead({ title: 'Sidebar Split | Layout Lab' })

const navItems = [
  { label: 'Overview', active: true },
  { label: 'Typography' },
  { label: 'Color tokens' },
  { label: 'Surface elevation' },
  { label: 'Motion' },
  { label: 'Iconography' },
]

const elevations = [
  { label: 'surface', bg: 'bg-surface', border: 'border-outline-variant', desc: 'Base page background' },
  { label: 'surface-container-lowest', bg: 'bg-surface-container-lowest', border: 'border-outline-variant', desc: 'Recessed wells, input backgrounds' },
  { label: 'surface-container-low', bg: 'bg-surface-container-low', border: 'border-outline-variant', desc: 'Sidebars, drawers' },
  { label: 'surface-container', bg: 'bg-surface-container', border: 'border-outline-variant', desc: 'Cards, dialogs' },
  { label: 'surface-container-high', bg: 'bg-surface-container-high', border: 'border-outline-variant', desc: 'Tooltips, snackbars' },
  { label: 'surface-container-highest', bg: 'bg-surface-container-highest', border: 'border-outline-variant', desc: 'Navigation bars, headers' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-inverse-surface text-inverse-on-surface px-6 py-4 flex items-center justify-between shrink-0">
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
          ← Home
        </NuxtLink>
        <span class="text-inverse-on-surface/30">/</span>
        <span class="text-sm font-medium">Sidebar Split</span>
      </div>
      <span class="text-xs text-inverse-on-surface/50 font-mono">bg-inverse-surface</span>
    </header>

    <!-- Body -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 shrink-0 bg-surface-container-low border-r border-outline-variant flex flex-col">
        <div class="px-4 py-5 border-b border-outline-variant">
          <p class="text-xs font-semibold tracking-widest uppercase text-on-surface-muted">Design System</p>
        </div>
        <nav class="flex-1 py-2">
          <ul class="flex flex-col">
            <li v-for="item in navItems" :key="item.label">
              <button
                class="w-full text-left px-4 py-2.5 text-sm transition-colors"
                :class="item.active
                  ? 'bg-primary/12 text-primary font-medium'
                  : 'text-on-surface-variant hover:bg-on-surface/6 hover:text-on-surface'"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>
        </nav>
        <div class="px-4 py-4 border-t border-outline-variant">
          <p class="text-xs text-on-surface-muted font-mono">bg-surface-container-low</p>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 bg-surface overflow-y-auto">
        <div class="max-w-3xl mx-auto px-8 py-10 flex flex-col gap-10">

          <!-- Page title -->
          <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold tracking-tight text-on-surface">Surface Elevation</h1>
            <p class="text-lg text-on-surface-variant leading-relaxed">
              MD3 defines five container tiers above the base surface. Each tier is slightly lighter in light mode and slightly lighter in dark mode — creating depth without needing color.
            </p>
          </div>

          <!-- Elevation scale demo -->
          <section class="flex flex-col gap-3">
            <h2 class="text-sm font-semibold tracking-widest uppercase text-on-surface-muted">The 6-tier scale</h2>
            <div class="flex flex-col gap-2">
              <div
                v-for="tier in elevations"
                :key="tier.label"
                class="flex items-center gap-4 rounded-md border px-5 py-4"
                :class="[tier.bg, tier.border]"
              >
                <code class="text-xs font-mono text-on-surface shrink-0 w-64">{{ tier.label }}</code>
                <span class="text-sm text-on-surface-variant">{{ tier.desc }}</span>
              </div>
            </div>
          </section>

          <!-- This layout's surfaces -->
          <section class="flex flex-col gap-3">
            <h2 class="text-sm font-semibold tracking-widest uppercase text-on-surface-muted">This layout uses</h2>
            <div class="border border-outline-variant rounded-md overflow-hidden">
              <table class="w-full text-sm">
                <thead class="bg-surface-container">
                  <tr class="border-b border-outline-variant">
                    <th class="text-left px-4 py-3 font-medium text-on-surface-variant">Zone</th>
                    <th class="text-left px-4 py-3 font-medium text-on-surface-variant">Token</th>
                    <th class="text-left px-4 py-3 font-medium text-on-surface-variant">Why</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-outline-variant">
                  <tr>
                    <td class="px-4 py-3 text-on-surface">Header</td>
                    <td class="px-4 py-3 font-mono text-xs text-primary">bg-inverse-surface</td>
                    <td class="px-4 py-3 text-on-surface-muted">High-contrast bar — dark in light mode, light in dark mode</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-on-surface">Sidebar</td>
                    <td class="px-4 py-3 font-mono text-xs text-primary">bg-surface-container-low</td>
                    <td class="px-4 py-3 text-on-surface-muted">One step above base — subtly distinct without a heavy shadow</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-on-surface">Main</td>
                    <td class="px-4 py-3 font-mono text-xs text-primary">bg-surface</td>
                    <td class="px-4 py-3 text-on-surface-muted">Base reading surface — lowest elevation</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-on-surface">Table header</td>
                    <td class="px-4 py-3 font-mono text-xs text-primary">bg-surface-container</td>
                    <td class="px-4 py-3 text-on-surface-muted">Card-level elevation — floats above the page</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Theme toggle note -->
          <section class="bg-surface-container border border-outline-variant rounded-md p-6 flex flex-col gap-2">
            <p class="text-sm font-medium text-on-surface">Try toggling light/dark mode</p>
            <p class="text-sm text-on-surface-variant">
              The header flips between dark and light. The sidebar and content areas shift their relative tones. No hardcoded grays — all five tiers are driven by <code>--md-surface-container-*</code> tokens.
            </p>
          </section>

        </div>
      </main>
    </div>
  </div>
</template>
