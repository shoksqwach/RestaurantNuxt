<template>
  <div class="px-4 py-4 max-w-6xl mx-auto">
    <!-- Подключаем компонент поиска -->
    <SearchInput @search="handleSearch" />

    <!-- Кнопки категорий -->
    <div class="flex space-x-3 mb-4 md:mb-5 overflow-x-auto pb-2 no-scrollbar md:justify-center">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="toggleCategory(category.id)"
        class="px-4 py-2 whitespace-nowrap rounded-full transition-colors"
        :class="{
          'bg-gray-100 text-gray-500': !selectedCategory || selectedCategory !== category.id,
          'bg-black text-white': selectedCategory === category.id
        }"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Отображение товаров -->
    <template v-if="shouldShowFilteredView">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <DishCard 
          v-for="dish in filteredDishes"
          :key="dish.id"
          :dish="dish"
        />
      </div>
    </template>
    <template v-else>
      <div 
        v-for="category in categories" 
        :key="'cat-'+category.id" 
        class="mb-8 md:mb-12"
      >
        <h2 class="text-lg md:text-xl font-bold mb-3 md:mb-4">{{ category.name }}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <DishCard 
            v-for="dish in getDishesByCategory(category.id)"
            :key="dish.id"
            :dish="dish"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref(null)

const categories = [
  { id: 'recommendations', name: 'Рекомендуем' },
  { id: 'hot', name: 'Горячее' },
  { id: 'salads', name: 'Салаты' }
]

const allDishes = [
  { id: 1, price: '1 499', name: 'Французский луковый суп', weight: '450', category: 'recommendations' },
  { id: 2, price: '2 499', name: 'Говядина по-бургундски', weight: '450', category: 'recommendations' },
  { id: 3, price: '2 499', name: 'Киш с грибами и шпинатом', weight: '450', category: 'recommendations' },
  { id: 4, price: '3 499', name: 'Говядина по-бургундски', weight: '450', category: 'recommendations' },
  { id: 5, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'hot' },
  { id: 6, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'hot' },
  { id: 7, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'hot' },
  { id: 8, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'hot' },
  { id: 9, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'salads' },
  { id: 10, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'salads' },
  { id: 11, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'salads' },
  { id: 12, price: '499', name: 'Суп гороховый с конечностями', weight: '450', category: 'salads' },
]

const handleSearch = (query) => {
  searchQuery.value = query
  if (query) {
    selectedCategory.value = null
  }
}

const toggleCategory = (categoryId) => {
  if (selectedCategory.value === categoryId) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = categoryId
    searchQuery.value = ''
  }
}

const getDishesByCategory = (categoryId) => {
  return allDishes.filter(d => d.category === categoryId)
}

const shouldShowFilteredView = computed(() => {
  return !!searchQuery.value || !!selectedCategory.value
})

const filteredDishes = computed(() => {
  let dishes = allDishes
  
  if (selectedCategory.value) {
    dishes = dishes.filter(d => d.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase().trim()
    dishes = dishes.filter(d => d.name.toLowerCase().includes(query))
  }
  
  return dishes
})
</script>

<style>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>