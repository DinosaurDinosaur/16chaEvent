<template>
  <InnerPageLayout>
    <section class="mycode">
      <div class="bg-top-m"></div>
      <div class="wrap inner_page_wrap">
        <div class="code_content">
          <div class="outside">
            <PageTitle>我的序號</PageTitle>
          </div>
          <div class="code_btns page_btns">
            <AppButton
              class="code_btn"
              :class="{ active: hash === 'list' }"
              :to="`${$route.path}#list`"
              ga="entry-serial-number#list"
            >
              <span>登錄序號明細</span>
            </AppButton>
            <AppButton
              class="code_btn"
              :class="{ active: hash === 'exchange' }"
              :to="`${$route.path}#exchange`"
              ga="entry-serial-number#record"
            >
              <span>點數兌換紀錄</span>
            </AppButton>
          </div>
          <!-- <PageTabs /> -->
          <div class="content">
            <div class="bg-left"></div>
            <div class="user_point">
              <div class="username_box">
                <UserName :name="$store.getters['auth/username']" />
                <div class="small_text">您好</div>
              </div>
              <div class="point_details">
                <div class="text">
                  <div class="point_box">
                    <p>
                      已登錄點數
                      <span
                        ><span class="color">{{
                          $store.getters["user/points"]
                        }}</span>
                        點</span
                      >
                    </p>
                    <p>
                      已使用
                      <span
                        ><span class="color">{{
                          $store.getters["user/usedPoints"]
                        }}</span>
                        點</span
                      >
                    </p>
                    <p>
                      剩餘
                      <span
                        ><span class="color">{{
                          $store.getters["user/lastPoints"]
                        }}</span>
                        點</span
                      >
                    </p>
                  </div>
                  <p>※每 1 張瓶貼序號代表1點</p>
                </div>
              </div>
            </div>
            <ContentLoader v-if="!$store.getters['user/serialList']" />
            <div v-else>
              <SerialNumberList
                v-if="hash === 'list'"
                :serialNumberList="$store.getters['user/serialList']"
              />
              <SerialNumberExchange
                v-else
                :serialNumberExchange="$store.getters['user/exchangeList']"
              />
            </div>
            <div class="bg-right"></div>
          </div>
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
// import PageTabs from '@/components/PageTabs';
import UserName from "@/components/UserName";
import AppButton from "@/components/AppButton";
import SerialNumberList from "@/components/SerialNumberList";
import SerialNumberExchange from "@/components/SerialNumberExchange";
import ContentLoader from "@/components/ContentLoader";
import AppLink from "@/components/AppLink";

export default {
  components: {
    InnerPageLayout,
    PageTitle,
    // PageTabs,
    UserName,
    AppButton,
    SerialNumberList,
    SerialNumberExchange,
    ContentLoader,
    AppLink,
  },
  computed: {
    hash() {
      const hash = this.$route.hash.replace("#", "");
      return !hash ? "list" : hash;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  watch: {
    hash() {
      this.updateUserData();
    },
  },
  methods: {
    updateUserData() {
      this.$store.dispatch("user/getUserData", this.user);
    },
  },
  mounted() {
    this.updateUserData();
  },
  unmounted() {
    this.$store.dispatch("showLoader", false);
  },
};
</script>

<style lang="scss">
@import "./SerialNumber.scss";

.td_wrap .row {
  opacity: 0;
  transform: translateY(10px);
  animation: slideUp 0.5s forwards;
  // position: relative;
  // z-index: 1;
}
</style>
