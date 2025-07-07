<template>
  <div class="relative h-[26rem] md:h-[30rem] bg-gray-200 overflow-hidden"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
    <div 
      class="flex h-full transition-transform duration-300"
      :style="{
        transform: `translateX(calc(-${currentSlide * 100}% + ${offsetX}px))`,
        transition: isDragging ? 'none' : 'transform 0.3s ease'
      }">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="w-full flex-shrink-0 flex flex-col p-5 pt-59 md:pt-59 md:p-15"
      >
        <div class="flex space-x-2 pb-2">
          <button 
            v-for="(_, dotIndex) in slides" 
            :key="dotIndex"
            class="w-1.5 h-1.5 rounded-full transition-colors"
            :class="{ 'bg-black': currentSlide === dotIndex, 'bg-gray-400': currentSlide !== dotIndex }"
            />
        </div>
        <h1 class="text-2xl md:text-3xl font-medium pb-1">{{ slide.subtitle }}</h1>
        <h2 class="mb-4 text-lg md:text-xl leading-tight whitespace-pre-line">{{ slide.title }}</h2>
        <div class="w-40 md:w-48 h-8 flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100">
          <p class="text-xs">{{ slide.buttonText }}</p>
          <img src="public/arrow.png" class="h-2.5 w-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentSlide = ref(0);
const offsetX = ref(0);
const isDragging = ref(false);
const startX = ref(0);

const slides = [
  {
    subtitle: "День дегустации",
    title: "Дегустация лучших\nвин Италии",
    buttonText: "Узнать подробнее"
  },
  {
    subtitle: "День дегустации",
    title: "Дегустация лучших\nвин Италии",
    buttonText: "Узнать подробнее"
  },
  {
    subtitle: "День дегустации",
    title: "Дегустация лучших\nвин Италии",
    buttonText: "Узнать подробнее"
  },
  {
    subtitle: "День дегустации",
    title: "Дегустация лучших\nвин Италии",
    buttonText: "Узнать подробнее"
  },
  {
    subtitle: "День дегустации",
    title: "Дегустация лучших\nвин Италии",
    buttonText: "Узнать подробнее"
  }
];

const startDrag = (clientX) => {
  isDragging.value = true;
  startX.value = clientX;
  offsetX.value = 0;
};

const duringDrag = (clientX) => {
  if (!isDragging.value) return;
  offsetX.value = clientX - startX.value;
};

const endDrag = () => {
  if (!isDragging.value) return;
  
  const threshold = 50;
  
  if (offsetX.value > threshold) {
    prevSlide();
  } else if (offsetX.value < -threshold) {
    nextSlide();
  }
  
  isDragging.value = false;
  offsetX.value = 0;
};

const handleTouchStart = (e) => {
  startDrag(e.touches[0].clientX);
};

const handleTouchMove = (e) => {
  duringDrag(e.touches[0].clientX);
  e.preventDefault();
};

const handleTouchEnd = () => {
  endDrag();
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

onMounted(() => {
  const interval = setInterval(() => {
    if (!isDragging.value) {
      nextSlide();
    }
  }, 5000);
  onUnmounted(() => clearInterval(interval));
});

</script>