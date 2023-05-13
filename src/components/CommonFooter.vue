<template>
  <div class="footer">
    <img src="userImg.jpg" style="width: 35px; height: 35px" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getMusicUrl } from "../request/api/item";

const value = ref(0);
const MusicUrl = async () => {
  let res = await getMusicUrl(33894312);
  console.log(res);
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50px;
  background: #333;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
