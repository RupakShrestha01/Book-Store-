<template>
  <section class="carousel" aria-label="carousel" Tabindex="0">
    <div class="slides">
      <div
        class="slides-item slide-1"
        id="slide-1"
        aria-label="slide 1 of 5"
        tabindex="0"
      >
        1
      </div>
      <div
        class="slides-item slide-2"
        id="slide-2"
        aria-label="slide 2 of 5"
        tabindex="0"
      >
        2
      </div>
      <div
        class="slides-item slide-3"
        id="slide-3"
        aria-label="slide 3 of 5"
        tabindex="0"
      >
        3
      </div>
      <div
        class="slides-item slide-4"
        id="slide-4"
        aria-label="slide 4 of 5"
        tabindex="0"
      >
        4
      </div>
      <div
        class="slides-item slide-5"
        id="slide-5"
        aria-label="slide 5 of 5"
        tabindex="0"
      >
        5
      </div>
    </div>
    <div class="carousel__nav">
      <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
      <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
      <a class="slider-nav" href="#slide-3" aria-label="Go to slide 3">3</a>
      <a class="slider-nav" href="#slide-4" aria-label="Go to slide 4">4</a>
      <a class="slider-nav" href="#slide-5" aria-label="Go to slide 5">5</a>
    </div>
    <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
  </section>
</template>

<style>
.carousel {
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
}

.slides {
  width: 100%;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.slides::-webkit-scrollbar {
  display: none;
}

.slides-item {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-size: 100px;
  height: 600px;
  justify-content: center;
  margin: 0 1rem;
  position: relative;
  scroll-snap-align: start;
  transform: scale(1);
  transform-origin: center center;
  transition: transform 0.5s;
  width: 100%;
}

.carousel__nav {
  padding: 1.25rem 0.5rem;
}

.slider-nav {
  align-items: center;
  background-color: #ddd;
  border-radius: 50%;
  color: #000;
  display: inline-flex;
  height: 1.5rem;
  justify-content: center;
  padding: 0.5rem;
  margin-left: 1rem;
  position: relative;
  text-decoration: none;
  width: 1.5rem;
}

.slider-nav:hover,
.slider-nav:active {
  background-color: #000;
  color: #fff;
}

.slide-1 {
  background-image: url("assets/img/2.jpeg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.slide-2 {
  background-color: #bfd;
}

.slide-3 {
  background-color: #cdf;
}

.slide-4 {
  background-color: #dca;
}

.slide-5 {
  background-color: #ffc;
}
</style>