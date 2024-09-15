<template>
  <!-- <AppSubtitle></AppSubtitle> -->
  <div class="winning_title">
    <!-- <img src="@/assets/images/winning-title.png" alt="" /> -->
  </div>
  <div class="text">
    <p class="winning_color">礁溪老爺酒店露營車兩天一夜 共1名</p>
    <ul class="winning_box">
      <li>
        <span>將於2024年10月7日(一)公告</span><br />
        <span>記得回來看看喔！</span>
      </li>
    </ul>
    <!-- <p>將於2024年{{ dateComputed }}(五)公告</p>
    <p>記得回來看看喔！</p> -->
  </div>
</template>

<script>
// import AppSubtitle from '@/components/AppSubtitle';

export default {
  // components: { AppSubtitle },
  props: {
    // title: {
    //   type: String,
    //   default: '尚未開獎',
    // },
    date: {
      type: String,
      default: "10/20",
    },
  },
  computed: {
    dateComputed() {
      return this.date.replace("/", "月") + "日";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./WinningNotYet.scss";
</style>
