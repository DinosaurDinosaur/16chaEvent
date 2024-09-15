<template>
  <div class="exchange_point_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <span>剩餘點數不足</span>
      </template>

      <template #body>
        <span>多買幾瓶，集滿點數來兌換吧!</span>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton
            to="false"
            ga="entry-exchange-step1point#error"
            @click="closeModal"
          >
            <span>返回確認</span>
          </AppButton>
          <AppButton
            :to="{ name: 'register' }"
            ga="entry-exchange-step1point#redo"
          >
            <span>輸入序號</span>
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
