<template>
  <div
    class="max-w-sm  border border-b-[#9CA3AF] bg-[#FFFFFF] dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
    <a href="#">
      <img class="" :src="src" :alt="description" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#111827] dark:text-white">
         {{ titre }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-[#374151] dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['titre', 'description', 'src'])
</script>
