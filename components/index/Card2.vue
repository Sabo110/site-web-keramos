<template>
    <figure
      class="flex flex-col items-center justify-center p-8 text-center bg-[#1F2937] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-[#E5E7EB] dark:text-white">
          {{ titre }}
        </h3>
        <p class="my-4 text-[#D1D5DB]">
          {{ texte }}
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center">
        <img
          class="rounded-full w-9 h-9"
          :src="url"
          :alt="alt"
        />
      </figcaption>
    </figure>
</template>

<script setup>
const props = defineProps(['url', 'texte', 'titre', 'alt'])
</script>
