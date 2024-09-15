<template>
  <div class="tab_page code_details">
    <span v-if="total === 0" class="zero_text">尚無登錄序號</span>

    <div v-else class="table">
      <div class="th">
        <div class="row">
          <div class="grid">
            <span>序號列表</span>
          </div>
          <div class="grid">
            <span>登錄日期</span>
          </div>
          <div class="grid">
            <span>備註</span>
          </div>
        </div>
      </div>
      <div class="td">
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
            <el-table-column label="序號列表" prop="serial"></el-table-column>
            <el-table-column
              label="登錄日期"
              prop="input_date"
            ></el-table-column>
            <el-table-column label="備註" prop="serial_type"></el-table-column>
          </el-table>
        </div>

        <el-pagination
          @current-change="handleCurrentChange"
          @prev-click="prevClick"
          @next-click="nextClick"
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          :pager-count="pagerCount"
          prev-text=""
          next-text=""
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import { useArrayPagination } from 'vue-composable';
// import SerialNumberNavigation from '@/components/SerialNumberNavigation';
// import { getUserData } from '@/api';

export default {
  // components: { SerialNumberNavigation },
  props: {
    serialNumberList: {
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
  // setup(props) {
  //   const { result, next, prev, currentPage, lastPage } = useArrayPagination(
  //     props.serialNumberList,
  //     { pageSize: 6 }
  //   );
  //   return { result, next, prev, currentPage, lastPage };
  // },
  // computed: {
  //   listNum() {},
  // },
  methods: {
    // formateDate(date) {
    //   return date.replace('年', '/').replace('月', '/').replace('日', '');
    // },
    getSerialData() {
      this.serialList = this.serialNumberList;
      this.total = parseInt(this.serialList.length);
      console.log(this.serialList);
      console.log(this.total);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.tableRowClass = "";
      this.$nextTick(() => {
        this.tableRowClass = "row";
      });
    },
    handleTableStyle({ row, rowIndex }) {
      // console.log(row, rowIndex);
      return {
        animationDelay: `${rowIndex * 0.1}s`,
      };
    },
    prevClick() {
      console.log("prev-click");
      this.$store.dispatch("gaTracking", "entry-serial-number#list#back");
    },
    nextClick() {
      console.log("next-click");
      this.$store.dispatch("gaTracking", "entry-serial-number#list#next");
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
@import "./SerialNumberList.scss";
</style>
