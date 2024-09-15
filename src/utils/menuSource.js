export default {
  navItems: [
    {
      path: 'register',
      text: '輸入序號',
      requestAuth: true,
    },
    {
      path: 'serial-number',
      text: '我的序號',
      requestAuth: true,
      hover: true,
      children: [
        {
          page: 'list',
          text: '登錄序號明細',
        },
        {
          page: 'exchange',
          text: '點數兌換紀錄',
        },
      ],
    },
    {
      path: 'exchange',
      text: '贈品兌換',
      requestAuth: true,
      track: "trackCustom2",
    },
    // {
    //   path: 'winning',
    //   text: '抽獎得獎名單',
    // },
    {
      path: 'serial-winning',
      text: '抽獎得獎名單',
      hover: true,
      track: "trackCustom3",
      children: [
        {
          page: '16points',
          text: '週週送16點',
        },
        {
          page: '1point',
          text: '1點抽大獎',
        },
      ],
    },
    {
      path: 'activity',
      text: '活動辦法',
      track: "trackCustom3",
    },
    {
      path: 'where-to-buy',
      text: '購買通路',
      track: "trackCustom3",
    },
  ],
  fansItems: [
    {
      path: 'https://www.facebook.com/tw16asahi/',
      name: 'fb',
    },
    {
      path: 'https://www.instagram.com/16cha_tw/',
      name: 'ig',
    },
    {
      path: 'https://www.asahisoftdrinks.com.tw/16cha/',
      name: 'official-website',
    },
  ],
};
