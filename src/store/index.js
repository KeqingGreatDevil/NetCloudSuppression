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
export const usePlayMusicBase= defineStore("music",{
  state:()=>{
    return {
      PlayMusicBase:[
        
      ]
    }
  }
})