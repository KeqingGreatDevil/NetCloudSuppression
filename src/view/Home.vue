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
          <img src="" alt="" />
          <div class="bottom"></div>
          <span></span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import getBanner from "../request/api/home";

onMounted(async () => {
  let res = await getBanner();
  console.log(res.data.banners);
  state.images = res.data.banners;
});
const state = reactive({
  images: [],
});
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
    }
  }
}
</style>
