import Vue from 'vue'
import App from './App.vue'

// 挂载路由
import router from "@/router"

// 导入 Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
