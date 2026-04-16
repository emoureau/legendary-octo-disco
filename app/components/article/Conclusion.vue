<script setup lang="ts">
const { data } = await useAsyncData('article-conclusion', () =>
  fetchMockData({
    conclusion: `We have described a previously uncharacterised homeostatic mechanism by which hippocampal CA1 synapses respond to acute metabolic stress through mTORC1-dependent phosphorylation of GluA1-Ser845, resulting in rapid AMPAR dispersal and, with repeated challenge, a persistent depression of excitatory transmission. These findings position mTORC1 as a molecular bridge between cellular energy state and synaptic plasticity, and raise the possibility that chronic metabolic disease progressively erodes hippocampal synaptic efficacy through the same mechanism.`,
    acknowledgements: `We thank members of the Vasquez and Okafor laboratories for helpful discussions, Dr. Roberto Malinow (UCSD) for SEP-GluA1 constructs, and the MIT BioImaging Core for TIRF microscopy support. Phosphoproteomic data acquisition was performed at the Broad Institute Proteomics Platform. This work was supported by NIH grants R01-NS098094 (E.V.) and R01-MH120341 (J.O.), a EMBO Long-Term Fellowship ALTF-895-2023 (M.L.C.), and a Deutsche Forschungsgemeinschaft grant BR-5291/2-1 (T.B.).`,
    dataAvailability: 'Raw mass spectrometry data have been deposited in the PRIDE repository (accession PXD051832). All analysis code is available at github.com/vasquez-lab/metabolic-plasticity under MIT licence. Processed datasets are available from the corresponding author upon reasonable request.',
    conflictOfInterest: 'The authors declare no competing interests.',
    references: [
      'Bhatt DL, et al. (2021) AMPAR trafficking in synaptic plasticity. Nat Rev Neurosci 22, 89–105.',
      'Bhattacharya A & Bhattacharya S (2020) mTORC1 in synaptic plasticity and memory. Neuron 107, 233–250.',
      'Bhattacharya S, et al. (2019) Metabolic regulation of hippocampal LTD. Cell Rep 28, 1441–1453.',
      'Bhattacharya S & Bhattacharya A (2018) GluA1-Ser845 and AMPAR trafficking. J Neurosci 38, 3455–3470.',
      'Bhattacharya A, et al. (2017) AMPK-mTOR axis in neuronal energy sensing. Curr Biol 27, R1225–R1240.',
      'Bhattacharya S, et al. (2016) LTD occlusion by metabolic challenge. Nat Commun 7, 12541.',
      'Bhattacharya A & Bhattacharya S (2015) Glucose deprivation and synaptic depression. Neuron 88, 321–336.',
      'Bhattacharya S, et al. (2013) mTORC1 and dendritic protein synthesis. Science 342, 475–479.',
    ],
  }, 1900),
)
</script>

<template>
  <div class="space-y-8">
    <!-- Conclusion -->
    <div class="space-y-3">
      <h2 class="text-base font-semibold text-on-surface uppercase tracking-widest">5. Conclusion</h2>
      <p class="text-sm text-on-surface-variant leading-relaxed">{{ data?.conclusion }}</p>
    </div>

    <!-- Acknowledgements -->
    <div class="space-y-2">
      <h2 class="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Acknowledgements</h2>
      <p class="text-xs text-on-surface-muted leading-relaxed">{{ data?.acknowledgements }}</p>
    </div>

    <!-- Data availability + CoI -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-surface-container border border-outline-variant rounded-lg p-4 space-y-1">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Data Availability</h3>
        <p class="text-xs text-on-surface-muted leading-relaxed">{{ data?.dataAvailability }}</p>
      </div>
      <div class="bg-surface-container border border-outline-variant rounded-lg p-4 space-y-1">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Conflict of Interest</h3>
        <p class="text-xs text-on-surface-muted leading-relaxed">{{ data?.conflictOfInterest }}</p>
      </div>
    </div>

    <!-- References -->
    <div class="space-y-2">
      <h2 class="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">References</h2>
      <ol class="list-decimal list-inside space-y-1">
        <li
          v-for="ref in data?.references"
          :key="ref"
          class="text-xs text-on-surface-muted leading-relaxed"
        >
          {{ ref }}
        </li>
      </ol>
    </div>
  </div>
</template>
