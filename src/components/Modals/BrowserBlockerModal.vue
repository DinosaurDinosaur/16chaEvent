<template>
  <div class="browser_blocker_popup">
    <AppModal
      :header="true"
      :body="true"
      :footer="true"
      :close="closeModal"
      id="browser_blocker"
    >
      <template #header>
        <span>為確保活動順暢進行</span>
        <span>請使用Chrome或其他瀏覽器</span>
      </template>

      <template #body>
        <div class="pic">
          <img src="@/assets/images/popup/browser-alert.png" alt="" />
        </div>
      </template>

      <template #footer>
        <div class="btns" :class="copyText === '複製成功' ? 'active' : ''">
          <AppButton to="false" ga="copy-link" @click="copy">
            <span ref="isCopy">{{ copyText }}</span>
          </AppButton>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppButton from "@/components/AppButton";
import { getBrowserVersion, copyValue } from "@/utils";

export default {
  components: {
    AppModal,
    AppButton,
  },
  data() {
    return {
      copyText: "複製連結",
    };
  },
  methods: {
    copy() {
      const device = getBrowserVersion().versions.ios;
      const url = window.location.href;
      const copyResult = copyValue(url, device);
      if (copyResult) return (this.copyText = "複製成功");
      this.copyText = "複製連結";
      console.log(this.$refs.isCopy);
    },
    methods: {
      closeModal() {
        this.$store.dispatch("showModal", "");
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vars/index.scss";

#browser_blocker {
  z-index: 999;
  .popup_close {
    display: block;
  }
  .popup_wrap {
    .content {
      max-width: 63rem;
      width: 100%;
      margin: 10rem 0;
    }
    .content_bg {
      padding: 4rem 3rem 5rem 3rem;
    }
  }
  .popup_header {
    color: #454545;
    font-size: 2.8rem;
    line-height: 1.6;
    letter-spacing: unset;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    font-weight: 600;
    @media (max-width: 23.15em) {
      font-size: 2.5rem;
    }
    span {
      display: block;
    }
  }
  .popup_body {
    max-width: 45.3rem;
    margin: auto;
  }
  .popup_footer {
    .btns {
      &.active {
        .btn {
          background: map-get($color, "light");
          a {
            background: map-get($color, "light");
          }
        }
      }
    }
    .btn {
      width: 24rem;
      background: map-get($color, "btnBG");
      border-radius: 100px;
      margin-top: 2rem;
      a {
        background-color: map-get($color, "btnBG");
        font-size: 2.6rem;

        padding: 1.05rem 0;
        b &:active {
          opacity: 0.7;
        }
      }
    }
  }
  .idol_img {
    width: 13.6rem;
    height: 25.6rem;
    // background-image: url(~@/assets/images/popup/idol-4.png);
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0;
    left: 0.5rem;
  }
}
</style>
