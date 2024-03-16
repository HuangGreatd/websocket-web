import { createApp } from 'vue'
import './global.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from "./config/routes.ts";
import BasicLayout from "./layouts/BasicLayout.vue";
import Vant from "vant"
import "../public/icon/iconfont.css"
import 'vant/lib/index.css';
import BlogEditPage from "./pages/BlogEditPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.vue";
import AfterSignUp from "./pages/AfterSignUp.vue";
import ChatPage from "./pages/ChatPage.vue";
import UpdatePasswordPage from "./pages/UpdatePasswordPage.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import { Icon} from 'vant';


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})


const app = createApp(App);
app.component("default-layout", BasicLayout)
app.component("empty-layout", EmptyLayout)
app.component("blog-edit-layout", BlogEditPage)
app.component('blog-layout', BlogPage)
app.component("forget-layout", ForgetPasswordPage)
app.component("after-layout", AfterSignUp)
app.component("chat-layout", ChatPage)
app.component("password-layout", UpdatePasswordPage)
app.use(Vant)
app.use(Icon);
app.use(router)
app.mount('#app')
