<template>
  <div class="winningList">
    <!-- <AppSubtitle>Peace兒童相機</AppSubtitle> -->
    <!-- <AppSubtitle></AppSubtitle> -->
    <!-- <div class="winning_title"></div> -->
    <div class="text">
      <!-- <p class="winning_subtitle">恭喜以下幸運茶粉獲得</p> -->
      <p class="winning_color">每週抽16名，每位獲16點</p>
      <ul class="winning_menu">
        <!-- <li @click="winning_menu = 1" :class="{ active: winning_menu === 1 }">
          8/30開獎
        </li>
        <li @click="winning_menu = 2" :class="{ active: winning_menu === 2 }">
          9/6開獎
        </li>
        <li @click="winning_menu = 3" :class="{ active: winning_menu === 3 }">
          9/13開獎
        </li>
        <li @click="winning_menu = 4" :class="{ active: winning_menu === 4 }">
          9/20開獎
        </li> -->
        <li>
          <AppLink
            @click="winning_menu = 1"
            :class="{ active: winning_menu === 1 }"
            :to="`false`"
            ga="winning-0830"
            >8/30開獎</AppLink
          >
        </li>
        <li>
          <AppLink
            @click="winning_menu = 2"
            :class="{ active: winning_menu === 2 }"
            :to="`false`"
            ga="winning-0906"
            >9/6開獎</AppLink
          >
        </li>
        <li>
          <AppLink
            @click="winning_menu = 3"
            :class="{ active: winning_menu === 3 }"
            :to="`false`"
            ga="winning-0913"
            >9/13開獎</AppLink
          >
        </li>
        <li>
          <AppLink
            @click="winning_menu = 4"
            :class="{ active: winning_menu === 4 }"
            :to="`false`"
            ga="winning-0920"
            >9/20開獎</AppLink
          >
        </li>
      </ul>
      <!-- <ul class="winning_box notyet" v-if="winning_menu === 1">
        <div class="winning_box_inner">
          <li><span>尚未公布</span></li>
        </div>
      </ul> -->
      <ul class="winning_box" v-if="winning_menu === 1">
        <div class="winning_box_inner">
          <li>
            <span>林Ｏ娟</span>
            <span>0938***129</span>
          </li>
          <li>
            <span>莊Ｏ庭</span>
            <span>0966***011</span>
          </li>
          <li>
            <span>蔡Ｏ庭</span>
            <span>0932***221</span>
          </li>
          <li>
            <span>蔡Ｏ棠</span>
            <span>0901***934</span>
          </li>
          <li>
            <span>陳Ｏ宇</span>
            <span>0972***117</span>
          </li>
          <li>
            <span>邱Ｏ伯</span>
            <span>0913***885</span>
          </li>
          <li>
            <span>周Ｏ慧</span>
            <span>0923***927</span>
          </li>
          <li>
            <span>林Ｏ欣</span>
            <span>0912***144</span>
          </li>
          <li>
            <span>陳Ｏ宜</span>
            <span>0911***810</span>
          </li>
          <li>
            <span>徐Ｏ閔</span>
            <span>0935***056</span>
          </li>
          <li>
            <span>李Ｏ晏</span>
            <span>0988***872</span>
          </li>
          <li>
            <span>洪Ｏ侖</span>
            <span>0910***524</span>
          </li>
          <li>
            <span>王Ｏ茹</span>
            <span>0981***872</span>
          </li>
          <li>
            <span>張Ｏ棋</span>
            <span>0923***182</span>
          </li>
          <li>
            <span>李Ｏ成</span>
            <span>0915***337</span>
          </li>
          <li>
            <span>蕭Ｏ樺</span>
            <span>0919***629</span>
          </li>
          <li>
            <span>陳Ｏ儀</span>
            <span>0928***742</span>
          </li>
          <li>
            <span>江Ｏ珍</span>
            <span>0910***086</span>
          </li>
          <li>
            <span>董Ｏ福</span>
            <span>0984***617</span>
          </li>
          <li>
            <span>王Ｏ燕</span>
            <span>0918***888</span>
          </li>
          <li>
            <span>陳Ｏ靜</span>
            <span>0929***688</span>
          </li>
          <li>
            <span>張Ｏ評</span>
            <span>0911***595</span>
          </li>
          <li>
            <span>陳Ｏ賢</span>
            <span>0912***501</span>
          </li>
          <li>
            <span>林Ｏ霆</span>
            <span>0972***306</span>
          </li>
          <li>
            <span>陳Ｏ慧</span>
            <span>0963***683</span>
          </li>
          <li>
            <span>管Ｏ欽</span>
            <span>0916***169</span>
          </li>
          <li>
            <span>吳Ｏ珏</span>
            <span>0937***653</span>
          </li>
          <li>
            <span>黃Ｏ雅</span>
            <span>0922***886</span>
          </li>
          <li>
            <span>翁Ｏ軒</span>
            <span>0953***970</span>
          </li>
          <li>
            <span>范Ｏ茵</span>
            <span>0912***797</span>
          </li>
          <li>
            <span>袁Ｏ渝</span>
            <span>0937***745</span>
          </li>
          <li>
            <span>范Ｏ菁</span>
            <span>0939***809</span>
          </li>
        </div>
      </ul>
      <ul class="winning_box" v-if="winning_menu === 2">
        <div class="winning_box_inner">
          <li>
            <span>鄭Ｏ心</span>
            <span>0988***722</span>
          </li>
          <li>
            <span>許Ｏ甯</span>
            <span>0903***922</span>
          </li>
          <li>
            <span>鄭Ｏ婷</span>
            <span>0937***821</span>
          </li>
          <li>
            <span>謝Ｏ慧</span>
            <span>0983***506</span>
          </li>
          <li>
            <span>江Ｏ穎</span>
            <span>0973***912</span>
          </li>
          <li>
            <span>曾Ｏ穎</span>
            <span>0905***601</span>
          </li>
          <li>
            <span>唐Ｏ瀞</span>
            <span>0975***200</span>
          </li>
          <li>
            <span>黃Ｏ霞</span>
            <span>0932***885</span>
          </li>
          <li>
            <span>陳Ｏ雯</span>
            <span>0916***618</span>
          </li>
          <li>
            <span>廖Ｏ茹</span>
            <span>0989***598</span>
          </li>
          <li>
            <span>李Ｏ茹</span>
            <span>0912***326</span>
          </li>
          <li>
            <span>蔡Ｏ達</span>
            <span>0958***236</span>
          </li>
          <li>
            <span>劉Ｏ芬</span>
            <span>0953***415</span>
          </li>
          <li>
            <span>吳Ｏ親</span>
            <span>0988***676</span>
          </li>
          <li>
            <span>李Ｏ碩</span>
            <span>0958***681</span>
          </li>
          <li>
            <span>莊Ｏ宏</span>
            <span>0932***050</span>
          </li>
        </div>
      </ul>
      <ul class="winning_box notyet" v-if="winning_menu === 3">
        <div class="winning_box_inner">
          <li><span>尚未公布</span></li>
        </div>
      </ul>
      <ul class="winning_box notyet" v-if="winning_menu === 4">
        <div class="winning_box_inner">
          <li><span>尚未公布</span></li>
        </div>
      </ul>
      <!-- <ul class="winning_box">
        <li>
          <span>林Ｏ娜</span>
          <span>0937***460</span>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
// import AppSubtitle from '@/components/AppSubtitle';
import AppLink from "@/components/AppLink";

export default {
  components: {
    // AppSubtitle,
    AppLink,
  },
  data() {
    return {
      winning_menu: 1,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./WinningListPoints.scss";
</style>
