<template>
  <van-sticky>

    <van-nav-bar
        :title="title"
        :left-arrow="showLeftArrow"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #left>
        <van-icon size="18">
          <img src="../../public/art.png" height="18px" width="18px">
        </van-icon>
      </template>
      <template #right>
        <van-icon name="search" size="18"/>
      </template>
    </van-nav-bar>
  </van-sticky>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const DEFAULT_TITLE = "yuchuang交友"
const title = ref(DEFAULT_TITLE)
const active = ref(0)
let router = useRouter();
const onClickLeft = () => {
  router.push("/user/match")
};

const onClickRight = () => {
  router.push("/search")
};

</script>

<style scoped>

</style>