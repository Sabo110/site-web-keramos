<template>
  <div
    class="max-w-sm p-6 bg-[#FFFFFF] border-b border-r  border-[#D1D5DB] dark:bg-gray-800 dark:border-gray-700"
  >
    <slot></slot>
    <a href="#">
      <h5
        class="mb-2 mt-3 text-2xl font-semibold tracking-tight text-[#111827] dark:text-white"
      >
        {{ titre }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-[#6B7280] dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['titre', 'description'])
</script>
