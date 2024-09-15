<template>
  <div :class="{ active: $store.state.auth.user }" class="login">
    <div class="user_box">
      <div class="user_icon">
        <!-- <img src="@/assets/images/user-icon.png" alt="" /> -->
        <!-- <img
          src="https://graph.facebook.com/v14.0/'{$store.state.auth.user}'/picture?type=normal"
          alt=""
        /> -->
        <img :src="$store.getters['auth/userphoto']" alt="" />
      </div>
      <UserName :name="$store.getters['auth/username']" />
    </div>
  </div>
  <ul>
    <li v-for="(nav, idx) in menu" :key="nav.path + idx" class="btn">
      <AppLink
        :to="handlePath(nav)"
        :ga="`menu-${nav.path}`"
        :class="{ active: isMenuActive(nav.path) }"
        @click="trackCustom(nav.track)"
      >
        <span>{{ nav.text }}</span>
        <i v-if="nav.children" class="fa fa-chevron-down"></i>
      </AppLink>
      <ul v-if="nav.children" class="sub_menu">
        <li
          v-for="(subNav, subIndex) in nav.children"
          :key="subNav.page + subIndex"
          :class="{ active: hash === `#${subNav.page}` }"
        >
          <AppLink
            :to="`${nav.path}#${subNav.page}`"
            :ga="`menu-${nav.path}#${subNav.page}`"
            @click="$store.dispatch('showMenu', false), trackCustom(nav.track)"
          >
            <span>{{ subNav.text }}</span>
          </AppLink>
        </li>
      </ul>
    </li>
    <li class="fans pc">
      <AppLink
        v-for="fan in fansItems"
        :key="fan.name"
        :to="fan.path"
        :ga="`menu-${fan.name}`"
        :class="`fans_${fan.name}`"
      >
      </AppLink>
    </li>
    <li class="btn pc" id="sign_out" v-if="$store.state.auth.user">
      <AppLink to="false" ga="logout" @click="logout">
        <span>登出</span>
      </AppLink>
    </li>
    <li class="fans mb">
      <AppLink
        v-for="fan in fansItems"
        :key="fan.name"
        :to="fan.path"
        :ga="`menu_${fan.name}`"
        :class="`fans_${fan.name}`"
      >
      </AppLink>
    </li>
    <li class="btn mb logout" id="sign_out" v-if="$store.state.auth.user">
      <AppLink to="false" ga="logout" @click="logout">
        <span>登出</span>
      </AppLink>
    </li>
  </ul>
</template>

<script>
import AppLink from "@/components/AppLink";
import menuSource from "@/utils/menuSource.js";
import UserName from "@/components/UserName";
import { CALPIS_SIGN } from "@/utils/storage";

export default {
  components: { AppLink, UserName },
  data() {
    return {
      fansItems: menuSource.fansItems,
      hash: null,
      path: null,
    };
  },
  computed: {
    menu() {
      const isAuth = this.$store.state.auth.user;
      return isAuth
        ? menuSource.navItems
        : menuSource.navItems.filter((itm) => !itm.requestAuth);
    },
  },
  watch: {
    "$route.hash"(newValue) {
      this.hash = newValue;
    },
    "$route.path"(newValue) {
      this.path = newValue;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("showLoader", true);
      const login_type = this.$store.state.auth.user.login_type;
      switch (login_type) {
        case "Google":
          return this.googleLogout();
        case "FB":
          return this.fbLogout();
      }
    },
    clearAuth() {
      this.$store.commit("auth/setUser", null);
      localStorage.removeItem(CALPIS_SIGN);
      sessionStorage.removeItem(CALPIS_SIGN);
      this.$router.go(0);
    },
    googleLogout() {
      const that = this;
      this.$store.state.auth.auth2
        .signOut()
        .then(() => {
          that.clearAuth();
        })
        .catch((err) => {
          console.error("google logout error", err);
          that.$store.dispatch("showLoader", false);
        });
    },
    fbLogout() {
      try {
        window.FB.logout(() => {
          this.clearAuth();
        });
      } catch (error) {
        console.error("fb logout error", error);
        this.$store.dispatch("showLoader", false);
      }
    },
    handlePath({ hover, path }) {
      if (hover) return "false";
      return { name: path };
    },
    isMenuActive(menuPath) {
      return this.path === `${process.env.VUE_APP_SCSS_URL}${menuPath}`;
    },
    trackCustom(track) {
      if (track === "trackCustom2") {
        console.log("Customer00002");
        taq("trackCustom", "d3AekGDhEa7t", "Customer00002");
        _lt(
          "send",
          "cv",
          {
            type: "gift",
          },
          ["19735916-e9a7-4ca0-948d-ac915ece4cf5"]
        );
        fbq("track", "CompleteRegistration");
        trackAdEvent(
          "asahisoftdrinks202409regist",
          "asahisoftdrinks202409",
          "asahisoftdrinks202409regist"
        );
        TNLMGTag("track", "form_submit");

        //轉換事件，依照需求加在適當的位置（必須在初始化後）
        var onead_pixel = onead_pixel || [];
        window.onead_pixel.push({
          type: "tracker",
          value: { name: "Lead", content_name: "2408中秋 贈品兌換按鈕" },
        });
      } else if (track === "trackCustom3") {
        taq("trackCustom", "d3AekGDhEa7t", "Customer00003");
      }
    },
  },
};
</script>

<style lang="scss">
@import "./TheNavigation.scss";
</style>
