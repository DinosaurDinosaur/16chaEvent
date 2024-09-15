<template>
  <DefaultLayout class="home">
    <section class="kv">
      <div class="wrap">
        <div class="banner">
          <div :class="{ active: !$store.state.auth.user }" class="login">
            <div class="login_btns">
              <a
                :class="{ active: $store.state.auth.fbInit }"
                id="fb_login"
                ga="login-fb"
                href="javascript:;"
                @click="fbLogin"
              ></a>
              <a
                :class="{ active: $store.state.auth.auth2 }"
                id="google_login"
                ga="login-google"
                href="javascript:;"
                @click="$store.dispatch('gaTracking', 'google-login')"
              ></a>
            </div>
            <div class="login_text"></div>
          </div>
        </div>
      </div>
      <!-- <AppButton
        class="points"
        :class="{ active: hash === 'list' }"
        :to="winning#list"
        ga="winning-16points"
      >
        <span>登錄序號明細</span>
      </AppButton> -->
    </section>
    <section class="prize">
      <div class="wrap">
        <ContentLoader v-if="!prizes" />
        <PrizeSlider v-else :prizes="prizes" />
      </div>
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
    <section class="video">
      <video
        poster="@/assets/images/index/video.png"
        width="100%"
        height="100%"
        @click="controls"
      >
        <source src="@/assets/images/video/video.mp4" type="video/mp4" />
      </video>
    </section>
    <!-- <section class="join">
      <div class="text"></div>
      <a
        class="btn"
        ga="fb-video-draw"
        href="https://www.facebook.com/tw16asahi/videos/-%E7%A7%8B%E7%83%A4%E4%BE%86%E9%9B%B6%E5%8D%81%E5%85%AD%E8%8C%B6%E4%B8%AD%E7%A7%8B%E9%9B%86%E9%BB%9E%E6%B4%BB%E5%8B%95%E9%96%8B%E5%82%AC/501539859253730/?mibextid=WC7FNe&rdid=7iZvxlbEJJN8ml0l"
        @click="trackCustom"
      ></a>
    </section> -->
    <section class="footer"></section>
    <!-- <div class="scroll_icon"></div> -->
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import PrizeSlider from "@/components/PrizeSlider";
import ContentLoader from "@/components/ContentLoader";
import AppLink from "@/components/AppLink";

import { getAwardsData } from "@/api";

export default {
  components: { DefaultLayout, PrizeSlider, ContentLoader, AppLink },
  data() {
    return {
      prizes: null,
    };
  },
  computed: {
    isAuth2() {
      return this.$store.state.auth.auth2;
    },
  },
  watch: {
    isAuth2(val) {
      if (!val) return;
      this.renderGoogleAuthButton();
    },
  },
  methods: {
    controls() {
      document.querySelector("video").setAttribute("controls", "true");
    },

    closeLoader() {
      this.$store.dispatch("showLoader", false);
    },

    fbLogin() {
      this.$store.dispatch("gaTracking", "fb-login");
      if (!this.$store.state.auth.fbInit) return;
      this.$store.dispatch("showLoader", true);
      window.FB.login(async (res) => {
        if (res.status !== "connected") return this.closeLoader();
        this.$store.dispatch("auth/setFBAuth", { data: res, login: true });
      });
    },

    renderGoogleAuthButton() {
      const store = this.$store;
      store.state.auth.auth2.attachClickHandler(
        document.querySelector("#google_login"),
        {},
        successLoginGoogle,
        failLoginGoogle
      );

      function successLoginGoogle(data) {
        store.dispatch("auth/setGoogleAuth", { data, login: true });
      }

      function failLoginGoogle(err) {
        console.log(JSON.stringify(err, undefined, 2));
        store.dispatch("showLoader", false);
      }
    },
    trackCustom() {
      console.log("Customer00001");
      taq("trackCustom", "d3AekGDhEa7t", "Customer00001");
      _lt(
        "send",
        "cv",
        {
          type: "CompleteRegistration",
        },
        ["19735916-e9a7-4ca0-948d-ac915ece4cf5"]
      );
      fbq("track", " Subscribe");
      trackAdEvent(
        "asahisoftdrinks202409confirm",
        "asahisoftdrinks202409",
        "asahisoftdrinks202409confirm"
      );
      TNLMGTag("track", "form_start");

      //轉換事件，依照需求加在適當的位置（必須在初始化後）
      var onead_pixel = onead_pixel || [];
      window.onead_pixel.push({
        type: "tracker",
        value: { name: "Lead", content_name: "2408中秋 前往參加活動按鈕" },
      });
    },
  },
  async mounted() {
    if (this.isAuth2) this.renderGoogleAuthButton();
    const { result, msg, awards_list } = await getAwardsData();
    if (!result) return console.log(msg);
    this.prizes = awards_list;
  },
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
