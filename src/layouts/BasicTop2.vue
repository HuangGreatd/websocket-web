<template>
  <van-sticky>

    <van-nav-bar
        :title="title"
        :left-arrow="true"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18"/>
      </template>
    </van-nav-bar>
  </van-sticky>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

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