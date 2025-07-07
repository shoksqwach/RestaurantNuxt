<template>
  <div class="relative mb-3 md:mb-4 flex items-center w-full pl-3 bg-gray-100 rounded-2xl h-12 md:w-180 md:mx-auto">
    <img src="@/public/search.png" class="h-3.5 w-4.5 mr-2" />
    <input
      v-model="searchValue"
      type="text"
      placeholder="Искать в меню"
      class="w-full focus:outline-none bg-transparent"
      @input="handleInput"
    />
    <img src="@/public/profile.png" class="h-9 w-9 ml-auto mr-1 md:mr-4" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchValue = ref('')
const emit = defineEmits(['search'])

const handleInput = () => {
  emit('search', searchValue.value)
}
</script>