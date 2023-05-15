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
            <span class="tags" v-for="item in state.MusicDetail.tags">{{
              item
            }}</span>
          </div>
          <p
            ref="showme"
            :class="{ unfoldText: state.listOpenFlag }"
            class="d_introduce"
          >
            介绍： {{ state.MusicDetail.description }}
          </p>
          <span
            v-if="state.showBtnFlag"
            @click="state.listOpenFlag = !state.listOpenFlag"
          >
            {{ state.listOpenFlag ? "展开" : "收起" }}
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { getMusicDetail } from "../request/api/item";

onMounted(async () => {
  let id = useRoute().query.id;
  let res = await getMusicDetail(id);
  state.MusicDetail = res.data.playlist;
});
const showBtnFlag = false;
const state = reactive({
  MusicDetail: "",
  listOpenFlag: "false",
  showBtnFlag: "false",
});
const showme = ref(null);
onMounted(() => {
  if (showme.clientHeight >= 200) {
    state.showBtnFlag = true;
  }
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
      height: 100%;
      white-space: pre-wrap;
    }
    .unfoldText {
      height: 200px;
      overflow: hidden;
    }
  }
}
</style>
