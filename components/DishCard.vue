<template>
  <div class="relative w-full mb-4 md:mb-5 bg-gray-100 rounded-2xl flex flex-col">
    <div class="w-auto aspect-square m-1 rounded-2xl bg-gray-200"></div>
    <div class="px-2 pt-2 pb-1">
      <p class="font-bold text-sm md:text-base">{{ dish.price }} ₽</p>
      <div class="text-xs md:text-sm leading-tight py-1">{{ dish.name }}</div>
      <div class="text-xs text-gray-500 font-semibold pb-2">{{ dish.weight }} г</div>
    </div>
    <img src="@/public/favorite.png" class="h-5 w-5 md:h-6 md:w-6 absolute bottom-2 right-2" />
  </div>
</template>

<script setup>
defineProps({
  dish: {
    type: Object,
    required: true
  }
})
</script>