import Vue from 'vue'
import Antd from 'ant-design-vue' // Antd
import 'ant-design-vue/dist/antd.css' // Antd样式
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  render: h => h(App),
}).$mount('#app')
