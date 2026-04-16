<script setup lang="ts">
const contacts = [
  {
    name: 'Dr. Elena Vasquez',
    email: 'e.vasquez@institute.org',
    phone: '+1 (617) 555-0142',
    initials: 'EV',
    bgClass: 'bg-primary',
    fgClass: 'text-on-primary',
  },
  {
    name: 'Prof. James Okafor',
    email: 'j.okafor@university.edu',
    phone: '+1 (312) 555-0287',
    initials: 'JO',
    bgClass: 'bg-secondary',
    fgClass: 'text-on-secondary',
  },
  {
    name: 'Dr. Mei-Lin Chen',
    email: 'm.chen@researchlab.net',
    phone: null,
    initials: 'MC',
    bgClass: 'bg-error',
    fgClass: 'text-on-error',
  },
  {
    name: 'Thomas Brandt',
    email: 't.brandt@eu-consortium.eu',
    phone: '+49 30 555 0193',
    initials: 'TB',
    bgClass: 'bg-tertiary',
    fgClass: 'text-on-tertiary',
  },
  {
    name: 'Dr. Aisha Ndiaye',
    email: 'a.ndiaye@globalhealth.org',
    phone: null,
    initials: 'AN',
    bgClass: 'bg-primary-container',
    fgClass: 'text-on-primary-container',
  },
]

const resources = [
  { label: 'NIH Open Access Repository', href: 'https://www.ncbi.nlm.nih.gov/pmc/' },
  { label: 'arXiv Preprint Server', href: 'https://arxiv.org' },
  { label: 'Zenodo Research Data', href: 'https://zenodo.org' },
  { label: 'ORCID Researcher Profiles', href: 'https://orcid.org' },
  { label: 'CrossRef DOI Lookup', href: 'https://www.crossref.org' },
  { label: 'OpenAlex Scholarly Graph', href: 'https://openalex.org' },
]

const metadata = [
  ['DOI', '10.1038/s41586-024-07281-4'],
  ['Published', 'March 14, 2025'],
  ['Journal', 'Nature Biomedical Engineering'],
  ['Volume / Issue', 'Vol. 9, Issue 3'],
  ['Pages', '412–429'],
  ['Received', 'November 2, 2024'],
  ['Accepted', 'February 18, 2025'],
  ['License', 'CC BY 4.0'],
]
</script>

<template>
  <section class="mx-4 lg:mx-6 space-y-10">
    <!-- Points of Contact -->
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-4">
        Points of Contact
      </h2>
      <ul class="space-y-3">
        <li
          v-for="poc in contacts"
          :key="poc.email"
          class="flex items-center gap-4"
        >
          <span
            class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold select-none"
            :class="[poc.bgClass, poc.fgClass]"
          >
            {{ poc.initials }}
          </span>
          <div class="min-w-0">
            <p class="text-sm font-medium text-on-surface truncate">
              {{ poc.name }}
            </p>
            <p class="text-xs text-on-surface-variant truncate">
              {{ poc.email }}
            </p>
            <p v-if="poc.phone" class="text-xs text-on-surface-muted">
              {{ poc.phone }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- External Resources -->
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-4">
        External Resources
      </h2>
      <ul class="space-y-2">
        <li v-for="res in resources" :key="res.href">
          <a
            :href="res.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-primary hover:text-primary/70 hover:underline transition-colors"
          >
            {{ res.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Article Metadata -->
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-4">
        Article Metadata
      </h2>
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr
            v-for="([label, value], i) in metadata"
            :key="label"
            :class="i % 2 === 0 ? 'bg-surface-container' : ''"
          >
            <td class="py-2 px-3 text-on-surface-variant font-semibold whitespace-nowrap w-1/3">
              {{ label }}
            </td>
            <td class="py-2 px-3 text-on-surface break-all">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
