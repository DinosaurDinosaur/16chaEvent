<template>
  <div class="slider">
    <div class="slider_container swiper">
      <div class="slider_wrap swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="prize in prizes"
          :key="prize.awards_id"
          :class="{
            active:
              isPrizeAlmostDone(prize.awards_last_nu) &&
              !isPrizeDone(prize.awards_last_nu),
            done: isPrizeDone(prize.awards_last_nu),
          }"
        >
          <div v-if="isPrizeAlmostDone(prize.awards_last_nu)" class="deco">
            <span v-if="isPrizeDone(prize.awards_last_nu)" class="text_done"
              >兌換完畢</span
            >
            <span v-else class="text_remind">
              剩<span class="italic">{{ prize.awards_last_nu }}</span
              >組
            </span>
          </div>
          <div
            class="slide-img"
            :style="{
              backgroundImage: `url(${baseURL}images/index/prize/${prize.img})`,
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="swiper-button-next" ga="prize-swiper-next"></div>
    <div class="swiper-button-prev" ga="prize-swiper-prev"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

export default {
  props: {
    prizes: {
      type: Object,
      required: true,
    },
  },
  computed: {
    baseURL() {
      return process.env.NODE_ENV === "production"
        ? "/16cha-2024moonfestival/"
        : "/";
    },
  },
  methods: {
    isPrizeDone(amount) {
      return amount === 0;
    },
    isPrizeAlmostDone(amount) {
      return amount <= 10;
    },
    setSlider() {
      new Swiper(".slider_container", {
        modules: [Navigation, Autoplay],
        // spaceBetween: 50,
        navigation: {
          nextEl: ".prize .swiper-button-next",
          prevEl: ".prize .swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        on: {
          resize() {
            if (window.innerWidth > 1024) return this.autoplay.stop();
            this.autoplay.start();
          },
        },
        breakpoints: {
          641: {
            slidesPerView: 4,
            allowTouchMove: true,
            spaceBetween: 7,
          },
          640: {
            slidesPerView: 2,
            allowTouchMove: true,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 2,
            allowTouchMove: true,
            spaceBetween: 10,
          },
        },
      });
    },
  },
  mounted() {
    this.setSlider();
  },
};
</script>

<style lang="scss">
@import "./PrizeSlider.scss";
</style>
