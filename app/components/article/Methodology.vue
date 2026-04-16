<script setup lang="ts">
const { data } = await useAsyncData('article-methods', () =>
  fetchMockData({
    subsections: [
      {
        heading: '2.1 Animals and slice preparation',
        body: `Male and female C57BL/6J mice (8–12 weeks) were used in accordance with protocols approved by the MIT Institutional Animal Care and Use Committee (protocol #0421-043-24). Acute hippocampal slices (350 µm) were prepared in ice-cold NMDG-based cutting solution saturated with 95% O₂ / 5% CO₂ and recovered at 32°C in standard ACSF (in mM: 124 NaCl, 2.5 KCl, 1.25 NaH₂PO₄, 26 NaHCO₃, 2 CaCl₂, 1 MgCl₂, 10 glucose) for a minimum of 60 minutes before recording.`,
      },
      {
        heading: '2.2 Metabolic stress protocol',
        body: `Glucose deprivation was induced by substituting equimolar sucrose for glucose in the ACSF. Slices were perfused with glucose-free ACSF for 15 or 30 minutes, followed by reintroduction of 10 mM glucose. mTORC1 was inhibited with rapamycin (200 nM; pre-applied 30 min prior to deprivation) or activated with MHY1485 (2 µM). Vehicle controls received equivalent volumes of DMSO (<0.01% v/v).`,
      },
      {
        heading: '2.3 Electrophysiology',
        body: `Field EPSPs were recorded in stratum radiatum of CA1 using glass pipettes (2–4 MΩ) filled with ACSF. Schaffer collateral fibres were stimulated at 0.033 Hz with a bipolar tungsten electrode. Input–output curves were obtained prior to baseline recording; experiments were included only if fEPSP slope was stable (< ±5% drift) over a 20-minute baseline period. For whole-cell recordings, CA1 pyramidal neurons were patched in voltage-clamp at −70 mV. Series resistance was monitored throughout and cells were excluded if it changed > 20%.`,
      },
      {
        heading: '2.4 TIRF microscopy and receptor tracking',
        body: `Dissociated hippocampal neurons (DIV 18–22) expressing SEP-GluA1 were imaged on a Nikon Ti2 TIRF system (100× 1.49 NA objective, 488 nm laser). Evanescent field depth was set to ~100 nm to restrict illumination to the plasma membrane. Images were acquired at 1 Hz for 10-minute epochs before, during, and after glucose withdrawal. Single-particle tracking was performed using TrackMate (Fiji) with a Kalman filter; diffusion coefficients were extracted from mean-squared displacement analysis of trajectories ≥ 8 frames.`,
      },
      {
        heading: '2.5 Phosphoproteomics',
        body: `Hippocampal tissue was snap-frozen in liquid N₂ and subjected to tandem mass tag (TMT-16plex) phosphoproteomic profiling. Samples were processed using the EasyPhos workflow with Fe-NTA enrichment. Phosphopeptides were analysed on a Thermo Orbitrap Exploris 480 coupled to an EASY-nLC 1200 system. Data were searched against the UniProt mouse proteome (UP000000589) using Spectronaut 17 with a 1% FDR threshold at both peptide and protein levels.`,
      },
    ],
  }, 2800),
)
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-base font-semibold text-on-surface uppercase tracking-widest">2. Materials &amp; Methods</h2>
    <div
      v-for="sub in data?.subsections"
      :key="sub.heading"
      class="space-y-2"
    >
      <h3 class="text-sm font-semibold text-on-surface">{{ sub.heading }}</h3>
      <p class="text-sm text-on-surface-variant leading-relaxed">{{ sub.body }}</p>
    </div>
  </div>
</template>
