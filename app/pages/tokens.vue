<script setup lang="ts">
useHead({ title: 'Design Tokens | Layout Lab' })

interface Role {
  bgClass: string
  fgClass: string
  label: string
  cssVar: string
}
interface Family {
  label: string
  roles: Role[]
}

const families: Family[] = [
  {
    label: 'Primary',
    roles: [
      { bgClass: 'bg-primary',              fgClass: 'text-on-primary',              label: 'Primary',              cssVar: '--md-primary' },
      { bgClass: 'bg-on-primary',           fgClass: 'text-primary',                 label: 'On Primary',           cssVar: '--md-on-primary' },
      { bgClass: 'bg-primary-container',    fgClass: 'text-on-primary-container',    label: 'Primary Container',    cssVar: '--md-primary-container' },
      { bgClass: 'bg-on-primary-container', fgClass: 'text-primary-container',       label: 'On Primary Container', cssVar: '--md-on-primary-container' },
    ],
  },
  {
    label: 'Secondary',
    roles: [
      { bgClass: 'bg-secondary',              fgClass: 'text-on-secondary',              label: 'Secondary',              cssVar: '--md-secondary' },
      { bgClass: 'bg-on-secondary',           fgClass: 'text-secondary',                 label: 'On Secondary',           cssVar: '--md-on-secondary' },
      { bgClass: 'bg-secondary-container',    fgClass: 'text-on-secondary-container',    label: 'Secondary Container',    cssVar: '--md-secondary-container' },
      { bgClass: 'bg-on-secondary-container', fgClass: 'text-secondary-container',       label: 'On Secondary Container', cssVar: '--md-on-secondary-container' },
    ],
  },
  {
    label: 'Tertiary',
    roles: [
      { bgClass: 'bg-tertiary',              fgClass: 'text-on-tertiary',              label: 'Tertiary',              cssVar: '--md-tertiary' },
      { bgClass: 'bg-on-tertiary',           fgClass: 'text-tertiary',                 label: 'On Tertiary',           cssVar: '--md-on-tertiary' },
      { bgClass: 'bg-tertiary-container',    fgClass: 'text-on-tertiary-container',    label: 'Tertiary Container',    cssVar: '--md-tertiary-container' },
      { bgClass: 'bg-on-tertiary-container', fgClass: 'text-tertiary-container',       label: 'On Tertiary Container', cssVar: '--md-on-tertiary-container' },
    ],
  },
  {
    label: 'Error',
    roles: [
      { bgClass: 'bg-error',              fgClass: 'text-on-error',              label: 'Error',              cssVar: '--md-error' },
      { bgClass: 'bg-on-error',           fgClass: 'text-error',                 label: 'On Error',           cssVar: '--md-on-error' },
      { bgClass: 'bg-error-container',    fgClass: 'text-on-error-container',    label: 'Error Container',    cssVar: '--md-error-container' },
      { bgClass: 'bg-on-error-container', fgClass: 'text-error-container',       label: 'On Error Container', cssVar: '--md-on-error-container' },
    ],
  },
  {
    label: 'Surface',
    roles: [
      { bgClass: 'bg-surface',              fgClass: 'text-on-surface',              label: 'Surface',              cssVar: '--md-surface' },
      { bgClass: 'bg-on-surface',           fgClass: 'text-surface',                 label: 'On Surface',           cssVar: '--md-on-surface' },
      { bgClass: 'bg-surface-variant',      fgClass: 'text-on-surface-variant',      label: 'Surface Variant',      cssVar: '--md-surface-variant' },
      { bgClass: 'bg-on-surface-variant',   fgClass: 'text-surface-variant',         label: 'On Surface Variant',   cssVar: '--md-on-surface-variant' },
    ],
  },
  {
    label: 'Surface Containers',
    roles: [
      { bgClass: 'bg-surface-container-lowest',  fgClass: 'text-on-surface', label: 'Container Lowest',  cssVar: '--md-surface-container-lowest' },
      { bgClass: 'bg-surface-container-low',     fgClass: 'text-on-surface', label: 'Container Low',     cssVar: '--md-surface-container-low' },
      { bgClass: 'bg-surface-container',         fgClass: 'text-on-surface', label: 'Container',         cssVar: '--md-surface-container' },
      { bgClass: 'bg-surface-container-high',    fgClass: 'text-on-surface', label: 'Container High',    cssVar: '--md-surface-container-high' },
      { bgClass: 'bg-surface-container-highest', fgClass: 'text-on-surface', label: 'Container Highest', cssVar: '--md-surface-container-highest' },
    ],
  },
  {
    label: 'Outline',
    roles: [
      { bgClass: 'bg-outline',         fgClass: 'text-surface', label: 'Outline',         cssVar: '--md-outline' },
      { bgClass: 'bg-outline-variant', fgClass: 'text-on-surface-variant', label: 'Outline Variant', cssVar: '--md-outline-variant' },
    ],
  },
  {
    label: 'Inverse',
    roles: [
      { bgClass: 'bg-inverse-surface',    fgClass: 'text-inverse-on-surface', label: 'Inverse Surface',    cssVar: '--md-inverse-surface' },
      { bgClass: 'bg-inverse-on-surface', fgClass: 'text-inverse-surface',    label: 'Inverse On Surface', cssVar: '--md-inverse-on-surface' },
      { bgClass: 'bg-inverse-primary',    fgClass: 'text-inverse-surface',    label: 'Inverse Primary',    cssVar: '--md-inverse-primary' },
    ],
  },
  {
    label: 'Positive',
    roles: [
      { bgClass: 'bg-positive',              fgClass: 'text-on-positive',              label: 'Positive',              cssVar: '--md-positive' },
      { bgClass: 'bg-on-positive',           fgClass: 'text-positive',                 label: 'On Positive',           cssVar: '--md-on-positive' },
      { bgClass: 'bg-positive-container',    fgClass: 'text-on-positive-container',    label: 'Positive Container',    cssVar: '--md-positive-container' },
      { bgClass: 'bg-on-positive-container', fgClass: 'text-positive-container',       label: 'On Positive Container', cssVar: '--md-on-positive-container' },
    ],
  },
  {
    label: 'Scrim',
    roles: [
      { bgClass: 'bg-scrim', fgClass: 'text-inverse-on-surface', label: 'Scrim', cssVar: '--md-scrim' },
    ],
  },
]

const mauveSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
</script>

<template>
  <main class="min-h-screen bg-surface text-on-surface px-6 py-12 pb-24 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-3xl font-semibold tracking-tight mb-2">
        Design Tokens
      </h1>
      <p class="text-on-surface-variant text-sm leading-relaxed max-w-xl">
        Material Design 3 color roles, light and dark adaptive via CSS custom properties.
        Toggle the theme with the <span class="font-mono bg-surface-container px-1.5 py-0.5 rounded text-xs">☀/☾</span> button in the dev nav below.
      </p>
    </div>

    <!-- Color role families -->
    <section v-for="family in families" :key="family.label" class="mb-10">
      <h2 class="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">
        {{ family.label }}
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        <div
          v-for="role in family.roles"
          :key="role.label"
          class="rounded-xl overflow-hidden ring-1 ring-outline-variant"
        >
          <!-- Swatch -->
          <div
            class="h-20 flex flex-col justify-between p-3"
            :class="[role.bgClass, role.fgClass]"
          >
            <span class="text-base font-serif leading-none">Aa</span>
            <span class="text-xs font-medium leading-tight">{{ role.label }}</span>
          </div>
          <!-- Meta -->
          <div class="px-3 py-2 bg-surface-container-low text-on-surface-variant text-xs font-mono leading-relaxed">
            <div class="text-on-surface truncate">{{ role.cssVar }}</div>
            <div class="text-on-surface-muted">{{ role.bgClass }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mauve static palette -->
    <section class="mb-10">
      <h2 class="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">
        Mauve Palette <span class="normal-case font-normal">(static · OKLCH hue 296°)</span>
      </h2>
      <div class="flex gap-1.5 flex-wrap">
        <div
          v-for="step in mauveSteps"
          :key="step"
          class="flex flex-col items-center gap-1.5"
        >
          <div
            class="w-11 h-11 rounded-lg ring-1 ring-outline-variant"
            :class="`bg-mauve-${step}`"
          />
          <span class="text-xs font-mono text-on-surface-muted">{{ step }}</span>
        </div>
      </div>
    </section>

    <!-- Base element styles -->
    <section class="mb-10">
      <h2 class="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-3">
        Base Element Styles
      </h2>
      <div class="p-6 rounded-2xl bg-surface-container border border-outline-variant space-y-4 text-sm">
        <p class="text-on-surface-variant">
          These elements are styled automatically via <code>@layer base</code> in <code>main.css</code> — no Tailwind classes needed.
        </p>
        <div class="space-y-3">
          <div class="flex items-baseline gap-4">
            <span class="w-20 shrink-0 text-xs font-mono text-on-surface-muted">code</span>
            <span>Inline <code>code</code> gets a tinted chip: <code>surface-container-high</code> background, monospace font.</span>
          </div>
          <div class="flex items-baseline gap-4">
            <span class="w-20 shrink-0 text-xs font-mono text-on-surface-muted">pre</span>
            <pre class="flex-1 text-xs">pre blocks get surface-container background + padding</pre>
          </div>
          <div class="flex items-baseline gap-4">
            <span class="w-20 shrink-0 text-xs font-mono text-on-surface-muted">hr</span>
            <div class="flex-1"><hr /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to use -->
    <section class="mt-14 p-6 rounded-2xl bg-surface-container border border-outline-variant">
      <h2 class="text-sm font-semibold mb-4 text-on-surface">
        How to use
      </h2>
      <div class="space-y-3 text-sm text-on-surface-variant leading-relaxed">
        <p>
          Each token maps to a pair of values: one for light mode, one for dark.
          The correct value is resolved at paint time via CSS custom properties — no JavaScript required once the
          <span class="font-mono text-on-surface">data-theme</span> attribute is set.
        </p>
        <div class="font-mono text-xs bg-surface-container-highest rounded-lg p-4 text-on-surface leading-loose">
          <div class="text-on-surface-muted">/* Tailwind utility → CSS variable → mode value */</div>
          <div><span class="text-primary">bg-primary</span> → background-color: var(--md-primary)</div>
          <div><span class="text-secondary">text-secondary</span> → color: var(--md-secondary)</div>
          <div><span class="text-outline">border-outline</span> → border-color: var(--md-outline)</div>
        </div>
        <p>
          Use <span class="font-mono text-on-surface">bg-[color]</span> for backgrounds and
          <span class="font-mono text-on-surface">text-on-[color]</span> for the corresponding foreground.
          Example: <span class="font-mono text-on-surface">bg-primary text-on-primary</span>.
        </p>
      </div>
    </section>
  </main>
</template>
