<script setup lang="ts">
const { data } = await useAsyncData('article-intro', () =>
  fetchMockData({
    paragraphs: [
      `Synaptic plasticity — the ability of individual synapses to strengthen or weaken in response to activity — is widely regarded as a cellular substrate of learning and memory. The Hebbian forms of plasticity, long-term potentiation (LTP) and long-term depression (LTD), have been studied extensively in the CA1 region of the hippocampus, where AMPA-type glutamate receptors (AMPARs) serve as primary effectors of synaptic weight changes. Regulated trafficking of AMPARs to and from the postsynaptic density (PSD) is orchestrated by scaffolding proteins, kinases, and phosphatases that respond to intracellular signalling cascades triggered by calcium influx through NMDA receptors and voltage-gated calcium channels.`,
      `Cellular metabolism and synaptic function are intimately linked. Neurons, which account for approximately 20% of the body's total energy expenditure despite comprising only 2% of its mass, are exquisitely sensitive to fluctuations in glucose availability. Acute hypoglycaemia impairs cognitive performance in both humans and rodents, and chronic metabolic dysregulation — as in type 2 diabetes or obesity — is associated with elevated risk of dementia and accelerated hippocampal atrophy. Despite these clinical correlations, the molecular pathways that transduce metabolic signals into lasting changes in synaptic strength remain poorly characterised.`,
      `mTOR complex 1 (mTORC1) is a serine/threonine kinase that functions as a master integrator of nutrient availability, growth factor signalling, and cellular energy status. In neurons, mTORC1 regulates local protein synthesis at dendrites and has been implicated in the late maintenance phase of LTP. Several studies have reported that mTORC1 activity is reduced during acute energy deficit through AMP-activated protein kinase (AMPK)-mediated phosphorylation of the mTORC1 component Raptor. However, whether these changes in mTORC1 activity couple directly to AMPAR trafficking during metabolic stress has not been demonstrated.`,
      `Here we report that brief, reversible glucose deprivation in hippocampal slices and dissociated CA1 cultures rapidly downregulates surface AMPAR expression through an mTORC1-dependent mechanism involving phosphorylation of GluA1 at Ser845. We further demonstrate that repeated metabolic stress episodes produce persistent synaptic depression that shares mechanistic features with, but is mechanistically separable from, conventional NMDA receptor-dependent LTD.`,
    ],
  }, 2000),
)
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-base font-semibold text-on-surface uppercase tracking-widest">1. Introduction</h2>
    <p
      v-for="(p, i) in data?.paragraphs"
      :key="i"
      class="text-sm text-on-surface-variant leading-relaxed"
    >
      {{ p }}
    </p>
  </div>
</template>
