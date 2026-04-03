<script setup lang="ts">
const { data } = await useAsyncData('article-results', () =>
  fetchMockData({
    subsections: [
      {
        heading: '3.1 Glucose deprivation rapidly reduces surface AMPAR expression',
        body: `To test whether metabolic stress affects AMPAR surface trafficking, we performed live-cell TIRF microscopy of SEP-GluA1 in dissociated CA1 neurons. Within 15 minutes of glucose withdrawal, surface SEP-GluA1 fluorescence decreased by 34 ± 6% (mean ± SEM; n = 24 cells, p < 0.001, paired t-test; Fig. 1A–C). This reduction was fully reversible upon glucose re-supplementation within 20 minutes. Parallel single-particle tracking revealed a significant increase in the mobile fraction of GluA1 (from 42 ± 4% to 68 ± 5%), indicating enhanced lateral diffusion away from synaptic sites rather than bulk endocytosis.`,
      },
      {
        heading: '3.2 mTORC1 activity is required for stress-induced AMPAR dispersal',
        body: `Phosphoproteomic profiling of hippocampal tissue subjected to 15-minute glucose deprivation identified 412 significantly regulated phosphosites (FDR < 0.05, |log₂FC| > 0.5). Among the most strongly upregulated was GluA1-pSer845 (log₂FC = 1.74 ± 0.21), a site previously associated with AMPAR removal from synapses. Pre-treatment with the mTORC1 inhibitor rapamycin (200 nM) completely prevented both pSer845 upregulation and the decrease in SEP-GluA1 surface fluorescence (Fig. 2A–D). Conversely, pharmacological activation of mTORC1 with MHY1485 (2 µM) in normoglycaemic conditions was sufficient to recapitulate both effects.`,
      },
      {
        heading: '3.3 Repeated metabolic stress induces persistent synaptic depression',
        body: `A single 15-minute episode of glucose deprivation produced a transient depression of fEPSP slope that recovered to baseline within 30 minutes of glucose re-introduction (92 ± 5% of baseline at t = 60 min post-deprivation; n = 9 slices). However, three consecutive deprivation episodes (each 15 min, separated by 30-min recovery periods) produced lasting fEPSP depression that persisted for the duration of the recording (65 ± 7% of baseline at t = 90 min post-final deprivation; n = 11 slices; Fig. 3A,B). This persistent depression was not further reduced by standard low-frequency stimulation LTD induction (1 Hz, 900 pulses), suggesting occlusion of a shared downstream mechanism (Fig. 3C).`,
      },
    ],
    figures: [
      {
        id: 'Fig. 1',
        caption: 'Glucose deprivation reduces synaptic AMPAR surface expression. (A) Representative TIRF images of SEP-GluA1 in CA1 neurons under control and glucose-deprived conditions. Scale bar, 5 µm. (B) Time-course of normalised SEP-GluA1 fluorescence. Shaded region indicates glucose deprivation period. (C) Quantification of surface SEP-GluA1 at t = 15 min. ***p < 0.001.',
      },
      {
        id: 'Fig. 2',
        caption: 'mTORC1-dependent phosphorylation of GluA1-Ser845 mediates metabolic stress-induced AMPAR dispersal. (A) Volcano plot of phosphoproteomics data. (B) GluA1-pSer845 log₂ fold-changes across conditions. (C,D) Effect of rapamycin and MHY1485 on SEP-GluA1 surface expression. n.s. = not significant; ***p < 0.001.',
      },
      {
        id: 'Fig. 3',
        caption: 'Repeated metabolic stress induces persistent LTD-like depression. (A) Schematic of the repeated deprivation protocol. (B) fEPSP slopes normalised to baseline following single vs. repeated stress. (C) LFS-LTD occlusion experiment. Data are mean ± SEM.',
      },
    ],
  }, 3200))
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-base font-semibold text-slate-100 uppercase tracking-widest">
      3. Results
    </h2>

    <!-- Text subsections -->
    <div
      v-for="sub in data?.subsections"
      :key="sub.heading"
      class="space-y-2"
    >
      <h3 class="text-sm font-semibold text-slate-200">
        {{ sub.heading }}
      </h3>
      <p class="text-sm text-slate-300 leading-relaxed">
        {{ sub.body }}
      </p>
    </div>

    <!-- Figure placeholders -->
    <div class="space-y-4">
      <div
        v-for="fig in data?.figures"
        :key="fig.id"
        class="border border-white/10 rounded-lg overflow-hidden"
      >
        <div class="bg-white/5 aspect-[16/7] flex items-center justify-center text-slate-600 text-sm font-mono">
          <img
            src="https://random.danielpetrica.com/api/random?size=small&seed=test"
            lt="A random image different from the others"
            loading="lazy"
            class="w-full rounded-none bg-container-primary"
          >
        </div>
        <p class="text-xs text-slate-400 leading-relaxed p-3 border-t border-white/8">
          <span class="font-semibold text-slate-300">{{ fig.id }}. </span>{{ fig.caption }}
        </p>
      </div>
    </div>
  </div>
</template>
