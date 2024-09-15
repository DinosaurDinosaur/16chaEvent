<template>
  <div class="exchange_shortage_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <span>贈品剩餘數量不足</span>
        <!-- <span v-for="itm in $store.state.shortagePrizes" :key="itm.awards_id"
          >【{{ itm.awards_item }}】</span
        > -->
      </template>

      <template #body>
        <span v-for="itm in $store.state.shortagePrizes" :key="itm.awards_id"
          >【{{ itm.awards_item }}】</span
        >
        <span>剩餘數量不足，請重新選取欲兌換項目</span>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton
            to="false"
            ga="entry-exchange-step1prize#redo"
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
