<template>
  <div id="indicators-carousel" class="relative" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div
        class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
        data-carousel-item="active"
      >
        <img
          src="https://images.pexels.com/photos/5530604/pexels-photo-5530604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div
        class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
        data-carousel-item=""
      >
        <img
          src="https://images.pexels.com/photos/5530604/pexels-photo-5530604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
        data-carousel-item=""
      >
        <img
          src="/docs/images/carousel/carousel-3.svg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
