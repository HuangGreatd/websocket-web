<template>

  <div class="content">
    <router-view/>
  </div>
  <van-tabbar route v-model="active">
    <van-tabbar-item @click="checkLogin('/',1)" class="index" name="index">主页</van-tabbar-item>
    <van-tabbar-item @click="checkLogin('/team',2)" class="team" name="team">活动</van-tabbar-item>

    <van-tabbar-item replace class="van-tabbar-addBlog" @click="checkLogin('/blog/edit',3)">
      <div class="center-wrap">
        <div class="bgc-wrap">
          <van-icon name="plus" size="27" class="icon"/>
        </div>
      </div>
    </van-tabbar-item>
    <van-tabbar-item v-if="hasMessage" name="message" class="message"
                     @click="checkLogin('/message',4)" dot>
      消息
    </van-tabbar-item>
    <van-tabbar-item v-else name="message" class="message" @click="checkLogin('/message',4)">
      消息
    </van-tabbar-item>
    <van-tabbar-item @click="checkLogin('/user',5)" class="user" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import {useRouter} from "vue-router";
import routes from "../config/routes.ts";
import {computed, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import myAxios from "../plugins/my-axios.js";
import {Dialog} from "vant";

const hasMessage = ref(false)
let router = useRouter();
const DEFAULT_TITLE = "yuchuang交友"
const title = ref(DEFAULT_TITLE)
const active = ref(0)


router.beforeEach(async (to) => {
  const toPath = to.path
  console.log(toPath)
  const route = routes.find((routes) => {
    return routes.path === toPath
  })

  document.title = "yuchuang交友"
  title.value = route?.title ?? DEFAULT_TITLE
  if (to.path !== '/user/login') {
    let res = await myAxios.get("/message");
    if (res?.data.code === 0) {
      if (res.data.data) {
        hasMessage.value = true
      } else {
        hasMessage.value = false
      }
    }
  }
})
const onClickLeft = () => {
  router.push("/user/match")
};
const onClickRight = () => {
  router.push("/search")
};

const checkLogin = async (to, index) => {
  let user = await getCurrentUser();
  if (!user) {
    // 无标题
    Dialog.alert({
      message: '该功能需要登陆后使用,是否登录',
      confirmButtonText: "去登录"
    }).then(() => {
      // on close
      router.replace("/user/login")
    }).catch(() => {
    });
  } else {
    await router.push(to)
    let activeElement = document.getElementsByClassName(active.value)
    activeElement.item(0).style.color = '#1989fa';
  }
}

</script>

<style scoped>
.content {
  padding-bottom: 70px;
}

.center-wrap {
  width: 80px;
  height: 80px;
  position: relative;
}

.bgc-wrap {
  width: 49px;
  height: 44px;
  background-color: red;
  position: absolute;
  border-radius: 5px;
  left: 19px;
  top: 15px;
}

.icon {
  margin-left: -3px;
  margin-top: -3px;
  color: white;
}


[class*=van-hairline]::after {
  border: none !important
}
</style>
