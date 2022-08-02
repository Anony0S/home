import Vue from "vue";
import Vuex from "vuex";
import { getItem, setItem } from "@/utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
	// 存储数据
	state: {
		// 存储用户信息
		user: getItem(),
	},
	// 操作数据
	mutations: {
		setUser(state, data) {
			state.user = data;
			// 将数据存储在 本地存储中
			setItem(state.user);
		},
	},
	// 响应组件中的动作
	actions: {},
});
