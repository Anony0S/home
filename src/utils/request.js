// request 请求
import axios from "axios";
import store from "@/store";

export const request = axios.create({
	baseURL: "http://liufusong.top:8080",
});

// 添加请求拦截器
request.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		const { user } = store.state;
		// 添加请求头
		if (user && user.token) config.headers.Authorization = user.token;
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);
