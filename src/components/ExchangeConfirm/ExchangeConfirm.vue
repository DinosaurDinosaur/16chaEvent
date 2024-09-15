<template>
  <div class="page confirm_page">
    <div class="user_point">
      <div class="username_box">
        <UserName :name="$store.getters['auth/username']" />
        <div class="small_text">您好</div>
      </div>
      <div class="point_details">
        <!-- <div class="text">
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
        </div> -->
      </div>
    </div>
    <!-- <VuePerfectScrollbar
      ref="ps"
      class="scroll-area"
      :settings="settings"
      @ps-scroll-y="scrollHandle"
      tagname="div"
    > -->
    <div id="exchange_confirm">
      <img src="@/assets/images/exchange-bg.png" alt="" />
      <VuePerfectScrollbar
        ref="ps"
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHandle"
        tagname="div"
      >
        <div class="change_box change_list1">
          <AppSubtitle>本次兌換明細</AppSubtitle>
          <div class="table">
            <div class="wrap">
              <div class="t_header">
                <div class="row">
                  <div class="grid">
                    <span>兌換項目</span>
                  </div>
                  <div class="grid">
                    <span>數量</span>
                  </div>
                  <div class="grid">
                    <span>點數小計</span>
                  </div>
                </div>
              </div>
              <!-- <div class="t_body">
                <div
                  v-for="prize in selectedPrizes"
                  :key="prize.awards_id"
                  class="row"
                >
                  <div class="grid">
                    <p>
                      {{ prize.awards_item }}
                      <span v-if="prize.lottery" class="lottery"></span
                      ><span
                        class="lottery point-color"
                        :class="{ lottery_color: prize.lottery }"
                        >/{{ prize.awards_points }} 點</span
                      >
                    </p>
                  </div>
                  <div class="grid">
                    <p>{{ prize.quantity }}</p>
                  </div>
                  <div class="grid">
                    <p>
                      {{
                        Number(prize.awards_points) * Number(prize.quantity)
                      }}點
                    </p>
                  </div>
                </div>
              </div> -->
              <div class="t_body">
                <div
                  v-for="prize in selectedPrizes"
                  :key="prize.awards_id"
                  class="row"
                >
                  <div class="grid">
                    <p>
                      {{ prize.awards_item }}
                    </p>
                  </div>
                  <div class="grid">
                    <p>{{ prize.quantity }}</p>
                  </div>
                  <div class="grid">
                    <p>
                      {{
                        Number(prize.awards_points) * Number(prize.quantity)
                      }}點
                    </p>
                  </div>
                </div>
              </div>
              <div class="t_footer">
                <div class="row">
                  <div class="grid"></div>
                  <div class="grid"></div>
                  <div class="grid">
                    <p>
                      總計 <span>{{ totalPoints }}</span> 點
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="change_box change_list2">
          <AppSubtitle>收件資料</AppSubtitle>
          <ExchangeConfirmUserForm
            :changePage="changePage"
            :prizes="selectedPrizes"
          />
        </div>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import UserName from "@/components/UserName";
import AppSubtitle from "@/components/AppSubtitle";
import ExchangeConfirmUserForm from "@/components/ExchangeConfirmUserForm";
import VuePerfectScrollbar from "@/components/PerfectScrollbar";

export default {
  components: {
    UserName,
    AppSubtitle,
    ExchangeConfirmUserForm,
    VuePerfectScrollbar,
  },
  props: {
    changePage: {
      type: Function,
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
    totalPoints() {
      return this.selectedPrizes.reduce(
        (total, { quantity, awards_points }) =>
          (total += Number(quantity) * Number(awards_points)),
        0
      );
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.ps.update();
    }, 3000);
  },
  methods: {
    // scrollHandle(evt) {
    //   // console.log(evt);
    // },
  },
};
</script>

<style lang="scss">
@import "./ExchangeConfirm.scss";
</style>
