<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'hero' | 'md' | 'sm'
  title?: string
  showSummary?: boolean
}>(), {
  showSummary: false,
})

const category = computed(() => {
  switch (props.variant) {
    case 'hero':
      return 'Hero'
    case 'md':
      return 'Medium'
    case 'sm':
      return 'Small'
    default:
      return 'Default'
  }
})

const fontClasses = computed(() => {
  switch (props.variant) {
    case 'hero':
      return 'text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight'
    case 'md':
      return 'text-xl leading-snug'
    case 'sm':
      return 'text-base leading-snug'
    default:
      return 'text-base'
  }
})

function say(message) {
  alert(message)
}
</script>

<template>
  <article class="group grid grid-cols-1 items-center" :class="[variant === 'hero' ? 'lg:grid-cols-2 gap-8 lg:gap-12' : 'lg:grid-cols-1 gap-4']">
    <!-- Image -->
    <NuxtLink v-if="variant !== 'sm'" to="/" class="block focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-lg w-full">
      <img
        :src="`https://random.danielpetrica.com/api/random?size=small&seed=${category}`"
        lt="A random image different from the others"
        loading="lazy"
        class="w-full  aspect-video object-cover rounded-lg bg-container-primary"
      >
    </NuxtLink>
    <!-- Text Content -->
    <div class="hover:cursor-pointer flex flex-col gap-2" @click="say('Woops -- clicked it!')">
      <p class="text-xs uppercase tracking-wider font-semibold text-purple-300">
        {{ category }}
      </p>
      <h3 :class="fontClasses" class="font-bold group-hover:text-purple-600 transition-colors duration-200 leading-snug line-clamp-2">
        {{ title || 'This is a reusable card component that can be used to display content in a visually appealing way.' }}
      </h3>
      <p v-if="showSummary" class="text-sm opacity-80 leading-relaxed line-clamp-3">
        This is some example content inside the card. You can replace this with your own content.
      </p>
      <p class="text-xs opacity-60">
        <time>Feb 15, 2026</time>
      </p>
    </div>
  </article>
</template>
