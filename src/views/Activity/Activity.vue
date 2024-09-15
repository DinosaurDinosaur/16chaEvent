<template>
  <InnerPageLayout>
    <section class="method">
      <div class="bg-top-m"></div>
      <div class="wrap">
        <div class="outside">
          <PageTitle>活動辦法</PageTitle>
        </div>
        <div class="content">
          <div class="bg-left"></div>
          <VuePerfectScrollbar
            ref="ps"
            class="scroll-area"
            :settings="settings"
            @ps-scroll-y="scrollHandle"
            tagname="div"
          >
            <!-- <PageTitle>活動辦法</PageTitle> -->
            <div class="activity_title">活動日期</div>
            <div class="text">
              <p>
                凡於2024/08/15(四)起至2024/09/25(三)購買之活動品項皆可參加本集點活動，惟須在2024/09/26(四)23:59前完成序號登錄及贈品兌換。
              </p>
            </div>

            <div class="activity_title">活動辦法</div>
            <div class="text">
              <p>
                活動期間內，凡購買十六茶零咖啡因複方茶PET
                530ml或十六茶零咖啡因豆乳奶茶PET530ml，並至【秋烤來零十六茶
                一點抽&集點送】活動網站登錄瓶身貼紙所附之序號，每 1
                張瓶貼序號即代表1點，每 1 點限用 1
                次。集滿指定點數即可兌換十六茶獨家好禮，或參加1點抽「礁溪老爺酒店露營車兩天一夜」。
              </p>
              <p class="activity_color">
                ※活動期間購買商品十六茶零咖啡因複方茶PET 530ml /
                十六茶豆乳奶茶PET530ml，若無序號瓶貼，可私訊<a
                  href="https://www.facebook.com/tw16asahi"
                  target="_blank"
                  class="activity_color"
                  >十六茶粉絲團</a
                >提供購買憑證領取相應數量的活動序號。
              </p>
              <p class="activity_color">
                ※序號點數需於2024/09/26(四)23:59前登錄完畢及完成贈品兌換，逾期點數無效，並視同自行放棄參與權益。
              </p>
              <p class="activity_color">
                ※請妥善保留登錄序號瓶貼，序號驗證有問題時，須提供瓶貼進行複查。
              </p>
              <p class="activity_color">
                ※每個序號限登錄一次，如有重複輸入經查驗屬實則點數不予累計。
              </p>
            </div>

            <div class="activity_title">集滿指定點數兌換/抽獎贈品</div>
            <div class="text">
              <h3 class="small_title">一、集點兌換</h3>
              <p>集滿指定點數，即可兌換下列十六茶獨家好禮：</p>
              <ul class="point">
                <li>十六茶慢食餐具組：累積20點兌換 1 個，數量無上限。</li>
                <li>十六茶簡約晴雨傘：累積35點兌換 1 個，數量無上限。</li>
                <li>
                  天然皂禮盒(紅豆/黃豆/綠豆)：累積50點兌換 1 個，數量無上限。
                </li>
                <li>十六茶行動電源：累積60點兌換 1 個，限量49台。</li>
                <li>說走就走登機箱：累積100點兌換 1 個，數量無上限。</li>
              </ul>
              <h3 class="small_title">二、1點抽獎</h3>
              <p>每一點代表1次抽獎機會，點數越多，得獎機會越高！</p>
              <ul class="point">
                <li>
                  礁溪老爺酒店露營車兩天一夜，共1名
                  <div style="padding-left: 0">
                    為總價值NT$19,250元之中獎憑證。憑此中獎憑證可兌換折抵適用平日-特定假日，得天露營體驗區露營體驗乙晚(四人一室)。露營體驗含早/晚餐四人份及酒店設施免費使用，細節依實際憑證內容為準。
                  </div>
                </li>
              </ul>
              <p>
                ※贈品兌換申請後，系統將寄送審核步驟至您的電子郵件，請依照信件指示完成審核流程。
              </p>
              <p class="activity_color">
                ※請妥善保留已登錄序號之瓶貼，序號驗證有問題時，須提供瓶貼進行複查。
              </p>
              <p>
                ※如因收件聯絡資料填寫錯誤，導致無法順利收取審核電子郵件，視為放棄。
              </p>
              <p>※部分兌換贈品數量有限，換完為止。</p>
              <p>
                ※兌換與抽獎贈品以實物為主，不得挑款或折現。參加者對於本活動抽獎結果應予以尊重，不得異議，如有疑慮請自行斟酌是否參加。
              </p>
              <h3 class="small_title">
                三、加碼週週抽16名送16點，活動期間共計80名
              </h3>
              <p>
                9/17前於本網站「完成任一贈品兌換者」或「已使用一點抽大獎者」即符合週週抽序號16點之資格，系統將自動納入抽獎名單。已符合資格者每週皆可參加抽獎，但每個帳號每週限乙次得獎機會。
              </p>
              <ul class="point">
                <li>
                  週週抽得獎公佈時間如下：
                  <div style="padding-left: 0">
                    第一週 2024/8/30 送出16+16名<br />
                    第二週 2024/9/6 送出16名<br />
                    第三週 2024/9/13 送出16名<br />
                    第四週 2024/9/20 送出16名
                  </div>
                </li>
              </ul>
              <p>
                活動小組將透過您於本活動網站登錄之聯絡資料，以手機簡訊發送得獎通知，獎品序號16點將直接匯入得獎帳號。請留意，登錄資料務必填寫本人資料且正確填寫，如因聯絡資料提供不正確以致無法聯絡中獎者，視同中獎者放棄中獎資格，主辦單位將不另行通知。
              </p>
              <h3 class="small_title">
                四、十六茶官方粉絲團期間限定活動「看影片抽1點」，共100名
              </h3>
              <p>
                2024/9/3前於FB指定活動貼文完成看影片答題任務，就有機會免費獲得1點。敬請關注<a
                  href="https://www.facebook.com/tw16asahi"
                  target="_blank"
                  class="activity_color"
                  >十六茶粉絲團</a
                >。
              </p>
            </div>

            <div class="activity_title">兌換/領獎方式與注意事項</div>
            <div class="text">
              <h3 class="small_title">一、集點兌換領獎</h3>
              <p>
                兌換〈十六茶慢食餐具組〉、〈十六茶簡約晴雨傘〉、〈天然皂禮盒(紅豆/黃豆/綠豆)〉、〈十六茶行動電源〉、〈說走就走登機箱〉贈品者，於兌換作業審核完成後，贈品預計於活動結束後寄出。
              </p>
              <h3 class="small_title">二、1點抽獎領獎</h3>
              <ul class="point">
                <li>
                  本活動預計於
                  2024年10月7日(ㄧ)公告〈礁溪老爺酒店露營車兩天一夜〉中獎者於活動網站，敬請密切鎖定。
                </li>
                <li>
                  中獎者請於 2024年10月18日(五) 前私訊<a
                    href="https://www.facebook.com/tw16asahi"
                    target="_blank"
                    class="activity_color"
                    >十六茶Facebook粉絲專頁</a
                  >或將個人資料寄至<a
                    href="mailto:16cha_event@mail.asahisoftdrinks.com.tw"
                    class="activity_color"
                    >16cha_event@mail.asahisoftdrinks.com.tw</a
                  >，活動小組將提供領獎確認單，並請中獎人完整填寫(含親筆簽名及蓋章)後連同中獎瓶貼序號，將紙本正本掛號寄至【台北市信義區信義路五段
                  150 巷 2 號 16 號樓之 4〈秋烤來零十六茶 活動小組〉】收。
                </li>
                <li>
                  領獎回函收件截止日：2024 年 10 月 25
                  日(五)止（紙本以郵戳為憑），逾期視同自動放棄權利，待活動小組確認收到領獎回函後，即完成兌換手續，屆時請依中獎憑證上載明之兌換方式兌領。
                </li>
              </ul>

              <h3 class="small_title">三、兌換/中獎領獎注意事項</h3>
              <ul class="point">
                <li>
                  活動小組將以兌換獎項消費者於活動流程填寫之個人資料聯繫後續領獎事宜，如因資料提供不全或不確實，以致無法聯絡領獎者，視同放棄領獎資格，主辦單位將不另行通知，也不予保留或遞補。
                </li>
                <li>
                  贈品將以中華郵政包裹寄出，運送地址請詳實填寫，若因地址或個人相關資料不完整，導致贈品無法寄送、投遞不成功、退件、無人簽收、無法聯絡中獎者等因素，視同放棄兌獎資格，中獎者不得要求主辦單位補償，主辦單位對於任何不實或不正確之資料亦不負任何法律責任。
                </li>
                <li>
                  依中華民國稅法規定，獎項價值 NT$1,001
                  元（含）以上者，需繳交身分證影本供報稅使用，並於次年列入本年度之個人綜合所得稅申報，主辦單位將不再另外寄發紙本中獎所得扣繳憑單。獎項價值超過
                  NT$20,010 元，依法需預先繳交 10％
                  機會中獎稅金。中獎者若不願意配合，則視為自動棄權，不具中獎資格。中獎者同意依台灣相關稅法規定繳納稅捐，並同意主辦單位得依相關法令代扣（繳納）相關稅捐。若中獎者為未成年人，需附上未成年中獎者之身分證正反面影本、法定代理人身分證正反面影本。若未成年人無國民身分證者，另須提供中獎者戶口名簿影本或戶籍謄本正本
                  ( 須為 3 個月內核發之版本 )
                  。若為外籍人士，需檢附護照影本。如因中獎回函或聯絡資料提供不全、不確實或逾期回覆以致無法聯絡中獎者，視同中獎者放棄中獎資格，主辦單位將不另行通知，也不予保留或遞補。
                </li>
              </ul>
            </div>

            <div class="activity_title">活動注意事項</div>
            <div class="text">
              <p>
                參加者於參與本活動之同時，即表示同意接受本活動之活動辦法與注意事項之規範；如有違反，主辦單位得取消其中獎資格，並對於任何破壞本活動之行為保留法律追訴權。若您為未滿
                20
                歲之未成年人，應於您的法定代理人(或監護人)閱讀、瞭解並同意本活動之所有內容後，方得參加本活動。當您參加本活動時，即視為您的法定代理人(或監護人)
                已閱讀、瞭解並同意接受本活動之所有內容規範。
              </p>
              <ul class="point">
                <li>
                  參加者保證所有填寫或提出之資料均為真實、正確，如因中獎者之資料不實或填寫不正確或不完整或無法辨識等問題導致無法兌獎者，視同中獎者自願放棄中獎資格，獎項將不另行補發，主辦單位不負任何責任；若因逾期兌獎者，視同自行放棄並不得異議。且如有致損害於主辦單位或其他任何第三人，參加者應負一切相關責任。
                </li>
                <li>
                  主辦單位有權檢視各活動參加者之參與行為及中獎情形是否涉嫌不法或有違常理之異常狀況，例：人為操作蓄意偽造、短時間異常多筆參與行為、透過任何電腦程式參與活動、詐欺或以任何其他不正當的方式意圖以進行不實或虛偽活動參與行為、或登錄資料不實或不正確或盜用任何第三人之資料，或有違反活動規範之行為等。活動參加者因上述情形所獲得之活動資格及獎品，主辦單位及活動小組保有變更、終止參加活動資格、取消中獎資格或暫停活動的權利，並保留法律追訴權。
                </li>
                <li>
                  本活動之所有獎品不得轉換、轉讓或折換現金。獎項以公佈於本頁面上的資料為準，如遇不可抗力之因素，主辦單位保留更換其他等值獎項之權利。
                </li>
                <li>
                  獎項以公佈於本活動辦法網頁上的資料為準，主辦單位保留修改活動獎項細節的權利，無須事前通知，並有權對本活動所有事宜作出解釋或裁決。
                </li>
                <li>
                  中獎者須遵守各獎品供應商所列有關獎品之各項條款及細則，如有相關使用疑問，請洽各獎品供應商，主辦單位對所有領取或使用獎品等事宜，概不負責。
                </li>
                <li>
                  如有任何因網路、電子產品（包括但不限於任何其他得登入本活動參與抽獎之電子產品。例如：電腦、IPAD、手機）、技術或不可歸責於主辦單位之事由，而使參加者所登錄之資料有延遲、遺失、錯誤、無法辨識或毀損之情況，主辦單位不負任何法律責任，參加者亦不得因此異議。
                </li>
                <li>
                  本活動限中華民國台灣地區（台澎金馬）之居民參加。獎品寄送亦限於中華民國台灣地區（台澎金馬）。贈品一經寄送，主辦單位不負贈品無法送達及寄送時發生損毀之責任。
                </li>
                <li>
                  主辦單位保留取消、變更或解釋活動內容之權利。如有任何爭議，主辦單位保留最終裁決權。
                </li>
                <li>
                  如對本活動有任何問題，請於上班時間聯繫<a
                    href="https://www.facebook.com/tw16asahi"
                    target="_blank"
                    class="activity_color"
                    >十六茶FB 官方粉絲團</a
                  >，服務時間周一～周五，10:00~13:00/14:00~18:00，例假日及國定假日暫不提供服務。
                </li>
                <li>
                  主辦單位(台灣朝日飲料股份有限公司)及合作廠商(摩爾兔創意有限公司)為進行本活動之目的，將得以蒐集參加者之個人資料(包括但不限於
                  Facebook 帳號及 ID
                  、姓名、電子郵件、手機號碼、郵寄地址等)，並進行處理、利用（包括國際傳輸）。主辦單位及合作廠商謹遵個人資料保護法之規定，詳細告知內容請參閱以下履行個人資料保護法義務告知書。
                </li>
              </ul>
            </div>

            <div class="activity_title">個人資料告知事項暨同意書</div>
            <div class="text">
              <ul class="point">
                <li>
                  主辦單位及合作廠商依據個人資料保護法等相關規定，以下告知事項請台端詳閱：參加本活動前，請務必詳閱本活動辦法內容，當您透過本活動網站輸入個人資料參與活動時表示已同意『個人資料告知事項與同意書』內容。
                </li>
                <li>
                  個人資料範圍：自活動網站／Facebook蒐集及參加者個人提供之參加者個人資料，包括Facebook帳號及ID、姓名、手機號碼、電子郵件、郵寄地址等。
                </li>
                <li>
                  蒐集之目的：執行【秋烤來零十六茶】網路活動暨相關業務及所銷售商品之消費者行銷活動
                  (下稱「本活動」)。本活動之參加、中獎聯繫及單據寄送等與本活動執行相關事宜。
                </li>
                <li>
                  利用之期間：本活動起始日起至本活動獎品寄送程序執行完畢之日。主辦單位及合作廠商於本活動結束時將參加者之個人資料全數銷毀，不另作他用。但取得得獎者或中獎者個別之書面同意者，不在此限。
                </li>
                <li>利用之地區：台、澎、金、馬地區。</li>
                <li>
                  利用之對象：主辦單位及其關係企業，或與主辦單位及其關係企業因業務需要訂有契約關係或業務往來之機構。
                </li>
                <li>
                  利用之方式：符合個人資料保護相關法令以自動化機器或其他非自動化之利用方式之蒐集、處理、利用及國際傳輸（包括但不限於使用電子文件、紙本或其他合於當時科學技術之適當方式等）。
                </li>
              </ul>
            </div>

            <div class="btns">
              <AppButton :to="{ name: 'home' }" ga="activity-back-index">
                <span>返回首頁</span>
              </AppButton>
            </div>
          </VuePerfectScrollbar>
          <div class="bg-right"></div>
        </div>
      </div>
      <div class="bg-bottom"></div>
      <div class="bg-bottom-m"></div>
    </section>
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
import AppButton from "@/components/AppButton";
import VuePerfectScrollbar from "@/components/PerfectScrollbar";
import AppLink from "@/components/AppLink";

export default {
  components: {
    InnerPageLayout,
    PageTitle,
    AppButton,
    VuePerfectScrollbar,
    AppLink,
  },
  data() {
    return {
      sizeChange: false,
    };
  },
  methods: {
    // scrollHandle(evt) {
    // console.log(evt);
    // },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.ps.update();
    }, 3000);
  },
};
</script>

<style lang="scss">
@import "./Activity.scss";
</style>
