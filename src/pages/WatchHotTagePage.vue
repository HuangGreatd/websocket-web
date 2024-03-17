<template>
  <!--  //第三步：创建Dom结构（并且设定div的大小）用来echars图表-->
  <div class="watch" ref="EcharRef" style="width: 320px; height: 400px"></div>
</template>

<script setup lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import * as echarts from "echarts";
import myAxios from "../plugins/my-axios.js";
import {EChartsOption} from "echarts";

// 创建一个ref引用的DOM容器
const EcharRef = ref<HTMLElement | null>(null)

let seriesData = []
let yaxisData = []

onMounted(async () =>{
  const res = await  myAxios.post("/user/tags/hot",{

  })
  if (res?.data.code === 0) {
    // console.log(res?.data.data)
    yaxisData = res?.data.data.yaxisData
    seriesData = res?.data.data.seriesData[0].data
    if (EcharRef.value) {
      const myChart = echarts.init(EcharRef.value)

      const option: EChartsOption = {
        title: {
          text: '热门标签'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: yaxisData
        },
        series: [
          {
            name: null,
            type: 'bar',
            data: seriesData
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
})
</script>
<style scoped>
.watch{
  position: relative;
  padding-top:30px;
  margin-left:5px
}
</style>
