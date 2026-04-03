<script setup lang="ts">
const { data } = await useAsyncData('article-discussion', () =>
  fetchMockData({
    paragraphs: [
      `Our findings identify a novel mTOR-gated homeostatic pathway that couples hippocampal energy status to excitatory synaptic strength. The rapid, reversible nature of AMPAR dispersal following glucose deprivation — occurring within 15 minutes and fully dependent on mTORC1 activity — suggests a fast-acting metabolic checkpoint at glutamatergic synapses. This is consistent with the known role of mTORC1 in regulating local dendritic protein synthesis on a timescale of minutes, though our data indicate that the initial AMPAR dispersal does not require new protein synthesis, as it was not blocked by cycloheximide (data not shown). Rather, mTORC1-mediated phosphorylation of GluA1-Ser845 appears to be the proximal trigger for lateral receptor diffusion.`,
      `The occlusion of conventional LTD following repeated metabolic stress is particularly significant. Classical NMDA receptor-dependent LTD at CA1 synapses involves dephosphorylation of GluA1-Ser845 by calcineurin and subsequent AMPAR internalisation. Our data suggest that repeated metabolic stress engages an overlapping pool of synaptic AMPARs and converges on the same GluA1 phosphorylation site, albeit through an upstream mTORC1-dependent rather than calcineurin-dependent mechanism. Whether the two forms of plasticity share downstream effectors such as PICK1, NSF, or AP2 complex remains to be determined.`,
      `A limitation of the present study is that our pharmacological approaches (rapamycin, MHY1485) lack cell-type specificity and may affect both pre- and postsynaptic mTOR signalling, as well as glial cells within the slice preparation. Future studies using conditional knockout or CRISPR-based approaches targeted to CA1 pyramidal neurons will be necessary to dissect cell-autonomous contributions. Additionally, our phosphoproteomic analysis was performed on bulk hippocampal tissue, which precludes synapse-level resolution; phospho-APEX proximity proteomics approaches may help address this in subsequent work.`,
      `In a broader context, our results may help explain why acute hypoglycaemia impairs declarative memory consolidation in humans — a process heavily dependent on CA1 plasticity — and why chronic metabolic disease is associated with accelerated hippocampal atrophy. If repeated bouts of metabolic stress produce persistent LTD-like depression at CA1 synapses, cumulative synapse weakening over years of metabolic dysfunction could contribute to the cognitive decline observed in type 2 diabetes and related conditions. Targeting mTORC1 or GluA1-Ser845 phosphorylation may therefore represent a viable neuroprotective strategy in metabolic neurodegenerative contexts.`,
    ],
  }, 2400),
)
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-base font-semibold text-slate-100 uppercase tracking-widest">4. Discussion</h2>
    <p
      v-for="(p, i) in data?.paragraphs"
      :key="i"
      class="text-sm text-slate-300 leading-relaxed"
    >
      {{ p }}
    </p>
  </div>
</template>
