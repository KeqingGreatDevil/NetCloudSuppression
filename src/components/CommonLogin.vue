<template>
  <div>
    <span @click="centerDialogVisible = true" class="loginbtn">登录</span>
    <el-dialog
      v-model="centerDialogVisible"
      title="登录"
      width="538px"
      align-center
    >
      <span>{{ state.keys }}</span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import getkey from "../request/api/login";

onMounted(async () => {
  let getkeys = await getkey();
  if (getkeys.data.code == 200) {
    state.keys = getkeys.data.data.unikey;
  }
});

const centerDialogVisible = ref(false);
const state = reactive({
  keys: "",
});
</script>

<style lang="scss" scoped>
:deep(.el-dialog__header) {
  width: 475px;
  height: 38px;
  padding: 0 45px 0 18px;
  background-color: #2d2d2d;
  border-radius: 4px 4px 0 0;
}
:deep(.el-dialog__title) {
  line-height: 38px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}
:deep(.el-dialog__headerbtn) {
  top: -5px;
}
.loginbtn {
  display: block;
  width: 28px;
  height: 7px;
  margin-left: 10px;
  line-height: 7px;
  font-size: smaller;
  color: #787878;
  cursor: pointer;
}
</style>
