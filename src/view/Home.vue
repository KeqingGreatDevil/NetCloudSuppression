<template>
  <div class="home_view">
    <div class="banner">
      <el-carousel indicator-position="outside" height="400px">
        <el-carousel-item v-for="item in state.images" :key="item">
          <img :src="item.imageUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="recommend">
      <el-card class="r_card">
        <div class="r_hd">
          <div class="r_logo"></div>
          <span>推荐歌曲</span>
        </div>
        <div class="r_music">
          <div
            class="p_music"
            v-for="item in state.playLists"
            :key="item.id"
            @click="clickDetail(item.id)"
          >
            <img :src="item.picUrl" style="width: 140px; height: 140px" />
            <div class="bottom">
              <div class="icon_headset">
                <span class="ih_s">{{ changnum(item.playCount) }}</span>
              </div>
              <div class="icon_play"></div>
            </div>
            <span class="itemname">{{ item.name }}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import getBanner from "../request/api/home";
import { getMusicplaylists } from "../request/api/item";
import { useRouter } from "vue-router";

const state = reactive({
  images: [],
  playLists: [],
});
const router = useRouter();

onMounted(async () => {
  let res = await getBanner();
  state.images = res.data.banners;
  let playlists = await getMusicplaylists();
  state.playLists = playlists.data.result;
});

const changnum = (num) => {
  if (num >= 100000) {
    return (num / 100000).toFixed(1) + "万";
  }
};
const clickDetail = (id) => {
  router.push({
    name: "detail",
    query: { id: id },
  });
};
</script>

<style lang="scss" scoped>
.home_view {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  .banner {
    .el-carousel {
      width: 1080px;
      height: 400px;
      :deep(.el-carousel__indicators--outside) {
        position: absolute;
        transform: translate(-50%, 50%);
      }
    }
  }
  .recommend {
    width: 1080px;
    height: 100%;
    .r_card {
      display: flex;
      flex-flow: column;
      .r_hd {
        height: 33px;
        width: 100%;
        border-bottom: 2px solid #c10d0c;
        display: flex;
        .r_logo {
          height: 33px;
          width: 33px;
          background: url(index.png) no-repeat -225px -156px;
        }
        span {
          height: 100%;
          width: 100%;
          font-size: 20px;
          font-weight: normal;
        }
      }
      .r_music {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin-top: 30px;
        .p_music {
          width: 182px;
          height: 234px;
          position: relative;
          .bottom {
            width: 140px;
            height: 27px;
            font-size: 12px;
            position: absolute;
            bottom: 94px;
            background-color: rgba($color: #000000, $alpha: 0.4);
            display: flex;
            justify-content: space-between;
            .icon_headset {
              width: 14px;
              height: 11px;
              margin: 9px 0 0 5px;
              background: url(iconall.png) no-repeat 0 -24px;
              display: flex;
              align-items: center;
              .ih_s {
                width: 38px;
                height: 17px;
                margin-left: 17px;
                color: #ccc;
                white-space: nowrap;
              }
            }
            .icon_play {
              width: 16px;
              height: 17px;
              background: url(iconall.png) no-repeat 0 0;
              margin: 5px 5px 0 0;
              cursor: pointer;
            }
          }
          .itemname {
            display: inline-block;
            width: 140px;
            height: 40px;
            vertical-align: middle;
            cursor: pointer;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
