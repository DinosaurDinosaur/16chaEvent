<template>
  <InnerPageLayout>
    <section class="winner">
      <div class="bg-top-m"></div>
      <div class="wrap">
        <div class="outside">
          <PageTitle>抽獎得獎名單</PageTitle>
        </div>
        <!-- <div v-if="isDrown" class="congrats mb">
          <span>恭喜得獎</span>
        </div> -->
        <div class="code_btns page_btns">
          <AppButton
            class="code_btn"
            :class="{ active: hash === '16points' }"
            :to="`${$route.path}#16points`"
            ga="winning-list#16points"
          >
            <span>週週送16點</span>
          </AppButton>
          <AppButton
            class="code_btn"
            :class="{ active: hash === '1point' }"
            :to="`${$route.path}#1point`"
            ga="winning-list#1point"
          >
            <span>1點抽大獎</span>
          </AppButton>
        </div>
        <div class="content">
          <div class="bg-left"></div>
          <!-- <div v-if="isDrown" class="congrats pc"> -->
          <!-- <span>恭喜得獎</span> -->
          <!-- </div> -->
          <!-- <div v-if="!isDrown">
            <WinningNotYet title="" />
          </div> -->
          <WinningListPoints v-if="hash === '16points'" />
          <WinningListPoint v-else />
          <!-- <div class="btns">
            <AppButton :to="{ name: 'home' }" ga="winning-back-index">
              <span>回活動首頁</span>
            </AppButton>
          </div> -->
          <div class="bg-right"></div>
        </div>
      </div>
      <div class="bg-bottom"></div>
      <div class="bg-bottom-m"></div>
    </section>
    <section class="extra">
      <AppLink
        class="points"
        :class="{ active: hash === '16points' }"
        :to="{ name: 'serial-winning' }"
        ga="winning-16points"
      >
      </AppLink>
    </section>
  </InnerPageLayout>
</template>

<script>
import InnerPageLayout from "@/layouts/InnerPageLayout";
import PageTitle from "@/components/PageTitle";
import AppButton from "@/components/AppButton";
// import WinningNotYet from "@/components/WinningNotYet";
// import WinningList from "@/components/WinningList";
import WinningListPoints from "@/components/WinningListPoints";
import WinningListPoint from "@/components/WinningListPoint";
import AppLink from "@/components/AppLink";

export default {
  components: {
    InnerPageLayout,
    PageTitle,
    AppButton,
    // WinningNotYet,
    // WinningList,
    WinningListPoints,
    WinningListPoint,
    AppLink,
  },
  computed: {
    hash() {
      const hash = this.$route.hash.replace("#", "");
      return !hash ? "16points" : hash;
    },
    // isDrown() {
    //   return this.$store.state.winnerList;
    // },
  },
};
</script>

<style lang="scss">
@import "./Winning.scss";
</style>
