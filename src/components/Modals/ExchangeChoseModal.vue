<template>
  <div class="exchange_chose_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <span>請選擇兌換項目</span>
      </template>

      <template #body>
        <span>您有「贈品數量」未選擇</span>
        <span>請再確認！</span>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton
            to="false"
            ga="entry-exchange-step1quantity#error"
            @click="closeModal"
          >
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
