<template>
  <InnerPageLayout>
    <section class="gift">
      <div class="bg-top-m"></div>
      <div class="wrap inner_page_wrap">
        <div class="code_content">
          <div class="outside">
            <PageTitle>贈品兌換</PageTitle>
          </div>
          <!-- <PageTabs /> -->
          <transition-group name="fade" tag="div" class="content">
            <div class="bg-left"></div>
            <ExchangePrizes
              v-if="showPage === 'prizes'"
              :changePage="changePage"
              :prizes="prizes"
              :selectedPrizes="selectedPrizes"
            />
            <ExchangeConfirm
              v-else-if="showPage === 'confirm'"
              :changePage="changePage"
              :selectedPrizes="selectedPrizes"
            />
            <div class="bg-right"></div>
          </transition-group>
        </div>
      </div>
      <div class="bg-bottom"></div>
      <div class="bg-bottom-m"></div>
    </section>
    <teleport to="#portal-popup">
      <SuccessModal
        v-if="$store.state.modal === 'exchange/success'"
        :changePage="changePage"
        :resetPrizes="resetPrizes"
      />
      <PointModal v-else-if="$store.state.modal === 'exchange/point'" />
      <ShortageModal v-else-if="$store.state.modal === 'exchange/shortage'" />
      <ChoseModal v-else-if="$store.state.modal === 'exchange/chose'" />
      <ExchangeCheckModal v-else-if="$store.state.modal === 'exchange/check'" />
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
import ExchangePrizes from "@/components/ExchangePrizes";
import ExchangeConfirm from "@/components/ExchangeConfirm";
import Modals from "@/components/Modals";
import AppLink from "@/components/AppLink";

import { getAwardsData } from "@/api";
import helper from "@/helpers/Exchange.helper.js";

export default {
  components: {
    InnerPageLayout,
    PageTitle,
    // PageTabs,
    ExchangePrizes,
    ExchangeConfirm,
    SuccessModal: Modals.ExchangeSuccessModal,
    PointModal: Modals.ExchangePointModal,
    ShortageModal: Modals.ExchangeShortageModal,
    ChoseModal: Modals.ExchangeChoseModal,
    ExchangeCheckModal: Modals.ExchangeCheckModal,
    AppLink,
  },
  data() {
    return {
      showPage: "prizes",
      prizes: [],
    };
  },
  methods: {
    changePage(page) {
      this.showPage = page;
    },

    async getPrizes() {
      const { result, awards_list, msg } = await getAwardsData();
      if (!result) return console.log(msg);
      this.prizes = helper.formatePrizesData(awards_list);
    },

    resetPrizes() {
      this.prizes = [];
      this.getPrizes();
    },
    // 0804
    updateUserData() {
      this.$store.dispatch("user/getUserData", this.user);
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    selectedPrizes() {
      return this.prizes.filter((itm) => !!itm.quantity);
    },
  },
  created() {
    this.showPage = "prizes";
  },
  async mounted() {
    this.getPrizes();
    this.updateUserData(); // 0804
  },
  unmounted() {
    this.$store.dispatch("showLoader", false); // 0804
    this.$store.dispatch("showModal", "");
  },
};
</script>

<style lang="scss">
@import "./Exchange.scss";
</style>
