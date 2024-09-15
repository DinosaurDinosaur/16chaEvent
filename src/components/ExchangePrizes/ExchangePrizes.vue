<template>
  <div class="page exchange_page">
    <div class="user_point">
      <div class="username_box">
        <UserName :name="$store.getters['auth/username']" />
        <div class="small_text">您好</div>
      </div>
      <div class="point_details">
        <div class="text">
          <div class="point_box">
            <p>
              已登錄點數
              <span
                ><span class="color">{{ $store.getters["user/points"] }}</span>
                點</span
              >
            </p>
            <p>
              已使用
              <span
                ><span class="color">{{
                  $store.getters["user/usedPoints"]
                }}</span>
                點</span
              >
            </p>
            <p>
              剩餘
              <span
                ><span class="color">{{
                  $store.getters["user/lastPoints"]
                }}</span>
                點</span
              >
            </p>
          </div>
          <p>※每 1 張瓶貼序號代表1點</p>
        </div>
      </div>
    </div>
    <!-- <VuePerfectScrollbar
      ref="ps"
      class="scroll-area"
      :settings="settings"
      @ps-scroll-y="scrollHandle"
      tagname="div"
    > -->
    <div id="exchange_form">
      <img src="@/assets/images/exchange-bg.png" alt="" />
      <VuePerfectScrollbar
        ref="ps"
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHandle"
        tagname="div"
      >
        <div class="prize" id="exchange_prize">
          <div class="table_title lottery">1點抽</div>
          <ContentLoader v-if="!isPrizesInit" />
          <div v-else class="input_group">
            <ExchangePrizesInput
              v-for="itm in lotteryPrizes"
              :key="itm.awards_id"
              :prize="itm"
            >
              <select
                class="exchange_item"
                v-model.number="itm.quantity"
                :disabled="itm.awards_last_nu === 0"
                :class="{ active: itm.quantity > 0 }"
              >
                <option value="">請選擇數量</option>
                <option
                  v-for="number in itm.awards_last_nu === '∞' ||
                  itm.awards_last_nu >= 30
                    ? 30
                    : itm.awards_last_nu"
                  :key="itm.awards_item + number"
                  :value="number"
                >
                  {{ number }}
                </option>
              </select>
            </ExchangePrizesInput>
          </div>
        </div>
        <div class="prize" id="lottery_prize">
          <div class="table_title exchange">集點換</div>
          <ContentLoader v-if="!isPrizesInit" />
          <div v-else class="input_group">
            <ExchangePrizesInput
              v-for="itm in exchangePrizes"
              :key="itm.awards_id"
              :prize="itm"
            >
              <select
                class="exchange_item"
                v-model.number="itm.quantity"
                :disabled="itm.awards_last_nu === 0"
                :class="{ active: itm.quantity > 0 }"
              >
                <option value="" ref="handleValue">請選擇數量</option>
                <option
                  v-for="number in itm.awards_last_nu === '∞' ||
                  itm.awards_last_nu >= 30
                    ? 30
                    : itm.awards_last_nu"
                  :key="itm.awards_item + number"
                  :value="number"
                >
                  {{ number }}
                </option>
              </select>
            </ExchangePrizesInput>
          </div>
        </div>
        <ExchangePrizesNotice />
        <div class="btns">
          <AppButton
            id="check_btn"
            to="false"
            ga="entry-exchange-step1"
            @click="submit"
          >
            <span>確認送出</span>
          </AppButton>
        </div>
      </VuePerfectScrollbar>
    </div>
    <!-- </VuePerfectScrollbar> -->
  </div>
</template>

<script>
import UserName from "@/components/UserName";
// import AppSubtitle from '@/components/AppSubtitle';
import AppButton from "@/components/AppButton";
import ExchangePrizesInput from "@/components/ExchangePrizesInput";
import ExchangePrizesNotice from "@/components/ExchangePrizesNotice";
import ContentLoader from "@/components/ContentLoader";
import VuePerfectScrollbar from "@/components/PerfectScrollbar";

export default {
  components: {
    UserName,
    // AppSubtitle,
    AppButton,
    ExchangePrizesInput,
    ExchangePrizesNotice,
    ContentLoader,
    VuePerfectScrollbar,
  },
  props: {
    changePage: {
      type: Function,
      required: true,
    },
    prizes: {
      type: Array,
      required: true,
    },
    selectedPrizes: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      settings: {
        // maxScrollbarLength: 80,
      },
      sizeChange: false,
    };
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    hasSelectedPrizes() {
      return this.selectedPrizes.length !== 0;
    },

    totalPoint() {
      return this.selectedPrizes.reduce(
        (total, { quantity, awards_points }) => {
          return (total += Number(quantity) * Number(awards_points));
        },
        0
      );
    },

    isNotEnoughPoints() {
      return this.totalPoint > this.$store.getters["user/lastPoints"];
    },

    isPrizesInit() {
      return this.prizes.length !== 0;
    },

    lotteryPrizes() {
      return this.prizes.filter((itm) => itm.lottery);
    },

    exchangePrizes() {
      return this.prizes.filter((itm) => !itm.lottery);
    },

    // isSelectPrizes(itm){
    //   return itm.awards_last_nu === 'string' ? 30 : 30
    // }
  },
  mounted() {
    console.log(this.lotteryPrizes);
    setTimeout(() => {
      this.$refs.ps.update();
    }, 3000);
  },
  methods: {
    submit() {
      // alert('威金森 月來越強活動\n活動已結束，\n非常感謝各位熱烈的參與！')
      // if (!this.hasSelectedPrizes) return alert('請選擇兌換項目');
      if (!this.hasSelectedPrizes) return this.showChoseAwardsPopup();
      if (this.isNotEnoughPoints) return this.showNotEnoughPointPopup();
      this.showConfirmPage();
    },

    showChoseAwardsPopup() {
      this.$store.dispatch("showModal", "exchange/chose");
    },

    showNotEnoughPointPopup() {
      this.$store.dispatch("showModal", "exchange/point");
    },

    showConfirmPage() {
      this.changePage("confirm");
      window.scrollTo(0, 0);
    },

    // scrollHandle(evt) {
    //   //   console.log(evt);
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "./ExchangePrizes.scss";
</style>
