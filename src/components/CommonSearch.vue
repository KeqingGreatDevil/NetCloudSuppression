<template>
  <div class="CommonSearch" ref="inputbig">
    <el-input
      v-model="input"
      placeholder="Please input"
      :prefix-icon="Search"
      clearable
      @focus="focus"
      @blur="blur"
    />
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";

const inputbig = ref("");
const input = ref("");
// const focus = () => {
//   inputbig.value.style.width = "450px";
// };
// const blur = () => {
//   inputbig.value.style.width = "180px";
// };
</script>

<style lang="scss" scoped>
.CommonSearch {
  width: 100%;
  height: 100%;
  margin-right: 10px;
  :deep(.el-input__wrapper) {
    width: 158px;
    height: 32px;
    border-radius: 32px;
    flex-grow: 0;
  }
}
</style>
