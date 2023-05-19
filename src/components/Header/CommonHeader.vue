<template>
  <div class="header">
    <div class="h_left">
      <div class="logo"></div>
    </div>
    <div class="h_center">
      <el-menu
        default-active="home"
        class="el-menu-demo elmenu"
        mode="horizontal"
        :ellipsis="false"
        text-color="#fff"
        background-color="#242424"
      >
        <el-menu-item
          v-for="(item, index) in menuStore.MenuOptions"
          :index="item.name"
          :key="item.path"
          @click="clickMenu(item)"
          >{{ menuStore.MenuOptions[index].label }}</el-menu-item
        >
      </el-menu>
    </div>
    <div class="h_right">
      <div><CommonSearch /></div>
      <el-button size="small" class="btn" round color="#242424"
        >创作者中心</el-button
      >
      <div><CommonLogin /></div>
      <!-- <el-dropdown>
          <img src="userImg.jpg" class="userImg" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from "../../store/index";
import { useRouter } from "vue-router";
import CommonSearch from "./CommonSearch.vue";
import CommonLogin from "../CommonLogin.vue";

const menuStore = useMenuStore();
const router = useRouter();
const clickMenu = (item) => {
  router.push(item.path);
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: #242424;
  box-sizing: border-box; // 盒子不会被padding和margin撑大
  border-bottom: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .h_left {
    width: 100%;
    height: 100%;
    margin-left: 30px;
    .logo {
      width: 157px;
      height: 69px;
      background: url("/topbar.png") no-repeat 0 0;
      cursor: pointer; // 改变鼠标指针
    }
  }
  .h_center {
    width: 100%;
    height: 100%;
    .el-menu {
      border-bottom: none;
    }
  }
  .h_right {
    width: 100%;
    height: 100%;
    margin: 0 30px 0 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
      width: 90px;
      height: 32px;
      border: 1px solid #4f4f4f;
    }
  }
}
</style>
