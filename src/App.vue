<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import * as echarts from "echarts";
import { provide } from "vue";
provide("echarts", echarts);

let route = useRoute();
const default_layout = "default"
const empty_layout = "empty"
let  isRouterAlive = true
const layout = computed(() => {
  let layoutName = route.meta.layout || default_layout;
  //如果路由的布局元数据为 “empty” 则不呈现布局
  if (layoutName === empty_layout){
    isRouterAlive = false;
  }else {
    isRouterAlive = true;
  }

  // 返回布局组件的名字
  return layoutName + "-layout";
})
</script>
<template>
  <div id="app">
    <!-- only render layout component if isRouterAlive is true -->
    <component :is="layout" v-if="isRouterAlive">
      <router-view/>
    </component>
    <!-- if isRouterAlive is false, render the routed component directly -->
    <router-view v-else/>
  </div>
</template>

<style>
/*@font-face {*/
/*    font-family: 'pingfang';*/
/*    src: url('/public/font/PingFang.woff2') format('woff2');*/
/*}*/

#app {
  font-family: "PingFang SC", sans-serif;
}
</style>
