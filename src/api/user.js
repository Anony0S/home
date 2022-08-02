import { request } from "@/utils/request";

// 用户登录
export const login = (data) =>
	request({
		method: "POST",
		url: "/user/login",
		data,
	});

// 获取用户信息资料
export const getUserInfo = () =>
	request({
		url: "/user",
	});
