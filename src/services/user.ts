// @ts-ignore
import myAxios from "../plugins/my-axios.js";
// import {getLoginUser, setLoginUser} from "../status/user.ts";

export const getCurrentUser = async () => {
    // const loginUser = getLoginUser();
    // if (!loginUser) {
        try {
                let response = await myAxios.get("/user/current");
                if (response.data.code === 0 && response.data.data) {
                        return response.data.data;
                }
        } catch (error) {
                console.error("获取当前用户失败:", error);
        }
    // }
    // return loginUser
}