import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 挂载路由实例
export default new VueRouter({
	routes: [
		{
			path: "/",
			name: "layout",
			component: () => import("@/views/layout")
		}
	]
})

