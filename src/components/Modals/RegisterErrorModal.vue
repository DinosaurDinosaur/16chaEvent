<template>
  <div class="register_error_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <!-- <span>序號錯誤</span> -->
      </template>

      <template #body>
        <span>您的序號輸入錯誤，<br />或重複輸入相同序號，</span>
        <span>請重新確認！</span>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton to="false" ga="register-error" @click="closeModal">
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
