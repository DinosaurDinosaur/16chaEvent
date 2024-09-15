<template>
  <div class="register_empty_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <span>請輸入序號</span>
      </template>

      <template #body>
        <span>您的序號尚未輸入</span>
        <span>請重新確認！</span>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton to="false" ga="register-submit#empty" @click="closeModal">
            <span>確認</span>
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
  methods: {
    closeModal() {
      this.$store.dispatch("showModal", "");
    },
  },
};
</script>
