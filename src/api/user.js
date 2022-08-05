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

// 我的收藏
export const myCollect = () =>
	request({
		url: "/user/favorites",
	});

// 查看发布房源列表
export const myRent = () =>
	request({
		url: "/user/houses",
	});
