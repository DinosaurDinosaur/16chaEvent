<template>
  <div class="winningList">
    <!-- <AppSubtitle>Peace兒童相機</AppSubtitle> -->
    <!-- <AppSubtitle></AppSubtitle> -->
    <!-- <div class="winning_title"></div> -->
    <div class="text">
      <!-- <p class="winning_subtitle">恭喜以下幸運茶粉獲得</p> -->
      <p class="winning_color">礁溪老爺酒店露營車兩天一夜 共1名</p>
      <ul class="winning_box notyet" v-if="!isDrown">
        <li>
          <span>將於2024年10月7日(一)公告</span><br />
          <span>記得回來看看喔！</span>
        </li>
      </ul>
      <ul class="winning_box" v-if="isDrown">
        <li>
          <span>黃Ｏ明</span>
          <span>0912***789</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import AppSubtitle from '@/components/AppSubtitle';

export default {
  // components: { AppSubtitle },
  computed: {
    isDrown() {
      return this.$store.state.winnerList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./WinningListPoint.scss";
</style>
