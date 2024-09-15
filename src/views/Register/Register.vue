<template>
  <InnerPageLayout>
    <section class="registered">
      <div class="bg-top-m"></div>
      <div class="wrap inner_page_wrap">
        <div class="code_content">
          <div class="outside">
            <PageTitle>輸入序號</PageTitle>
          </div>
          <!-- <PageTabs /> -->
          <div class="content">
            <div class="bg-left"></div>
            <div class="username_box">
              <UserName :name="$store.getters['auth/username']" />
              <span class="small_text">您好</span>
            </div>
            <div class="msg">
              <span>※每 1 張瓶貼序號代表1點</span>
            </div>
            <RegisterForm />
            <div class="bg-right"></div>
          </div>
        </div>
      </div>
      <div class="bg-bottom"></div>
      <div class="bg-bottom-m"></div>
    </section>
    <teleport to="#portal-popup">
      <!-- <transition-group name="fade"> -->
      <SuccessModal v-if="$store.state.modal === 'register/success'" />
      <CheckModal v-else-if="$store.state.modal === 'register/check'" />
      <!-- <ErrorModal v-else-if="$store.state.modal === 'register/error'" /> -->
      <DoubleModal
        v-else-if="
          $store.state.modal === 'register/double' ||
          $store.state.modal === 'register/error' ||
          $store.state.modal === 'register/repeat'
        "
      />
      <!-- <RepeatModal v-else-if="$store.state.modal === 'register/repeat'" /> -->
      <EmptyModal v-else-if="$store.state.modal === 'register/empty'" />

      <!-- </transition-group> -->
    </teleport>
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
import RegisterForm from "@/components/RegisterForm";
import Modals from "@/components/Modals";
import AppLink from "@/components/AppLink";

export default {
  components: {
    InnerPageLayout,
    PageTitle,
    // PageTabs,
    UserName,
    RegisterForm,
    SuccessModal: Modals.RegisterSuccessModal,
    ErrorModal: Modals.RegisterErrorModal,
    DoubleModal: Modals.RegisterDoubleModal,
    RepeatModal: Modals.RegisterRepeatModal,
    EmptyModal: Modals.RegisterEmptyModal,
    CheckModal: Modals.RegisterCheckModal,
    AppLink,
  },
  unmounted() {
    this.$store.dispatch("showModal", "");
  },
};
</script>

<style lang="scss">
@import "./Register.scss";
</style>
