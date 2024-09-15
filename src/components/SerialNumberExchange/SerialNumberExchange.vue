<template>
  <ContentLoader v-if="!serialNumberExchange" />
  <div v-else class="tab_page exchange_record active">
    <span v-if="total === 0" class="zero_text">尚無兌換紀錄</span>
    <div v-else class="table">
      <div class="th">
        <div class="row">
          <div class="grid">
            <span>兌換日期</span>
          </div>
          <div class="grid">
            <span>兌換項目</span>
          </div>
          <div class="grid">
            <span>審核進度</span>
          </div>
        </div>
      </div>
      <div class="td pc">
        <div class="td_wrap">
          <el-table
            :data="
              serialList.slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize
              )
            "
            style="width: 100%"
            :row-class-name="tableRowClass"
            :row-style="handleTableStyle"
          >
            <el-table-column
              prop="exchange_date"
              min-width="25%"
            ></el-table-column>
            <el-table-column min-width="50%">
              <template #default="scope">
                <p class="table_exchange_item">{{ scope.row.exchange_item }}</p>
                <p class="table_exchange_item">
                  <!-- <span v-if="scope.row.lottery" class="lottery_text"
                    >(抽獎)</span> -->
                  <span :class="{ lottery_color: scope.row.lottery }">
                    &nbsp;/&nbsp;{{ scope.row.exchange_point }}點</span
                  >
                </p>
              </template>
            </el-table-column>
            <el-table-column min-width="25%">
              <template #default="scope">
                <p
                  v-for="(str, idx) in formateStr(
                    scope.row.exchange_status_str
                  )"
                  :key="str + idx"
                  :class="{
                    color: isDrawComplete(idx, scope.row.exchange_status),
                  }"
                >
                  {{ str }}
                </p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="td mb">
        <div class="td_wrap">
          <el-table
            :data="
              serialList.slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize
              )
            "
            style="width: 100%"
            :row-class-name="tableRowClass"
            :row-style="handleTableStyle"
          >
            <el-table-column
              prop="exchange_date"
              min-width="22%"
            ></el-table-column>
            <el-table-column min-width="48%">
              <template #default="scope">
                <p class="table_exchange_item">{{ scope.row.exchange_item }}</p>
                <p class="table_exchange_item">
                  <!-- <span v-if="scope.row.lottery" class="lottery_text"
                    >(抽獎)</span> -->
                  <span :class="{ lottery_color: scope.row.lottery }"
                    >&nbsp;/&nbsp;{{ scope.row.exchange_point }}點</span
                  >
                </p>
              </template>
            </el-table-column>
            <el-table-column min-width="30%">
              <template #default="scope">
                <p
                  v-for="(str, idx) in formateStr(
                    scope.row.exchange_status_str
                  )"
                  :key="str + idx"
                  :class="{
                    color: isDrawComplete(idx, scope.row.exchange_status),
                  }"
                >
                  {{ str }}
                </p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-pagination
        @current-change="handleCurrentChange_e"
        @prev-click="prevClick_e"
        @next-click="nextClick_e"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        :pager-count="pagerCount"
        prev-text=""
        next-text=""
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import SerialNumberNavigation from '@/components/SerialNumberNavigation';
import ContentLoader from "@/components/ContentLoader";
// import { useArrayPagination } from 'vue-composable';

export default {
  components: { ContentLoader },
  props: {
    serialNumberExchange: {
      type: Array,
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      serialList: [],
      pagerCount: 4,
      tableRowClass: "row",
      // listNum: 1,
    };
  },
  methods: {
    formateDate(date) {
      return date.replace("年", "/").replace("月", "/").replace("日", "");
    },
    formateStr(data) {
      return data.split("##");
    },
    isDrawComplete(idx, status) {
      return (idx === 1 && status === 2) ||
        (idx === 1 && status === 4) ||
        (idx === 1 && status === 5)
        ? true
        : false;
    },
    getSerialData() {
      // const getUserDataResult = await getUserData();
      // const serial_list = getUserDataResult;
      // console.log(serial_list);
      this.serialList = this.serialNumberExchange;
      this.total = this.serialList.length;
      console.log(this.serialList);
      console.log(this.total);
      // this.total = this.serialList.length;
      // console.log(this.serialList);
      // console.log(this.total);
    },
    handleCurrentChange_e(val) {
      this.currentPage = val;
      this.tableRowClass = "";
      this.$nextTick(() => {
        this.tableRowClass = "row";
      });
    },
    handleTableStyle({ row, rowIndex }) {
      console.log(row, rowIndex);
      return {
        animationDelay: `${rowIndex * 0.1}s`,
        // zIndex: `${rowIndex * 1}`,
      };
    },
    prevClick_e() {
      console.log("prev-click");
      this.$store.dispatch("gaTracking", "entry-serial-number#list#rback");
    },
    nextClick_e() {
      console.log("next-click");
      this.$store.dispatch("gaTracking", "entry-serial-number#list#rnext");
    },
  },
  mounted() {
    this.getSerialData();
    // window.addEventListener('resize', function () {
    //   if (window.innerWidth < 640) {
    //     this.pagerCount = 3;
    //   }
    //   console.log(window.innerWidth);
    //   console.log(this.pagerCount);
    // });

    // if (window.innerWidth < 640) {
    //   this.pagerCount = 3;
    // }
  },
  beforeUpdate() {
    this.getSerialData();
  },
  updated() {
    this.getSerialData();
  },
};
</script>

<style lang="scss">
@import "./SerialNumberExchange.scss";

.td.pc {
  @media (max-width: 720px) {
    display: none;
  }
}
.td.mb {
  display: none;

  @media (max-width: 720px) {
    display: block;
  }
  .el-table .cell {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
