<template>
<!--  <van-notice-bar-->
<!--      color="#1989fa"-->
<!--      background="#ecf9ff"-->
<!--      left-icon="volume-o"-->
<!--      style="margin-bottom: 10px"-->
<!--      text="富强、民主、文明、和谐；自由、平等、公正、法治；爱国、敬业、诚信、友善。"-->
<!--  />-->
  <van-sticky>

    <van-nav-bar
        :title="title"
        :left-arrow="true"
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
  <div style="position: relative;height: 100%;width: 100%">
<!--    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render-->
<!--               style="width: 90%;height: 150px;margin: 0 auto">-->
<!--      <van-swipe-item v-for="image in images" :key="image">-->
<!--        <img :src="image" style="width: 100%;height: 150px"/>-->
<!--      </van-swipe-item>-->
<!--    </van-swipe>-->
<!--    <van-grid :column-num="2">-->
<!--      <van-grid-item icon="home-o" text="文字" dot />-->
<!--      <van-grid-item icon="search" text="文字" badge="99+" />-->
<!--    </van-grid>-->


        <van-pull-refresh
            v-model="refreshLoading"
            success-text="刷新成功"
            @refresh="blogRefresh">
<!--          <van-search v-model="blogSearch" placeholder="请输入搜索关键词" shape="round" @search="searchBlog"/>-->

          <van-list
              v-model:loading="listLoading"
              :finished="blogListFinished"
              offset="0"
              @load="blogLoad"
              style="margin: 20px"
          >
            <template #finished>
              <span v-if="!searching">没有更多了</span>
            </template>
            <blog-card-list :blog-list="blogList"/>
          </van-list>
          <van-back-top right="20px" bottom="60px"/>
          <van-empty v-if="(!blogList ||　blogList.length===0) && !listLoading &&!searching" image="search"
                     description="暂无博文"/>
        </van-pull-refresh>
      <van-loading vertical v-if="searching">
        <template #icon>
          <van-icon name="star-o" size="30"/>
        </template>
        加载中...
      </van-loading>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import myAxios from "../plugins/my-axios.js";
import UserCardList from "../components/UserCardList.vue";
import BlogCardList from "../components/BlogCardList.vue";
import {Toast} from "vant";
import BasicTop from "../layouts/BasicTop.vue";
import {useRouter} from "vue-router";
const refreshing = ref(false);
const list = ref([]);
const loading = ref(false);
const finished = ref(false);


const searching = ref(false)
const listLoading = ref(false)
const listFinished = ref(false)
const userList = ref([])
const refreshLoading = ref(false)
const currentPage = ref(0)
const userSearch = ref("")
const active = ref(0)
const blogList = ref([])
const blogListFinished = ref(false)
const blogCurrentPage = ref(0)
let router = useRouter();
const DEFAULT_TITLE = "yuchuang交友"
const title = ref(DEFAULT_TITLE)

const images = [
  "https://img0.baidu.com/it/u=3358848204,1936258606&fm=253&fmt=auto&app=120&f=JPEG?w=1421&h=800",
  "https://img2.baidu.com/it/u=3012806272,1276873993&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img0.baidu.com/it/u=741268616,1401664941&fm=253&fmt=auto&app=138&f=JPEG?w=748&h=500",
  "https://img1.baidu.com/it/u=2389614815,1145894179&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
]

const onClickLeft = () => {
  router.push("/user/match")
};

const onClickRight = () => {
  router.push("/search")
};

const blogLoad = async () => {
  blogCurrentPage.value++
  await getBlogList(blogCurrentPage.value)
}

const getBlogList = async (currentPage) => {
  let res = await myAxios.get("/blog/list", {
    params: {
      currentPage: currentPage,
      title: blogSearch.value
    }
  });
  if (res?.data.code === 0) {
    if (res.data.data.records.length > 0) {
      res.data.data.records.forEach(item => blogList.value.push(item))
    } else {
      blogListFinished.value = true
    }
    listLoading.value = false
  }
}


const onRefresh1 = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};



async function getUserList(currentPage) {
  const userListData = await myAxios.get("/user/match", {
    params: {
      currentPage: currentPage,
      username: userSearch.value
    }
  })
  if (userListData?.data.code === 0) {
  } else {
    Toast.fail("加载失败" + (res.data.description ? `,${res.data.description}` : ''))
  }
  if (userListData?.data.data.records.length === 0) {
    listFinished.value = true
    return
  }
  if (userListData?.data.data.records) {
    userListData.data.data.records.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    for (let i = 0; i < userListData.data.data.records.length; i++) {
      userList.value.push(userListData.data.data.records[i])
    }
  }
}

const onLoad = async () => {
  currentPage.value++
  await getUserList(currentPage.value)
  listLoading.value = false;
}
const onRefresh = async () => {
  currentPage.value = 1
  userList.value = []
  listFinished.value = false
  await getUserList(currentPage.value)
  refreshLoading.value = false
  listLoading.value = false;
}

const blogRefresh = async () => {
  blogCurrentPage.value = 1
  blogList.value = []
  blogListFinished.value = false
  await getBlogList(blogCurrentPage.value)
  refreshLoading.value = false
  listLoading.value = false
}
const searchUser = async () => {
  searching.value = true
  userList.value = []
  currentPage.value = 1
  await getUserList(currentPage.value)
  searching.value = false
}
const blogSearch = ref("")
const searchBlog = async () => {
  searching.value = true
  blogList.value = []
  blogCurrentPage.value = 1
  await getBlogList(blogCurrentPage.value)
  searching.value = false
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe {
  margin: 15px;
  border-radius: 3%;
}


</style>
