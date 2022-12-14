// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 挂载路由实例
export default new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/FirstPage",
			component: () => import("@/views/Layout"),
			children: [
				{
					path: "firstpage",
					name: "FirstPage",
					component: () => import("@/views/FirstPage"),
				},
				{
					path: "searchhose",
					name: "SearchHose",
					component: () => import("@/views/SearchHose"),
				},
				{
					path: "consolt",
					name: "Consolt",
					component: () => import("@/views/Consolt"),
				},
				{
					path: "my",
					name: "My",
					component: () => import("@/views/My"),
				},
			],
		},
		{
			path: "/city",
			name: "City",
			component: () => import("@/views/City"),
		},
		{
			path: "/map",
			name: "Map",
			component: () => import("@/views/Map"),
		},
		{
			path: "/login",
			name: "Login",
			component: () => import("@/views/Login"),
		},
		{
			path: "/collect",
			name: "MyCollect",
			component: () => import("@/views/My/MyCollect"),
		},
		{
			path: "/detalis/:houseCode",
			name: "Detalis",
			component: () => import("@/views/Detalis"),
			props(params) {
				return {
					houseCode: params.houseCode,
				};
			},
		},
		{
			path: "/myrent",
			name: "MyRent",
			component: () => import("@/views/My/MyRent"),
		},
	],
});
