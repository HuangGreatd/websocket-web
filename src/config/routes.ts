import Index from "../pages/Index.vue";
import UserPage from "../pages/UserPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import ChatPage from "../pages/ChatPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import MessagePage from "../pages/MessagePage.vue";
import SearchPage from "../pages/SearchPage.vue";
import AfterSignUp from "../pages/AfterSignUp.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserFollowedBlogPage from "../pages/UserFollowedBlogPage.vue";
import UserLikePage from "../pages/UserLikePage.vue";
import UserFansPage from "../pages/UserFansPage.vue";
import UserFollowPage from "../pages/UserFollowPage.vue";
import UserDetailPage from "../pages/UserDetailPage.vue";
import UserBlogCommentPage from "../pages/UserBlogCommentPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import BlogEditPage from "../pages/BlogEditPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import ForgetPasswordPage from "../pages/ForgetPasswordPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import TeamDetailPage from "../pages/TeamDetailPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UpdatePasswordPage from "../pages/UpdatePasswordPage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserTagPage from "../pages/UserTagPage.vue";
import SignUpPage from "../pages/SignUpPage.vue";
import UserMatchPage from "../pages/UserMatchPage.vue";
import UserBlogPage from "../pages/UserBlogPage.vue";


const routes = [
    {path: '/', title: "yuchuang交友", component: Index},
    {path: '/user', title: "用户中心", component: UserPage},
    {path: '/user/edit', title: "修改信息", component: UserEditPage},
    {path: '/user/tag', title: "标签", component: UserTagPage},
    {path: '/user/update', title: "修改信息", component: UserUpdatePage},
    {path: '/user/follow/blog', title: "我的关注", component: UserFollowedBlogPage},
    {path: '/user/like', title: "我收到的赞", component: UserLikePage},
    {path: '/user/follow', title: "我关注的用户", component: UserFollowPage},
    {path: '/user/detail', title: "用户详情", component: UserDetailPage},
    {path: '/user/comment', title: '我的评论', component: UserBlogCommentPage},
    {path: '/user/login', title: "用户登录", component: UserLoginPage,meta:{layout:'empty'}},
    {path: '/user/match', title: "好友匹配", component: UserMatchPage},
    {path: '/user/signup', component: SignUpPage,meta:{layout:'empty'}},
    {path: '/user/blog', title: '我写的博文', component: UserBlogPage},
    {path: '/user/team/join', title: "我加入的队伍", component: UserTeamJoinPage},
    {path: '/user/team/create', title: "我创建的队伍", component: UserTeamCreatePage},
    {path: '/forget', title: '找回密码', component: ForgetPasswordPage, meta: {layout: 'forget'}},
    {path: '/search', title: "搜索", component: SearchPage},
    {path: '/search/userList', title: "搜索到的用户", component: SearchResultPage},
    {path: '/team', title: "活动中心", component: TeamPage},
    {path: '/team/add', title: "创建活动", component: TeamAddPage},
    {path: '/team/detail', title: "活动详情", component: TeamDetailPage},
    {path: '/team/update', title: "活动更新", component: TeamUpdatePage},
    {path: '/after', title: '标签', component: AfterSignUp, meta: {layout: 'after'}},
    {path: '/message', title: "信息中心", component: MessagePage},
    {path: '/chat', component: ChatPage, meta: {layout: 'chat'}},
    {path: '/fans', title: '我的粉丝', component: UserFansPage},
    {path: '/blog/edit', title: "编辑说说", component: BlogEditPage},
    {path: '/update/password', title: '修改密码', component: UpdatePasswordPage, meta: {layout: 'password'}},
    {path: '/blog', title: "说点什么吧", component: BlogPage},


]

export default routes;
