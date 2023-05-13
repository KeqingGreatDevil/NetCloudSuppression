<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main><router-view /></el-main>
      <CommonFooter />
    </el-container>
  </div>
</template>

<script setup>
import CommonHeader from "../components/Header/CommonHeader.vue";
import CommonFooter from "../components/CommonFooter.vue";
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  height: 70px;
}
.el-main {
  width: 1080px;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  background-color: #ccc;
}
</style>
