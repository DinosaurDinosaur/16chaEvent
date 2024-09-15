<template>
  <section class="comingSoon">
    <!-- <div class="wrap"> -->
    <!-- 作法一 start -->
    <!-- <div class="content"></div> -->
    <!-- <div class="comingsoon_box"> -->
    <!-- <img src="@/assets/images/comingsoon-1.png" alt="" /> -->
    <!-- </div> -->
    <!-- 作法一 end -->

    <!-- 作法二 start -->
    <!-- <div class="content">
        <div class="comingsoon_box"></div>
      </div> -->
    <!-- 作法二 end -->
    <!-- </div> -->
    <div class="img-box">
      <img src="@/assets/images/pc.jpg" class="pc" alt="" />
      <img src="@/assets/images/mb.jpg" class="mb" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    console.log("ok");
    if (this.$store.state.comingSoon) return;
    this.$router.replace({ name: "home" });
  },
};
</script>

<style lang="scss" scoped>
@import "./ComingSoon.scss";
</style>
