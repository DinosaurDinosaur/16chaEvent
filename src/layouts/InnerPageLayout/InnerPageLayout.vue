<template>
  <main class="container">
    <div class="bg"></div>
    <!-- <div class="bg-bottom"></div> -->
    <slot />
  </main>
</template>

<script>
export default {
  unmounted() {
    this.$store.dispatch("showMenu", false);
  },
};
</script>

<style lang="scss">
@import "./InnerPageLayout.scss";
</style>
