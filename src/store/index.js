import { defineStore } from "pinia";

export const useMenuOptions = defineStore("menu", {
  state: () => {
    return {
      MenuOptions: [
        {
          label: "首页",
          path: "/",
          name: "home",
        },
        {
          label: "发现歌单",
          path: "/notfound",
          name: "found",
        },
        {
          label: "我的音乐",
          path: "/",
          name: "music",
        },
        {
          label: "关注",
          path: "/",
          name: "concern",
        },
        {
          label: "商城",
          path: "/",
          name: "mall",
        },
        {
          label: "音乐人",
          path: "/",
          name: "Musicians",
        },
        {
          label: "下载客户端",
          path: "/",
          name: "download",
        },
      ],
    };
  },
});
export const usePlayMusicBase = defineStore("music", {
  state: () => {
    return {
      PlayMusicBase: [
        {
          al: {
            id: 139649889,
            name: "Pray Pray Pray",
            picUrl:
              "https://p1.music.126.net/PiGWWwu_p9C3TZtstNzrwQ==/109951166996366069.jpg",
            pic_str: "109951166996366069",
            pic: 109951166996366060,
          },
          ar: {
            id: 1081487,
            name: "polly",
          },
          id:1916256128,
        },
      ],
      playIndex:0,
    };
  },
});
