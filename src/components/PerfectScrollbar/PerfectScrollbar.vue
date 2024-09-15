<template>
  <section class="ps-container" @mouseover.once="update">
    <slot></slot>
  </section>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  name: 'vue-perfect-scrollbar',
  props: {
    settings: {
      default: undefined,
    },
    tagname: {
      type: String,
      default: 'section',
    },
  },
  data() {
    return {
      ps: null,
    };
  },
  methods: {
    update() {
      if (this.ps) {
        this.ps.update();
      }
    },

    __init() {
      if (!this.ps) {
        this.ps = new PerfectScrollbar(this.$el, this.settings);
      }
    },

    __uninit() {
      if (this.ps) {
        this.ps.destroy();
        this.ps = null;
      }
    },
  },

  watch: {
    $route() {
      this.update();
    },
  },

  mounted() {
    // for support ssr
    if (!this.$isServer) {
      this.__init();
    }
    window.addEventListener('resize', this.update);
  },

  // unmonted(){
  //   window.removeEventListener('resize', this.update)
  // },

  updated() {
    this.$nextTick(this.update);
  },

  activated() {
    this.__init();
  },

  //   deactivated() {
  //     this.__uninit();
  //   },

  //   beforeDestroy() {
  //     this.__uninit();
  //   },
};
</script>

<style lang="scss">
@import './perfectScrollbar.scss';
@import '~perfect-scrollbar/css/perfect-scrollbar.css';
.ps-container {
  position: relative;
}
</style>
