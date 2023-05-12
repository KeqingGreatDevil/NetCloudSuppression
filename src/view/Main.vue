<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
</template>

<script setup>
import CommonHeader from "../components/CommonHeader.vue";
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  height: 70px;
}
.el-main {
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #ccc;
}
</style>
