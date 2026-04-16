<script setup lang="ts">
const { data } = await useAsyncData('article-header', () =>
  fetchMockData({
    journal: 'Nature Neuroscience',
    volume: 'Vol. 28 | Issue 4 | April 2025',
    doi: '10.1038/s41593-025-01847-z',
    title: 'Metabolic stress-induced synaptic remodelling in hippocampal CA1 pyramidal neurons via mTOR-dependent AMPA receptor trafficking',
    authors: [
      { name: 'Dr. Elena Vasquez', affiliation: '1,2' },
      { name: 'Prof. James Okafor', affiliation: '1' },
      { name: 'Dr. Mei-Lin Chen', affiliation: '3' },
      { name: 'Thomas Brandt', affiliation: '2,4' },
      { name: 'Dr. Aisha Ndiaye', affiliation: '1,3' },
    ],
    affiliations: [
      '1. Department of Neuroscience, MIT, Cambridge, MA, USA',
      '2. Broad Institute of MIT and Harvard, Cambridge, MA, USA',
      '3. Max Planck Institute for Brain Research, Frankfurt, Germany',
      '4. Charité – Universitätsmedizin Berlin, Germany',
    ],
    keywords: ['synaptic plasticity', 'mTOR signalling', 'AMPA receptors', 'metabolic stress', 'hippocampus', 'LTP'],
    abstract: `Neurons in the hippocampal CA1 region exhibit remarkable adaptive capacity in response to acute metabolic perturbations, yet the molecular mechanisms linking energetic state to synaptic strength remain incompletely understood. Here we demonstrate that transient glucose deprivation triggers rapid, reversible changes in AMPA receptor (AMPAR) surface expression at CA1 synapses through a mechanism requiring mTOR complex 1 (mTORC1) activity. Using a combination of live-cell TIRF microscopy, slice electrophysiology, and quantitative phosphoproteomics, we show that metabolic stress enhances GluA1 phosphorylation at Ser845 within 15 minutes, promoting lateral diffusion of AMPARs away from the postsynaptic density. This process is blocked by rapamycin and mimicked by pharmacological mTORC1 activation. Furthermore, repeated bouts of metabolic stress induce lasting depression of excitatory transmission that occludes conventional LTD induction. Our findings reveal an mTOR-gated homeostatic mechanism that couples cellular energy status to synaptic weight, with implications for understanding synaptic dysfunction in metabolic disorders including type 2 diabetes and ischaemic injury.`,
  }, 1500),
)
</script>

<template>
  <div class="space-y-5 pb-8 border-b border-outline-variant">
    <!-- Journal badge -->
    <div class="flex items-center gap-3 flex-wrap">
      <span class="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded">
        {{ data?.journal }}
      </span>
      <span class="text-xs text-on-surface-muted">{{ data?.volume }}</span>
      <span class="text-xs text-on-surface-muted">DOI: {{ data?.doi }}</span>
    </div>

    <!-- Title -->
    <h1 class="text-2xl lg:text-3xl font-bold text-on-surface leading-snug">
      {{ data?.title }}
    </h1>

    <!-- Authors -->
    <div class="text-sm text-on-surface-variant space-y-1">
      <p>
        <span
          v-for="(author, i) in data?.authors"
          :key="author.name"
        >{{ author.name }}<sup class="text-primary text-[10px]">{{ author.affiliation }}</sup><span v-if="i < (data?.authors.length ?? 0) - 1">, </span></span>
      </p>
      <ul class="text-xs text-on-surface-muted space-y-0.5 mt-2">
        <li v-for="aff in data?.affiliations" :key="aff">{{ aff }}</li>
      </ul>
    </div>

    <!-- Keywords -->
    <div class="flex flex-wrap gap-2">
      <span
        v-for="kw in data?.keywords"
        :key="kw"
        class="text-xs bg-surface-container text-on-surface-variant border border-outline-variant px-2 py-0.5 rounded-full"
      >
        {{ kw }}
      </span>
    </div>

    <!-- Abstract -->
    <div class="bg-surface-container border border-outline-variant rounded-lg p-5 space-y-2">
      <h2 class="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Abstract</h2>
      <p class="text-sm text-on-surface leading-relaxed">{{ data?.abstract }}</p>
    </div>
  </div>
</template>
