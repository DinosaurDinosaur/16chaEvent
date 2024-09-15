<template>
  <div class="exchange_success_popup">
    <AppModal :header="true" :body="true" :footer="true" :close="closeModal">
      <template #header>
        <span>兌換申請已送出</span>
      </template>

      <template #body>
        <div class="exchange_success">
          <span class="pc">請留意電子郵件，完成審核兌換流程，</span>
          <span class="pc">才收得到贈品唷！</span>
          <span class="mb"
            >請留意電子郵件，完成審核兌換流程，才收得到贈品唷！</span
          >
          <span>請至「點數兌換紀錄」頁面，查看審核進度！</span>
          <span class="light">※1點抽得獎名單將於2024年10月7日公告 </span>
          <!-- <span>請留意電子郵件，完成審核兌換流程，<br />才收得到贈品唷！</span> -->
          <!-- <span>請至「贈品兌換紀錄」</a>頁面，<br />查看審核進度！</span> -->
          <!-- <span>請耐心等候1-2個工作天</span>
        <span>待兌換審查無誤後，系統將會寄出通知信函</span>
        <span>再依步驟完成兌獎程序即可</span>
        <span class="light"
          >※抽獎名單將於<a class="date">2022/9/26</a>公布</span
        > -->
        </div>
      </template>

      <template #footer>
        <div class="btns">
          <AppButton
            :to="`${baseURL}serial-number#exchange`"
            ga="entry-exchange-step2-record"
          >
            <span>點數兌換紀錄</span>
          </AppButton>
          <AppButton to="false" ga="entry-exchange-step2-cont" @click="goBack">
            <span>繼續兌換</span>
          </AppButton>
          <!-- <AppButton to="false" ga="exchange-finish" @click="closeModal">
            <span>繼續兌換</span>
          </AppButton> -->
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
  props: ["resetPrizes", "changePage"],
  computed: {
    baseURL() {
      return process.env.NODE_ENV === "production"
        ? "/16cha-2024moonfestival/"
        : "/";
    },
  },
  methods: {
    closeModal() {
      // this.changePage('prizes');
      // this.resetPrizes();
      this.$store.dispatch("showModal", "");
      this.changePage("prizes");

      // this.$router.push(`${this.baseURL}serial-number#exchange`);
    },
    goBack() {
      this.changePage("prizes");
      this.$store.dispatch("showModal", "");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vars/index.scss";

.light {
  color: map-get($color, "light");
}
</style>
