<template>
  <div class="exchange_check_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <!-- <span>未確認活動辦法及規範</span> -->
      </template>

      <template #body>
        <span>請閱讀並確認勾選</span>
        <span>活動辦法及隱私權規範</span>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton to="false" ga="exchange-shortage" @click="closeModal">
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
