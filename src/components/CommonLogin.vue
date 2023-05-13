<template>
  <div>
    <span
      @click="
        login();
        centerDialogVisible = true;
      "
      class="loginbtn"
      >登录</span
    >
    <el-dialog
      v-model="centerDialogVisible"
      title="登录"
      width="538px"
      align-center
      center
    >
      <div class="b_login">
        <img src="login.png" class="ts_login" />
        <div class="b_l">
          <h3>扫码登录</h3>
          <img :src="state.signURL" style="width: 128px; height: 128px" />
          <p style="font-size: 12px; color: rgba(0, 0, 0, 0.4)">
            使用<span style="color: #0c73c2; cursor: pointer">
              网易云音乐APP </span
            >扫码登录
          </p>
        </div>
      </div>
      <template #footer>
        <el-button round>选择其他登录模式</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  qrCodeLoginKey,
  qrCodeLoginImg,
  qrCodeLoginCheck,
} from "../request/api/login";
const login = async () => {
  let nowtime = Date.now();
  //调第一个接口拿key
  let key = (await qrCodeLoginKey(nowtime)).data.data.unikey;
  //调第二个接口拿二维码图片
  let sginImgURL = (await qrCodeLoginImg(key)).data.data.qrimg;
  state.signShow = true;
  state.signURL = sginImgURL;
  // 800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功
  //每三秒check一次
  let check = setInterval(async () => {
    let nowtime2 = new Date().getTime();
    let res = await qrCodeLoginCheck(key, nowtime2).then();
    console.log(res.data.message, "---");
    if (res.data.code == 800) {
      alert(res.data.message);
      clearInterval(check);
    }
    if (res.data.code == 803) {
      alert(res.data.message);
      clearInterval(check);
    }
  }, 3000);
};

const centerDialogVisible = ref(false);
const state = reactive({
  signShow: false,
  signURL: "",
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
.b_login {
  display: flex;
  justify-content: center;
  align-items: center;
  .ts_login {
    width: 125px;
    height: 220px;
    margin-right: 25px;
  }
  .b_l {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
}
</style>
