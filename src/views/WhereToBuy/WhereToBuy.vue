<template>
  <InnerPageLayout>
    <section class="channels">
      <div class="bg-top-m"></div>
      <div class="wrap">
        <div class="outside">
          <PageTitle>購買通路</PageTitle>
        </div>
        <div class="content">
          <div class="bg-left"></div>
          <AppSubtitle>實體通路</AppSubtitle>
          <div class="text">
            <WhereToBuyAccess>
              <div class="store">
                <div>
                  <p>十六茶豆乳奶茶 PET530ml</p>
                  <span>全家、全聯</span>
                </div>
              </div>
            </WhereToBuyAccess>
            <WhereToBuyAccess>
              <div class="store">
                <div>
                  <p>十六茶經典無糖 PET530ml</p>
                  <span
                    >全家、全聯、寶雅、美廉社、家樂福、Citysuper、唐吉訶德、大潤發、愛買</span
                  >
                </div>
              </div>
            </WhereToBuyAccess>
            <WhereToBuyAccess>
              <div class="store">
                <div>
                  <p>十六茶經典無糖 鋁箔包330ml</p>
                  <span
                    >全家、全聯、寶雅、美廉社、家樂福、Citysuper、唐吉訶德、大潤發、愛買</span
                  >
                </div>
              </div>
            </WhereToBuyAccess>
            <WhereToBuyAccess>
              <div class="store">
                <div>
                  <p>十六茶經典無糖 PET990ml</p>
                  <span>家樂福、大潤發、愛買、餐飲通路</span>
                </div>
              </div>
            </WhereToBuyAccess>
          </div>

          <AppSubtitle>線上通路</AppSubtitle>
          <div class="text">
            <div class="btns cannels_btns">
              <AppButton
                to="https://bit.ly/3PmsQKm"
                ga="sales-channel-pchome24"
                :icon="false"
              >
                <span></span>
              </AppButton>
              <AppButton
                to="https://reurl.cc/zDeQWV"
                ga="sales-channel-momo"
                :icon="false"
              >
                <span></span>
              </AppButton>
            </div>
          </div>

          <!-- <div class="btns">
            <AppButton :to="{ name: 'home' }" ga="whereToBuy-back-to-home">
              <span>返回首頁</span>
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
import AppSubtitle from "@/components/AppSubtitle";
import AppButton from "@/components/AppButton";
import WhereToBuyAccess from "@/components/WhereToBuyAccess";
import AppLink from "@/components/AppLink";

export default {
  components: {
    InnerPageLayout,
    PageTitle,
    AppSubtitle,
    AppButton,
    WhereToBuyAccess,
    AppLink,
  },
};
</script>

<style lang="scss">
@import "./WhereToBuy.scss";
</style>
