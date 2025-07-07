<template>
  <div class="flex overflow-x-auto whitespace-nowrap py-2 md:py-3 px-2 space-x-3 no-scrollbar md:justify-center">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="flex flex-col items-center flex-shrink-0"
    >
      <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-black flex items-center justify-center">
        <!-- Иконка или контент внутри круга -->
      </div>
      <p class="text-xs mt-1 md:text-lg">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  { text: 'Снова у нас' },
  { text: 'Снова у нас' },
  { text: 'Снова у нас' },
  { text: 'Снова у нас' },
  { text: 'Снова у нас' },
  { text: 'Снова у нас' },
]);
</script>

<style>
.no-scrollbar {
  -ms-overflow-style: 'none';
  scrollbar-width: 'none';
}
</style>