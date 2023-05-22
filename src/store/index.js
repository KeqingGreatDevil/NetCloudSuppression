import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      MenuOptions: [
        {
          label: "发现音乐",
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
export const usePlayListStore = defineStore("music", {
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
          ar:[
            {
                "id": 12873554,
                "name": "Yzz",
                "tns": [],
                "alias": []
            },
            {
                "id": 32829967,
                "name": "Yzz Beats",
                "tns": [],
                "alias": []
            }
        ],
          id:1916256128,
        },
      ],
      playIndex:0,
      isBtnShow:false,
    };
  },
  actions:{
      updateisShowPlayBtn(vaule) {
        return this.isBtnShow=vaule
      },
      updatePlayList(vaule) {
        return this.PlayMusicBase=vaule
      },
      updateplayIndex(vaule){
        return this.playIndex=vaule
      },
      updatePlayIndexSwitch(vaule){
        return this.playIndex+=vaule
      },

      fileData (row) {// 处理歌手
        let arr = row.ar.map((item) => {// 不会改变原数组，返回新数组
          return item.name;
        });
        return arr.join("/"); // 不会改变原数组，返回字符串
      }
  }
});
