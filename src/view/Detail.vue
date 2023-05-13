<template>
  <div>
    <el-card>
      <div class="msg">
        <img :src="state.MusicDetail.coverImgUrl" class="d_img" />
        <div class="d_msg">
          <h2>{{ state.MusicDetail.name }}</h2>
          <p>标签:{{ state.MusicDetail.tags }}</p>
          <p>介绍:{{ state.MusicDetail.description }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicDetail } from "../request/api/item";

onMounted(async () => {
  let id = useRoute().query.id;
  let res = await getMusicDetail(id);
  state.MusicDetail = res.data.playlist;
  console.log(res);
});
const state = reactive({
  MusicDetail: "",
});
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
    p {
      width: 410px;
      font-size: 12px;
      word-wrap: break-word;
      word-break: break-word;
      white-space: break-spaces;
    }
  }
}
</style>
