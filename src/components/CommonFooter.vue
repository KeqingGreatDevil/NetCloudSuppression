<template>
  <div class="footer">
    <div class="playBtn">
      <span
        class="pev"
        style="background: url(playbar.png) 0 -130px no-repeat"
        @click="BtnPev"
      ></span>
      <span
        class="ply_pause"
        @click="playMusic"
        v-if="PlayList.isBtnShow"
      ></span>
      <span class="ply" @click="playMusic" v-else></span>

      <span
        class="pev"
        style="background: url(playbar.png) -80px -130px no-repeat"
        @click="BtnNex"
      ></span>
    </div>
    <div class="f_playMusic">
      <img
        :src="PlayList.PlayMusicBase[PlayList.playIndex].al.picUrl"
        style="
          width: 35px;
          height: 35px;
          margin: 0 9px 0 28px;
          cursor: pointer;
          border-radius: 20px;
        "
      />
      <div class="f_msg">
        <span class="title">{{
          PlayList.PlayMusicBase[PlayList.playIndex].al.name
        }}</span>
        <span class="songer">{{
          PlayList.fileData(PlayList.PlayMusicBase[PlayList.playIndex])
        }}</span>
      </div>
      <audio
        :src="`https://music.163.com/song/media/outer/url?id=${
          PlayList.PlayMusicBase[PlayList.playIndex].id
        }.mp3`"
        ref="a_play"
      ></audio>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePlayListStore } from "../store/index";

const value = ref(0);
const a_play = ref(null);
const PlayList = usePlayListStore();

const playMusic = () => {
  //控制播放/暂停按钮
  if (a_play.value.paused) {
    a_play.value.play();
    PlayList.updateisShowPlayBtn(true);
  } else {
    a_play.value.pause();
    PlayList.updateisShowPlayBtn(false);
  }
};
const BtnPev = () => {
  // 切换上一首，如果是第一首就切换最后一首
  if (PlayList.playIndex > 0) {
    PlayList.updatePlayIndexSwitch(-1);
  } else {
    PlayList.updateplayIndex(PlayList.PlayMusicBase.length - 1);
  }
};
const BtnNex = () => {
  // 切换下一首，如果是最后一首就切换第一首
  if (PlayList.playIndex < PlayList.PlayMusicBase.length - 1) {
    PlayList.updatePlayIndexSwitch(1);
  } else {
    PlayList.updateplayIndex(0);
  }
};

watch(
  // 监听id，自动播放
  () => PlayList.PlayMusicBase[PlayList.playIndex].id,
  () => {
    a_play.value.autoplay = true;
    PlayList.updateisShowPlayBtn(true);
  }
);
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50px;
  background: #333;
  position: fixed;
  bottom: 0;
  z-index: 999;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  .playBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pev {
      display: block;
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
    .ply {
      display: block;
      width: 36px;
      height: 36px;
      background: url(playbar.png) 0 -204px no-repeat;
      cursor: pointer;
    }
    .ply_pause {
      display: block;
      width: 36px;
      height: 36px;
      background: url(playbar.png) 0 -165px no-repeat;
      cursor: pointer;
    }
  }
  .f_playMusic {
    display: flex;
    width: 300px;
    .f_msg {
      .title {
        min-width: 30px;
        overflow: hidden;
        color: #e8e8e8;
        margin-right: 5px;
      }
      .songer {
        color: #9b9b9b;
      }
    }
  }
}
</style>
