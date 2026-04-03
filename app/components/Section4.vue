<script setup lang="ts">
const contacts = [
  {
    name: 'Dr. Elena Vasquez',
    email: 'e.vasquez@institute.org',
    phone: '+1 (617) 555-0142',
    initials: 'EV',
    color: 'bg-indigo-500',
  },
  {
    name: 'Prof. James Okafor',
    email: 'j.okafor@university.edu',
    phone: '+1 (312) 555-0287',
    initials: 'JO',
    color: 'bg-emerald-500',
  },
  {
    name: 'Dr. Mei-Lin Chen',
    email: 'm.chen@researchlab.net',
    phone: null,
    initials: 'MC',
    color: 'bg-rose-500',
  },
  {
    name: 'Thomas Brandt',
    email: 't.brandt@eu-consortium.eu',
    phone: '+49 30 555 0193',
    initials: 'TB',
    color: 'bg-amber-500',
  },
  {
    name: 'Dr. Aisha Ndiaye',
    email: 'a.ndiaye@globalhealth.org',
    phone: null,
    initials: 'AN',
    color: 'bg-violet-500',
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
      <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Points of Contact
      </h2>
      <ul class="space-y-3">
        <li
          v-for="poc in contacts"
          :key="poc.email"
          class="flex items-center gap-4"
        >
          <span
            class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white select-none"
            :class="poc.color"
          >
            {{ poc.initials }}
          </span>
          <div class="min-w-0">
            <p class="text-sm font-medium text-slate-100 truncate">
              {{ poc.name }}
            </p>
            <p class="text-xs text-slate-400 truncate">
              {{ poc.email }}
            </p>
            <p v-if="poc.phone" class="text-xs text-slate-500">
              {{ poc.phone }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- External Resources -->
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
        External Resources
      </h2>
      <ul class="space-y-2">
        <li v-for="res in resources" :key="res.href">
          <a
            :href="res.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
          >
            {{ res.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Article Metadata -->
    <div>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Article Metadata
      </h2>
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr
            v-for="([label, value], i) in metadata"
            :key="label"
            :class="i % 2 === 0 ? 'bg-white/4' : ''"
          >
            <td class="py-2 px-3 text-slate-400 font-semibold whitespace-nowrap w-1/3">
              {{ label }}
            </td>
            <td class="py-2 px-3 text-slate-100 break-all">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
