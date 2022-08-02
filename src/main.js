import Vue from "vue";
import App from "./App.vue";

// 挂载路由
import router from "@/router";

// 导入 Vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 引入字体图标
import "@/assets/font/iconfont.css";

// 引入全局样式
import "@/styles/index.less";

// 导入 Vuex
import store from "./store";

// 注册指令 Lazyload
import { Lazyload } from "vant";
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
	lazyComponent: true,
});

Vue.config.productionTip = false;

// TODO:避免重复点击

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
