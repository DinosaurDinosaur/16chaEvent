<template>
  <div class="register_success_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <span>序號上傳成功！</span>
      </template>

      <template #body>
        <span
          ><span class="line">請保留已登錄之序號瓶貼紙本，</span
          ><br />以供備查。</span
        >
      </template>

      <template #footer>
        <div class="btns">
          <AppButton
            :to="`${baseURL}serial-number#list`"
            ga="register-submit-success"
          >
            <span>我的序號</span>
          </AppButton>
          <AppButton :to="{ name: 'exchange' }" ga="register-submit-exchange">
            <span>贈品兌換</span>
          </AppButton>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppButton from "@/components/AppButton";

export default {
  components: {
    AppModal,
    AppButton,
  },
  computed: {
    baseURL() {
      return process.env.NODE_ENV === "production"
        ? "/16cha-2024moonfestival/"
        : "/";
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("showModal", "");
    },
  },
};
</script>
