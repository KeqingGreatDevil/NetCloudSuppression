<template>
  <div>
    <el-card>
      <div class="msg">
        <img :src="state.MusicDetail.coverImgUrl" class="d_img" />
        <div class="d_msg">
          <div style="display: flex; align-items: center">
            <span class="d_bgImg"></span>
            <h2>{{ state.MusicDetail.name }}</h2>
          </div>
          <div>
            标签：
            <span class="tags" v-for="item in state.MusicDetail.tags">
              {{ item }}
            </span>
            <p
              class="d_introduce"
              :class="{ d_introduce_active: !state.isShowBtn }"
            >
              介绍： {{ state.MusicDetail.description }}
            </p>
            <span
              @click="state.isShowBtn = !state.isShowBtn"
              style="
                display: flex;
                justify-content: right;
                color: #0c73c2;
                cursor: pointer;
              "
              >{{ state.isShowBtn ? "展开" : "收起" }}</span
            >
          </div>
        </div>
      </div>
      <div class="d_songs">
        <div class="d_title">
          <h2>歌曲列表</h2>
          <span
            >播放：<span style="color: #c20c0c; font-weight: bold">
              {{ state.MusicDetail.playCount }}
            </span>
            次</span
          >
        </div>
        <el-table
          ref="singleTableRef"
          :data="state.MusicPlayList"
          highlight-current-row
          style="width: 100%"
          @current-change="handleCurrentChange"
        >
          <el-table-column type="index" />
          <el-table-column width="34px">
            <template #default="scope">
              <div
                style="
                  width: 17px;
                  height: 17px;
                  cursor: pointer;
                  background: url(table.png) 0 -103px no-repeat;
                "
              ></div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="歌曲标题" />
          <el-table-column prop="dt" label="时长">
            <template #default="scope">
              <span>{{ timer(scope.row.dt) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="ar" label="歌手" :formatter="fileData" />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { getMusicDetail, getMusicPlayList } from "../request/api/item";

onMounted(async () => {
  let id = useRoute().query.id;
  let res = await getMusicDetail(id);
  state.MusicDetail = res.data.playlist;
  let PlayList = await getMusicPlayList(id);
  state.MusicPlayList = PlayList.data.songs;
  console.log(state.MusicDetail);
  console.log(PlayList);
});
const state = reactive({
  MusicDetail: "",
  MusicPlayList: [],
  isShow: "false",
  isShowBtn: "false",
});
const currentRow = ref();
const handleCurrentChange = (val) => {
  currentRow.value = val;
  console.log(currentRow.value.id);
};
const fileData = (row) => {
  let arr = [];
  row.ar.forEach((item) => {
    arr.push(item.name);
  });
  return arr.join("/");
};
const timer = (timestamp) => {
  let date = new Date(timestamp);
  let m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return m + s;
};
</script>

<style lang="scss" scoped>
.msg {
  width: 100%;
  height: 100%;
  display: flex;
  .d_img {
    width: 200px;
    height: 200px;
    border: 4px double #ccc;
    margin-right: 30px;
  }
  .d_msg {
    width: 410px;
    height: 100%;
    box-sizing: border-box;
    .d_bgImg {
      width: 64px;
      height: 24px;
      background: url(icon.png) no-repeat 0 -243px;
      margin-right: 10px;
    }
    .tags {
      width: 100%;
      height: 22px;
      font-size: 12px;
      border: 1px solid #333;
      border-radius: 10px;
      padding: 0 13px;
      margin: 0 5px;
      color: #777;
      cursor: pointer;
    }
    .d_introduce {
      width: 410px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      white-space: break-spaces;
    }
    .d_introduce_active {
      display: block;
    }
  }
}
.d_songs {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  .d_title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
